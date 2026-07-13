<script setup>
import { computed } from 'vue'

const props = defineProps({
  description: { type: String, required: true },
  code: { type: String, default: '' },
  html: { type: String, default: '' },
  css: { type: String, default: '' },
  js: { type: String, default: '' },
  category: { type: String, default: 'html' },
})

const isStyleLesson = computed(() =>
  props.category === 'css' || props.category === 'css3',
)

const isJsLesson = computed(() => props.category === 'js')

const displayCode = computed(() => {
  if (isJsLesson.value) {
    return `<!-- HTML -->\n${props.html}\n\n// JavaScript\n${props.js}`
  }
  if (isStyleLesson.value) {
    return `/* HTML */\n${props.html}\n\n/* CSS */\n${props.css}`
  }
  return props.code
})

const fileName = computed(() => {
  if (isJsLesson.value) return 'example.html + script.js'
  if (isStyleLesson.value) return 'example.html + style.css'
  return 'example.html'
})

const previewHtml = computed(() => {
  const baseStyle = `
    body { font-family: system-ui, sans-serif; padding: 16px; margin: 0; line-height: 1.6; color: #334155; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #cbd5e1; padding: 8px; text-align: left; }
    th { background: #f1f5f9; }
    nav a { margin-right: 12px; color: #3b82f6; }
    img, video { max-width: 100%; border-radius: 6px; }
    fieldset { border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; }
    legend { padding: 0 8px; font-weight: 600; }
    pre { background: #f8fafc; padding: 12px; border-radius: 6px; overflow-x: auto; white-space: pre-wrap; }
    blockquote { margin: 0; padding: 10px 16px; color: #64748b; background: #f8fafc; border-radius: 8px; }
    button { padding: 8px 16px; margin: 4px 4px 4px 0; border: none; border-radius: 6px; background: #3b82f6; color: white; cursor: pointer; font-size: 14px; }
    button:hover { background: #2563eb; }
    input { padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; margin: 4px 4px 4px 0; }
    ul { padding-left: 20px; }
  `

  if (isJsLesson.value) {
    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <style>${baseStyle}</style>
</head>
<body>${props.html}<script>${props.js}<\/script></body>
</html>`
  }

  const bodyContent = isStyleLesson.value ? props.html : props.code
  const lessonCss = isStyleLesson.value ? props.css : ''

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <style>
    ${baseStyle}
    ${lessonCss}
  </style>
</head>
<body>${bodyContent}</body>
</html>`
})
</script>

<template>
  <section class="example-section">
    <div class="section-header">
      <div class="section-icon">01</div>
      <div>
        <h2>代码示例</h2>
        <p>{{ description }}</p>
      </div>
    </div>

    <div class="example-grid">
      <div class="code-panel">
        <div class="window-bar">
          <span class="dot red" />
          <span class="dot yellow" />
          <span class="dot green" />
          <span class="window-title">{{ fileName }}</span>
        </div>
        <pre><code>{{ displayCode }}</code></pre>
      </div>

      <div class="preview-panel">
        <div class="window-bar preview-bar">
          <span class="preview-label">实时预览</span>
          <span class="live-badge">Live</span>
        </div>
        <iframe
          class="preview-frame"
          :srcdoc="previewHtml"
          sandbox="allow-scripts allow-same-origin"
          title="示例预览"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.example-section {
  background: var(--bg-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.section-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 24px 28px 0;
}

.section-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  background: var(--accent-html-soft);
  color: var(--accent-html);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  flex-shrink: 0;
}

.section-header h2 {
  margin: 0;
  font-size: 1.12rem;
  font-weight: 700;
  color: var(--text-primary);
}

.section-header p {
  margin: 6px 0 0;
  color: var(--text-secondary);
  font-size: 0.92rem;
  max-width: 62ch;
}

.example-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  padding: 20px 28px 28px;
}

.window-bar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 10px 14px;
  background: #232a3b;
  border-bottom: 1px solid rgb(255 255 255 / 0.06);
}

.preview-bar {
  background: var(--bg-muted);
  border-bottom: 1px solid var(--border);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.red { background: #ff5f57; }
.yellow { background: #febc2e; }
.green { background: #28c840; }

.window-title {
  margin-left: 6px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: #9aa5ba;
}

.preview-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.live-badge {
  margin-left: auto;
  padding: 2px 8px;
  border-radius: var(--radius-full);
  background: var(--success-soft);
  color: var(--success);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.code-panel,
.preview-panel {
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--border-strong);
  background: var(--bg-code);
}

.preview-panel {
  background: var(--bg-surface);
}

.code-panel pre {
  margin: 0;
  padding: 18px;
  background: var(--bg-code);
  color: #dbe4f5;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  line-height: 1.7;
  overflow: auto;
  max-height: 440px;
}

.preview-frame {
  display: block;
  width: 100%;
  height: 440px;
  border: none;
  background: #fff;
}

@media (max-width: 900px) {
  .example-grid {
    grid-template-columns: 1fr;
  }

  .preview-frame {
    height: 320px;
  }

  .code-panel pre {
    max-height: 320px;
  }
}
</style>
