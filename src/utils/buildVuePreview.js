function parseSfc(content) {
  const scriptMatch = content.match(/<script\s+setup[^>]*>([\s\S]*?)<\/script>/)
  const templateMatch = content.match(/<template>([\s\S]*?)<\/template>/)
  const styleMatch = content.match(/<style(?:\s+scoped)?[^>]*>([\s\S]*?)<\/style>/)
  return {
    script: scriptMatch ? scriptMatch[1].trim() : '',
    template: templateMatch ? templateMatch[1].trim() : '',
    style: styleMatch ? styleMatch[1].trim() : '',
  }
}

function componentName(filePath) {
  return filePath.split('/').pop().replace('.vue', '')
}

function collectVueApis(script) {
  const match = script.match(/import\s+\{([^}]+)\}\s+from\s+['"]vue['"]/)
  if (!match) return []
  return match[1].split(',').map((s) => s.trim()).filter(Boolean)
}

function stripImports(script) {
  return script
    .replace(/import\s+\{[^}]+\}\s+from\s+['"]vue['"]\s*;?\s*/g, '')
    .replace(/import\s+\w+\s+from\s+['"][^'"]+['"]\s*;?\s*/g, '')
    .trim()
}

function extractDefineProps(script) {
  const match = script.match(/defineProps\s*\(\s*(\{[\s\S]*?\})\s*\)/)
  return match ? match[1] : null
}

function extractDefineEmits(script) {
  const match = script.match(/defineEmits\s*\(\s*(\[[^\]]*\])\s*\)/)
  return match ? match[1] : null
}

function inferReturnVars(script) {
  const vars = []
  const declRe = /(?:const|let)\s+(\w+)\s*=/g
  let m
  while ((m = declRe.exec(script))) vars.push(m[1])
  const fnRe = /function\s+(\w+)\s*\(/g
  while ((m = fnRe.exec(script))) vars.push(m[1])
  return vars
}

function buildComponentDef(name, sfc) {
  const { script, template } = sfc
  const propsDef = extractDefineProps(script)
  const emitsDef = extractDefineEmits(script)
  const vueApis = collectVueApis(script)
  let body = stripImports(script)
  body = body.replace(/const\s+props\s*=\s*defineProps\s*\([\s\S]*?\)\s*;?/g, '')
  body = body.replace(/defineProps\s*\(\s*\{[\s\S]*?\}\s*\)\s*;?/g, '')
  body = body.replace(/const\s+emit\s*=\s*defineEmits\s*\([^)]*\)\s*;?/g, '')

  const tpl = template
    .replace(/@click="emit\('([^']+)'\)"/g, `@click="$emit('$1')"`)
    .replace(/@click="emit\("([^"]+)"\)"/g, `@click="$emit('$1')"`)

  const parts = [`name: '${name}'`]
  if (propsDef) parts.push(`props: ${propsDef}`)
  if (emitsDef) parts.push(`emits: ${emitsDef}`)

  const returnVars = inferReturnVars(body)
  if (body || vueApis.length) {
    const destructure = vueApis.length ? `const { ${vueApis.join(', ')} } = Vue\n` : ''
    const ret = returnVars.length ? `\nreturn { ${returnVars.join(', ')} }` : ''
    parts.push(`setup() {\n${destructure}${body}${ret}\n}`)
  }

  parts.push(`template: \`${tpl}\``)
  return `const ${name} = {\n  ${parts.join(',\n  ')}\n}`
}

function needsEcharts(files) {
  return files.some((f) => /echarts/.test(f.content))
}

function needsRouter(files) {
  return files.some(
    (f) =>
      /vue-router/.test(f.content)
      || /useRouter/.test(f.content)
      || /RouterLink/.test(f.content)
      || /RouterView/.test(f.content),
  )
}

function wrapHtml({ styles, script, echarts, router }) {
  const libs = [
    '<script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>',
  ]
  if (router) {
    libs.push('<script src="https://unpkg.com/vue-router@4/dist/vue-router.global.js"><\/script>')
  }
  if (echarts) {
    libs.push('<script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"><\/script>')
  }

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: system-ui, sans-serif; padding: 16px; margin: 0; line-height: 1.6; color: #334155; }
    button { padding: 8px 16px; margin: 4px 8px 4px 0; border: none; border-radius: 6px; background: #3b82f6; color: #fff; cursor: pointer; }
    a { color: #3b82f6; margin-right: 12px; }
    ${styles}
  </style>
  ${libs.join('\n  ')}
</head>
<body>
  <div id="app"></div>
  <script>${script}<\/script>
</body>
</html>`
}

function buildRouterPreview(files, styles) {
  const vueFiles = files.filter((f) => f.name.endsWith('.vue'))
  const defs = vueFiles.map((f) => buildComponentDef(componentName(f.name), parseSfc(f.content)))

  const hasHome = vueFiles.some((f) => /Home\.vue/.test(f.name))
  const homeDef = hasHome
    ? ''
    : `const Home = { template: '<h2>首页</h2><p>路由预览：当前为 Hash 模式</p>' }`

  const script = `
const { createApp } = Vue
const { createRouter, createWebHashHistory } = VueRouter

${defs.join('\n\n')}
${homeDef}

const About = { template: '<h2>关于</h2><p>这是 About 页面</p>' }

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: ${hasHome ? 'Home' : 'Home'} },
  { path: '/about', name: 'about', component: About },
  { path: '/lesson/:id', name: 'lesson', component: { template: '<p>课程页：{{ $route.params.id }}</p>' } },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const App = {
  components: { ${vueFiles.map((f) => componentName(f.name)).join(', ')} },
  template: \`${parseSfc(vueFiles.find((f) => f.name.endsWith('App.vue'))?.content || '<RouterView />').template}\`,
}

createApp(App).use(router).mount('#app')
`

  return wrapHtml({ styles, script, router: true })
}

function transformEchartsSetup(script) {
  return script
    .replace(/import\s+\*\s+as\s+echarts\s+from\s+['"]echarts['"]\s*;?/g, '')
    .replace(/echarts\.init/g, 'echarts.init')
}

function buildEchartsComponentDef(name, sfc) {
  const { script, template } = sfc
  const vueApis = collectVueApis(script)
  let body = stripImports(script)
  body = transformEchartsSetup(body)

  const parts = [`name: '${name}'`]
  const returnVars = inferReturnVars(body)
  const destructure = vueApis.length ? `const { ${vueApis.join(', ')} } = Vue\n` : ''
  const ret = returnVars.length ? `\nreturn { ${returnVars.join(', ')} }` : ''
  parts.push(`setup() {\n${destructure}${body}${ret}\n}`)
  parts.push(`template: \`${template}\``)
  return `const ${name} = {\n  ${parts.join(',\n  ')}\n}`
}

export function buildPreviewFromFiles(files) {
  if (!files?.length) return null

  const vueFiles = files.filter((f) => f.name.endsWith('.vue'))
  if (!vueFiles.length) return null

  const styles = vueFiles.map((f) => parseSfc(f.content).style).filter(Boolean).join('\n')
  const echarts = needsEcharts(files)

  if (needsRouter(files)) {
    return buildRouterPreview(files, styles)
  }

  const appFile = vueFiles.find((f) => f.name.endsWith('App.vue'))
  const chartFile = vueFiles.find((f) => /ChartDemo\.vue$/.test(f.name))

  if (!appFile && chartFile) {
    const def = buildEchartsComponentDef(componentName(chartFile.name), parseSfc(chartFile.content))
    const script = `
const { createApp } = Vue
${def}
createApp(ChartDemo).mount('#app')
`
    return wrapHtml({ styles, script, echarts })
  }

  const componentFiles = vueFiles.filter((f) => f !== appFile)
  const defs = componentFiles.map((f) =>
    echarts
      ? buildEchartsComponentDef(componentName(f.name), parseSfc(f.content))
      : buildComponentDef(componentName(f.name), parseSfc(f.content)),
  )

  if (appFile) {
    const appSfc = parseSfc(appFile.content)
    const imported = [...appSfc.script.matchAll(/import\s+(\w+)\s+from/g)].map((m) => m[1])
    const usedInTemplate = [...appSfc.template.matchAll(/<([A-Z][A-Za-z0-9]*)/g)].map((m) => m[1])
    const components = imported.length
      ? imported
      : [...new Set(usedInTemplate.filter((n) => n !== 'RouterView' && n !== 'RouterLink'))]
    const appApis = collectVueApis(appSfc.script)
    const appBody = stripImports(appSfc.script)
    const appVars = inferReturnVars(appBody)
    const destructure = appApis.length ? `const { ${appApis.join(', ')} } = Vue\n` : ''
    const ret = appVars.length ? `\nreturn { ${appVars.join(', ')} }` : ''

    const script = `
const { createApp } = Vue
${defs.join('\n\n')}
const App = {
  components: { ${components.join(', ')} },
  setup() {
    ${destructure}${appBody}${ret}
  },
  template: \`${appSfc.template}\`,
}
createApp(App).mount('#app')
`
    return wrapHtml({ styles, script, echarts })
  }

  const root = vueFiles[0]
  const def = echarts
    ? buildEchartsComponentDef(componentName(root.name), parseSfc(root.content))
    : buildComponentDef(componentName(root.name), parseSfc(root.content))
  const script = `
const { createApp } = Vue
${def}
createApp(${componentName(root.name)}).mount('#app')
`
  return wrapHtml({ styles, script, echarts })
}
