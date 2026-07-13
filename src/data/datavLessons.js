const mainJs = `import { createApp } from 'vue'
import App from './App.vue'
import DataVVue3 from '@kjgl77/datav-vue3'

const app = createApp(App)
app.use(DataVVue3)
app.mount('#app')`

const darkPageStyle = `html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  background: #0b1324;
}`

function datavFiles(componentBody, extraStyle = '') {
  return [
    {
      name: 'package.json',
      content: `{
  "dependencies": {
    "vue": "^3",
    "@kjgl77/datav-vue3": "^1.7.0"
  }
}`,
    },
    {
      name: 'src/main.js',
      content: mainJs,
    },
    {
      name: 'src/App.vue',
      content: `<script setup>
import PanelDemo from './components/PanelDemo.vue'
</script>

<template>
  <PanelDemo />
</template>

<style>
${darkPageStyle}
${extraStyle}
</style>`,
    },
    {
      name: 'src/components/PanelDemo.vue',
      content: componentBody,
    },
  ]
}

function darkPreview(body, height = 280) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; background: #0b1324; font-family: system-ui, sans-serif; color: #7ee7ff; }
    .wrap { padding: 16px; min-height: ${height}px; }
    .panel { border: 1px solid #2563eb; background: rgb(12 28 56 / 0.85); padding: 16px; }
    .muted { color: #94a3b8; }
    .num { color: #3ec1ff; font-size: 28px; font-weight: 700; text-align: center; }
    .label { text-align: center; color: #94a3b8; margin-bottom: 8px; }
  </style>
</head>
<body><div class="wrap">${body}</div></body>
</html>`
}

const borderBoxList = Array.from({ length: 13 }, (_, i) => ({
  composition: `dv-border-box-${i + 1}`,
  options: `BorderBox${i + 1}`,
  when: `边框样式 ${i + 1}`,
  use: i < 4 ? '通用面板' : i < 8 ? 'KPI / 图表外框' : '标题区 / 强调面板',
}))

const decorationList = Array.from({ length: 12 }, (_, i) => ({
  composition: `dv-decoration-${i + 1}`,
  options: `Decoration${i + 1}`,
  when: `装饰样式 ${i + 1}`,
  use: i % 3 === 0 ? '标题两侧' : i % 3 === 1 ? '区域分割线' : '角落点缀',
}))

export const datavLessons = [
  {
    id: 'datav-intro',
    category: 'datav',
    title: 'DataV 简介与安装',
    example: {
      description:
        'DataV 是阿里开源的大屏可视化组件库；Vue3 项目用 @kjgl77/datav-vue3，负责边框、装饰、翻牌、轮播等，复杂图表配合 ECharts。',
      files: datavFiles(`<template>
  <dv-border-box-1 class="panel">
    <div class="title">教育数据大屏</div>
    <div class="sub">npm install @kjgl77/datav-vue3</div>
  </dv-border-box-1>
</template>

<style scoped>
.panel { width: 100%; height: 260px; }
.title { text-align: center; font-size: 22px; color: #7ee7ff; padding-top: 90px; }
.sub { text-align: center; color: #94a3b8; margin-top: 8px; font-size: 13px; }
</style>`),
      previewHtml: darkPreview(`
  <div class="panel" style="height:260px;text-align:center;padding-top:90px;">
    <div style="font-size:22px;">教育数据大屏</div>
    <div class="muted" style="margin-top:8px;font-size:13px;">npm install @kjgl77/datav-vue3</div>
  </div>`),
    },
    quiz: {
      question: 'Vue3 项目使用 DataV 组件库，正确的注册方式是？',
      options: [
        {
          text: 'main.js 中 app.use(DataVVue3)',
          isCorrect: true,
          steps: [
            '1. npm install @kjgl77/datav-vue3',
            '2. import DataVVue3 from "@kjgl77/datav-vue3"',
            '3. createApp(App).use(DataVVue3).mount(...)',
            '4. 模板中直接使用 <dv-border-box-1> 等组件',
          ],
        },
        {
          text: '在 index.html 写 <datav-app>',
          isCorrect: false,
          steps: ['DataV 不是 HTML 标签', '需 npm 安装并在 main.js 注册'],
        },
        {
          text: '每个组件单独 import echarts',
          isCorrect: false,
          steps: ['DataV 与 ECharts 是不同库', 'DataV 注册一次即可全局使用'],
        },
      ],
    },
  },
  {
    id: 'datav-catalog',
    category: 'datav',
    title: '组件全览',
    knowledge: {
      title: '@kjgl77/datav-vue3 组件清单',
      intro:
        'DataV 组件默认宽高 100%，需父容器有明确尺寸。内容放在默认插槽内；布局请针对 .dv-border-box-content 容器，避免样式冲突。复杂统计图用 ECharts，DataV 负责边框、装饰与动效数据组件。',
      flowLabel: '推荐选型',
      flow: '布局容器(FullScreen) → 边框 BorderBox → 装饰 Decoration → 数据组件(翻牌/轮播/水位) → 内部嵌 ECharts 图表',
      tableHeaders: ['模板标签', '导入名', '说明', '典型场景'],
      phases: [
        { name: '边框 BorderBox（13 种）', desc: '所有边框支持 color、backgroundColor；部分支持 reverse 翻转动画。', hooks: borderBoxList },
        { name: '装饰 Decoration（12 种）', desc: '纯视觉装饰，用 style 设 width/height；reverse 控制方向。', hooks: decorationList },
        {
          name: '数据展示组件',
          hooks: [
            { composition: 'dv-digital-flop', options: 'DigitalFlop', when: '数字翻牌动效', use: '在校生、预警数等 KPI' },
            { composition: 'dv-scroll-board', options: 'ScrollBoard', when: '表格轮播', use: '预警榜、明细列表' },
            { composition: 'dv-scroll-ranking-board', options: 'ScrollRankingBoard', when: '排名轮播', use: '学校排名、分数 TOP10' },
            { composition: 'dv-percent-pond', options: 'PercentPond', when: '百分比水池', use: '合格率、覆盖率' },
            { composition: 'dv-water-level-pond', options: 'WaterLevelPond', when: '水位图', use: '完成度、指标达成率' },
            { composition: 'dv-capsule-chart', options: 'CapsuleChart', when: '胶囊柱图', use: '横向对比、进度条式排名' },
            { composition: 'dv-active-ring-chart', options: 'ActiveRingChart', when: '动态环图', use: '占比分布、结构组成' },
            { composition: 'dv-conical-column-chart', options: 'ConicalColumnChart', when: '锥形柱图', use: '立体柱状对比' },
            { composition: 'dv-flyline-chart', options: 'FlylineChart', when: '飞线图', use: '地图迁徙、生源流向' },
          ],
        },
        {
          name: '工具与其他',
          hooks: [
            { composition: 'dv-loading', options: 'Loading', when: '加载动画', use: '接口请求等待' },
            { composition: 'dv-full-screen-container', options: 'FullScreenContainer', when: '全屏缩放容器', use: '1920×1080 等比适配' },
          ],
        },
      ],
      syntax: {
        title: '引入方式',
        intro: '可全局注册（推荐）或按需 import 单个组件。',
        blocks: [
          {
            title: '全局注册',
            code: `// main.js
import DataVVue3 from '@kjgl77/datav-vue3'
createApp(App).use(DataVVue3).mount('#app')

// 模板中
<dv-border-box-8 :color="['#3ec1ff','#1d4ed8']" />`,
          },
          {
            title: '按需引入',
            code: `<script setup>
import { BorderBox8, Decoration8, DigitalFlop } from '@kjgl77/datav-vue3'
</script>

<template>
  <BorderBox8 style="width:400px;height:200px;">内容</BorderBox8>
</template>`,
          },
        ],
      },
      tips: [
        '组件默认 100% 宽高，父级必须有明确尺寸，否则不显示。',
        '父容器尺寸变化后，可给组件加 :key 强制刷新，或调用 ref.initWH()。',
        '装饰层 z-index 不要挡住 ECharts 的鼠标事件。',
        '地图飞线用 FlylineChart；精细地图仍推荐 ECharts geo。',
      ],
    },
    example: {
      description: '上方为 DataV 全部组件分类清单；开发时先选容器和边框，再选数据组件，最后嵌 ECharts。',
      files: datavFiles(`<template>
  <div class="tip">请查看上方「组件全览」知识点表格</div>
</template>

<style scoped>
.tip { color: #7ee7ff; text-align: center; padding: 100px 20px; }
</style>`),
      previewHtml: darkPreview(`<div class="panel" style="text-align:center;padding:80px 20px;">
  <div>边框 13 · 装饰 12 · 数据组件 9 · 工具 2</div>
  <div class="muted" style="margin-top:12px;font-size:13px;">详见上方组件清单表格</div>
</div>`),
    },
    quiz: {
      question: 'DataV 与 ECharts 在大屏中的分工是？',
      options: [
        {
          text: 'DataV 做布局装饰，ECharts 画复杂统计图',
          isCorrect: true,
          steps: [
            '1. BorderBox 做面板外框',
            '2. DigitalFlop / ScrollBoard 展示 KPI',
            '3. ECharts 画折线、柱状、地图',
            '4. 两者嵌套组合',
          ],
        },
        {
          text: 'DataV 完全替代 ECharts',
          isCorrect: false,
          steps: ['DataV 图表类组件有限', '复杂交互仍用 ECharts'],
        },
        {
          text: 'ECharts 负责边框动画',
          isCorrect: false,
          steps: ['边框是 DataV BorderBox', 'ECharts 是统计图表库'],
        },
      ],
    },
  },
  {
    id: 'datav-fullscreen',
    category: 'datav',
    title: '全屏容器 FullScreenContainer',
    example: {
      description:
        'dv-full-screen-container 按设计稿（如 1920×1080）等比缩放整屏，是大屏适配的常用方案之一。',
      files: datavFiles(`<template>
  <dv-full-screen-container class="screen">
    <div class="header">教学质量监测大屏</div>
    <div class="body">设计稿 1920×1080，自动 scale 适配</div>
  </dv-full-screen-container>
</template>

<style scoped>
.screen { background: #0b1324; color: #7ee7ff; }
.header { height: 80px; line-height: 80px; text-align: center; font-size: 24px; letter-spacing: 4px; }
.body { height: calc(100% - 80px); display: flex; align-items: center; justify-content: center; color: #94a3b8; }
</style>`),
      previewHtml: `<!DOCTYPE html>
<html lang="zh-CN"><head><meta charset="utf-8"><style>
body{margin:0;background:#000;overflow:hidden;font-family:system-ui,sans-serif}
.box{width:960px;height:540px;margin:20px auto;border:1px solid #2563eb;background:#0b1324;color:#7ee7ff;transform-origin:center top}
.h{height:60px;line-height:60px;text-align:center;font-size:18px;letter-spacing:3px}
.b{height:calc(100% - 60px);display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:13px}
</style></head><body>
<div class="box"><div class="h">教学质量监测大屏</div><div class="b">1920×1080 设计稿 → scale 缩放适配</div></div>
</body></html>`,
    },
    quiz: {
      question: 'FullScreenContainer 主要解决什么问题？',
      options: [
        {
          text: '按设计稿等比缩放整屏内容',
          isCorrect: true,
          steps: [
            '1. 以 1920×1080 为基准开发',
            '2. 容器自动 scale 到当前视口',
            '3. 内部用固定 px 布局',
            '4. scale 变化后 ECharts 需 resize',
          ],
        },
        {
          text: '自动请求后端数据',
          isCorrect: false,
          steps: ['它是布局缩放容器', '数据仍通过 API 获取'],
        },
        {
          text: '替代 vue-router',
          isCorrect: false,
          steps: ['与路由无关', '是大屏视觉适配方案'],
        },
      ],
    },
  },
  {
    id: 'datav-border',
    category: 'datav',
    title: '边框 BorderBox',
    example: {
      description: 'dv-border-box-1 ~ 13 提供科技感边框；支持 color 自定义颜色、backgroundColor 背景、reverse 翻转动画。',
      files: datavFiles(`<template>
  <div class="row">
    <dv-border-box-8 :color="['#3ec1ff', '#1d4ed8']" backgroundColor="rgb(11 30 60 / 0.6)" class="box">
      <div class="label">在校生</div>
      <div class="num">12,580</div>
    </dv-border-box-8>
    <dv-border-box-8 :reverse="true" :color="['#34d399', '#047857']" class="box">
      <div class="label">升学率</div>
      <div class="num">96.2%</div>
    </dv-border-box-8>
  </div>
</template>

<style scoped>
.row { display: flex; gap: 12px; height: 200px; padding: 8px; }
.box { flex: 1; }
.label { color: #94a3b8; text-align: center; padding-top: 50px; }
.num { color: #3ec1ff; font-size: 28px; text-align: center; font-weight: 700; }
</style>`),
      previewHtml: darkPreview(`<div style="display:flex;gap:12px;height:200px;">
  <div class="panel" style="flex:1;text-align:center;padding-top:50px;"><div class="label">在校生</div><div class="num">12,580</div></div>
  <div class="panel" style="flex:1;text-align:center;padding-top:50px;"><div class="label">升学率</div><div class="num">96.2%</div></div>
</div>`, 220),
    },
    quiz: {
      question: 'BorderBox 的 color 属性作用是？',
      options: [
        {
          text: '自定义边框主色和副色（数组）',
          isCorrect: true,
          steps: [
            '1. :color="[\'#3ec1ff\', \'#1d4ed8\']"',
            '2. backgroundColor 设面板底色',
            '3. reverse 翻转动画方向',
            '4. 默认宽高 100%',
          ],
        },
        {
          text: '设置文字颜色',
          isCorrect: false,
          steps: ['color 是边框配色', '文字颜色在内容区 CSS 设置'],
        },
        {
          text: '连接数据库',
          isCorrect: false,
          steps: ['纯前端装饰组件', '数据通过 API'],
        },
      ],
    },
  },
  {
    id: 'datav-decoration',
    category: 'datav',
    title: '装饰 Decoration',
    example: {
      description: 'dv-decoration-1 ~ 12 用于标题两侧装饰线、区域分割线；:color 自定义颜色，:reverse 控制方向。',
      files: datavFiles(`<template>
  <div class="header">
    <dv-decoration-8 :color="['#3ec1ff','#1d4ed8']" style="width:140px;height:40px;" />
    <span class="title">教学质量监测</span>
    <dv-decoration-8 :reverse="true" :color="['#3ec1ff','#1d4ed8']" style="width:140px;height:40px;" />
  </div>
  <dv-decoration-5 style="width:100%;height:40px;" />
</template>

<style scoped>
.header { display: flex; align-items: center; justify-content: center; gap: 12px; height: 70px; }
.title { color: #7ee7ff; font-size: 20px; letter-spacing: 4px; }
</style>`),
      previewHtml: darkPreview(`<div style="text-align:center;padding:30px 0;">
  <div style="display:flex;align-items:center;justify-content:center;gap:12px;">
    <div style="width:120px;height:3px;background:linear-gradient(90deg,transparent,#3ec1ff)"></div>
    <span style="letter-spacing:4px;">教学质量监测</span>
    <div style="width:120px;height:3px;background:linear-gradient(90deg,#3ec1ff,transparent)"></div>
  </div>
  <div style="margin-top:20px;height:2px;background:linear-gradient(90deg,transparent,#1d4ed8,transparent);opacity:.6"></div>
</div>`, 160),
    },
    quiz: {
      question: 'Decoration 组件通常用在大屏的什么位置？',
      options: [
        {
          text: '标题两侧或区域分割线',
          isCorrect: true,
          steps: ['1. 标题左右各放一个 decoration', '2. reverse 控制方向', '3. 用 style 控制宽高'],
        },
        {
          text: '替代表格展示数据',
          isCorrect: false,
          steps: ['Decoration 是纯装饰', '数据用 ScrollBoard'],
        },
        {
          text: '作为路由容器',
          isCorrect: false,
          steps: ['与路由无关', '是视觉装饰组件'],
        },
      ],
    },
  },
  {
    id: 'datav-digital',
    category: 'datav',
    title: '数字翻牌 DigitalFlop',
    example: {
      description: 'dv-digital-flop 用于 KPI 数字翻牌动效；config.number 传数字数组，content 定义格式，style 设字体。',
      files: datavFiles(`<script setup>
import { ref } from 'vue'

const config = ref({
  number: [12580],
  content: '{nt}',
  style: { fontSize: 36, fill: '#3ec1ff' },
})
</script>

<template>
  <dv-border-box-13 class="wrap">
    <div class="label">全区在校生</div>
    <dv-digital-flop :config="config" style="width:220px;height:50px;margin:0 auto;" />
  </dv-border-box-13>
</template>

<style scoped>
.wrap { width: 100%; height: 180px; padding: 20px; }
.label { color: #94a3b8; text-align: center; margin-bottom: 12px; }
</style>`),
      previewHtml: darkPreview(`<div class="panel" style="text-align:center;padding:30px;">
  <div class="label">全区在校生</div>
  <div class="num" id="n">0</div>
</div><script>
let c=0,t=12580,e=document.getElementById('n'),i=setInterval(()=>{c+=Math.ceil((t-c)/8);if(c>=t){c=t;clearInterval(i)}e.textContent=c.toLocaleString()},40);
<\/script>`, 200),
    },
    quiz: {
      question: 'DigitalFlop 的 config.number 应传入什么？',
      options: [
        {
          text: '数字数组，如 [12580]',
          isCorrect: true,
          steps: ['1. number: [12580]', '2. content: "{nt}"', '3. 更新 config 触发翻牌'],
        },
        {
          text: '字符串 "12,580"',
          isCorrect: false,
          steps: ['number 需要数字数组', '格式化用 content'],
        },
        {
          text: 'CSS 颜色值',
          isCorrect: false,
          steps: ['颜色在 style.fill', 'number 是数值数组'],
        },
      ],
    },
  },
  {
    id: 'datav-scroll',
    category: 'datav',
    title: '轮播表 ScrollBoard',
    example: {
      description: 'dv-scroll-board 用于预警榜、明细列表；config 含 header、data（二维数组）、rowNum 可见行数、配色等。',
      files: datavFiles(`<script setup>
import { ref } from 'vue'

const config = ref({
  header: ['学校', '预警类型', '数量'],
  data: [
    ['第一中学', '辍学风险', '3'],
    ['实验小学', '成绩下滑', '5'],
    ['育才中学', '缺勤', '2'],
    ['希望中学', '心理预警', '1'],
  ],
  rowNum: 3,
  headerBGC: '#0f2a52',
  oddRowBGC: '#0b1e3d',
  evenRowBGC: '#0d2448',
  waitTime: 2000,
})
</script>

<template>
  <dv-scroll-board :config="config" style="width:100%;height:220px;" />
</template>`),
      previewHtml: `<!DOCTYPE html>
<html lang="zh-CN"><head><meta charset="utf-8"><style>
body{margin:0;background:#0b1324;font-family:system-ui,sans-serif;color:#cbd5e1;padding:16px}
table{width:100%;border-collapse:collapse;font-size:13px}
th{background:#0f2a52;padding:10px;text-align:left;color:#7ee7ff}
td{padding:10px;border-bottom:1px solid #1e293b}
tr:nth-child(even) td{background:#0d2448}
tr:nth-child(odd) td{background:#0b1e3d}
</style></head><body>
<table><thead><tr><th>学校</th><th>预警类型</th><th>数量</th></tr></thead><tbody id="tb"></tbody></table>
<script>
const rows=[['第一中学','辍学风险','3'],['实验小学','成绩下滑','5'],['育才中学','缺勤','2'],['希望中学','心理预警','1']];
let i=0,tb=document.getElementById('tb');
function r(){tb.innerHTML=rows.slice(i,i+3).map(x=>'<tr>'+x.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('');i=(i+1)%rows.length}
r();setInterval(r,2000);
<\/script></body></html>`,
    },
    quiz: {
      question: 'ScrollBoard 的 rowNum 表示什么？',
      options: [
        {
          text: '可视区域同时显示的行数',
          isCorrect: true,
          steps: ['1. rowNum: 3 显示 3 行', '2. 超出自动轮播', '3. waitTime 控制间隔'],
        },
        {
          text: '数据总行数上限',
          isCorrect: false,
          steps: ['data 长度不限', 'rowNum 是可见行数'],
        },
        {
          text: '表格列数',
          isCorrect: false,
          steps: ['列数由 header 长度决定', 'rowNum 是行数'],
        },
      ],
    },
  },
  {
    id: 'datav-scroll-ranking',
    category: 'datav',
    title: '排名轮播 ScrollRankingBoard',
    example: {
      description: 'dv-scroll-ranking-board 专用于排名展示，适合学校积分榜、成绩 TOP 榜，配置格式与 ScrollBoard 类似。',
      files: datavFiles(`<script setup>
import { ref } from 'vue'

const config = ref({
  data: [
    { name: '第一中学', value: 98.6 },
    { name: '实验中学', value: 96.2 },
    { name: '育才中学', value: 94.8 },
    { name: '希望中学', value: 92.1 },
  ],
  rowNum: 4,
  unit: '分',
})
</script>

<template>
  <dv-scroll-ranking-board :config="config" style="width:100%;height:220px;" />
</template>`),
      previewHtml: darkPreview(`<div class="panel" style="padding:12px;font-size:13px;">
  <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #1e293b;"><span>1 第一中学</span><span style="color:#3ec1ff">98.6分</span></div>
  <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #1e293b;"><span>2 实验中学</span><span style="color:#3ec1ff">96.2分</span></div>
  <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #1e293b;"><span>3 育才中学</span><span style="color:#3ec1ff">94.8分</span></div>
  <div style="display:flex;justify-content:space-between;padding:8px 0;"><span>4 希望中学</span><span style="color:#3ec1ff">92.1分</span></div>
</div>`, 220),
    },
    quiz: {
      question: 'ScrollRankingBoard 与 ScrollBoard 的主要区别？',
      options: [
        {
          text: 'Ranking 专做排名榜，data 为 { name, value } 结构',
          isCorrect: true,
          steps: [
            '1. ScrollBoard 是通用表格',
            '2. ScrollRankingBoard 适合 TOP 排名',
            '3. 可设 unit 单位',
          ],
        },
        {
          text: 'Ranking 只能显示 1 行',
          isCorrect: false,
          steps: ['rowNum 控制可见行数', '可显示多行并轮播'],
        },
        {
          text: 'Ranking 替代 ECharts 地图',
          isCorrect: false,
          steps: ['排名轮播组件', '地图用 ECharts geo'],
        },
      ],
    },
  },
  {
    id: 'datav-percent-pond',
    category: 'datav',
    title: '进度池 PercentPond',
    example: {
      description: 'dv-percent-pond 用「水池」动效展示百分比，适合合格率、培训覆盖率等指标。',
      files: datavFiles(`<script setup>
import { ref } from 'vue'

const config = ref({ value: 87, colors: ['#3ec1ff', '#1d4ed8'], borderWidth: 2 })
</script>

<template>
  <dv-border-box-10 class="wrap">
    <div class="label">课程合格率</div>
    <dv-percent-pond :config="config" style="width:200px;height:80px;margin:0 auto;" />
  </dv-border-box-10>
</template>

<style scoped>
.wrap { height: 180px; padding: 16px; }
.label { text-align: center; color: #94a3b8; margin-bottom: 12px; }
</style>`),
      previewHtml: darkPreview(`<div class="panel" style="text-align:center;padding:24px;">
  <div class="label">课程合格率</div>
  <div style="width:200px;height:60px;margin:12px auto;border:2px solid #3ec1ff;border-radius:8px;position:relative;overflow:hidden">
    <div style="position:absolute;bottom:0;width:100%;height:87%;background:linear-gradient(180deg,#1d4ed8,#3ec1ff);opacity:.7"></div>
    <div style="position:relative;line-height:60px;font-size:22px;font-weight:700">87%</div>
  </div>
</div>`, 200),
    },
    quiz: {
      question: 'PercentPond 的 config.value 表示什么？',
      options: [
        {
          text: '百分比数值（0~100）',
          isCorrect: true,
          steps: ['1. value: 87 表示 87%', '2. colors 设水池颜色', '3. 适合覆盖率类 KPI'],
        },
        {
          text: '数据条数',
          isCorrect: false,
          steps: ['value 是百分比', '不是数组长度'],
        },
        {
          text: '动画速度毫秒',
          isCorrect: false,
          steps: ['速度有独立配置', 'value 是百分比值'],
        },
      ],
    },
  },
  {
    id: 'datav-water-level',
    category: 'datav',
    title: '水位图 WaterLevelPond',
    example: {
      description: 'dv-water-level-pond 展示多指标水位，适合同时对比多个完成度（如各学院达标率）。',
      files: datavFiles(`<script setup>
import { ref } from 'vue'

const config = ref({
  data: [72, 85, 63],
  shape: 'roundRect',
  colors: ['#3ec1ff', '#34d399'],
  formatter: '{value}%',
})
</script>

<template>
  <dv-water-level-pond :config="config" style="width:100%;height:160px;" />
</template>`),
      previewHtml: darkPreview(`<div style="display:flex;gap:16px;justify-content:center;padding:20px 0;">
  <div class="panel" style="width:80px;height:120px;position:relative;overflow:hidden;text-align:center;">
    <div style="position:absolute;bottom:0;width:100%;height:72%;background:#3ec1ff;opacity:.5"></div>
    <div style="position:relative;padding-top:90px;font-size:12px">72%</div>
  </div>
  <div class="panel" style="width:80px;height:120px;position:relative;overflow:hidden;text-align:center;">
    <div style="position:absolute;bottom:0;width:100%;height:85%;background:#34d399;opacity:.5"></div>
    <div style="position:relative;padding-top:90px;font-size:12px">85%</div>
  </div>
  <div class="panel" style="width:80px;height:120px;position:relative;overflow:hidden;text-align:center;">
    <div style="position:absolute;bottom:0;width:100%;height:63%;background:#3ec1ff;opacity:.5"></div>
    <div style="position:relative;padding-top:90px;font-size:12px">63%</div>
  </div>
</div>`, 200),
    },
    quiz: {
      question: 'WaterLevelPond 的 config.data 是什么？',
      options: [
        {
          text: '多个水位值的数组，如 [72, 85, 63]',
          isCorrect: true,
          steps: ['1. 每个值对应一个水位柱', '2. 适合多指标对比', '3. formatter 格式化显示'],
        },
        {
          text: '表格行数据',
          isCorrect: false,
          steps: ['表格用 ScrollBoard', '水位图用数值数组'],
        },
        {
          text: '地图坐标',
          isCorrect: false,
          steps: ['地图坐标给 FlylineChart', '水位图是百分比'],
        },
      ],
    },
  },
  {
    id: 'datav-capsule',
    category: 'datav',
    title: '胶囊柱图 CapsuleChart',
    example: {
      description: 'dv-capsule-chart 横向胶囊柱图，适合班级/学院横向对比排名。',
      files: datavFiles(`<script setup>
import { ref } from 'vue'

const config = ref({
  data: [
    { name: '计算机学院', value: 92 },
    { name: '外国语学院', value: 88 },
    { name: '经济学院', value: 85 },
  ],
  colors: ['#3ec1ff', '#1d4ed8'],
  unit: '分',
})
</script>

<template>
  <dv-capsule-chart :config="config" style="width:100%;height:200px;" />
</template>`),
      previewHtml: darkPreview(`<div class="panel" style="padding:16px;font-size:13px;">
  <div style="margin-bottom:12px"><span style="display:inline-block;width:80px">计算机</span><span style="display:inline-block;width:184px;height:10px;background:linear-gradient(90deg,#3ec1ff,#1d4ed8);border-radius:5px"></span><span style="margin-left:8px">92</span></div>
  <div style="margin-bottom:12px"><span style="display:inline-block;width:80px">外国语</span><span style="display:inline-block;width:176px;height:10px;background:linear-gradient(90deg,#3ec1ff,#1d4ed8);border-radius:5px"></span><span style="margin-left:8px">88</span></div>
  <div><span style="display:inline-block;width:80px">经济</span><span style="display:inline-block;width:170px;height:10px;background:linear-gradient(90deg,#3ec1ff,#1d4ed8);border-radius:5px"></span><span style="margin-left:8px">85</span></div>
</div>`, 200),
    },
    quiz: {
      question: 'CapsuleChart 适合什么场景？',
      options: [
        {
          text: '横向对比排名，如各学院得分',
          isCorrect: true,
          steps: ['1. data: [{ name, value }]', '2. 胶囊条直观对比', '3. unit 设单位'],
        },
        {
          text: '地理飞线迁徙',
          isCorrect: false,
          steps: ['飞线用 FlylineChart', '胶囊图是横向柱形'],
        },
        {
          text: '表格轮播',
          isCorrect: false,
          steps: ['表格用 ScrollBoard', '胶囊图是柱形对比'],
        },
      ],
    },
  },
  {
    id: 'datav-active-ring',
    category: 'datav',
    title: '动态环图 ActiveRingChart',
    example: {
      description: 'dv-active-ring-chart 动态环图，展示生源分布、经费占比等结构组成。',
      files: datavFiles(`<script setup>
import { ref } from 'vue'

const config = ref({
  data: [
    { name: '统招', value: 55 },
    { name: '自主招生', value: 25 },
    { name: '国际班', value: 20 },
  ],
  color: ['#3ec1ff', '#34d399', '#f59e0b'],
  lineWidth: 20,
})
</script>

<template>
  <dv-active-ring-chart :config="config" style="width:100%;height:200px;" />
</template>`),
      previewHtml: darkPreview(`<div style="display:flex;align-items:center;justify-content:center;gap:24px;padding:20px;">
  <div style="width:100px;height:100px;border-radius:50%;border:16px solid #3ec1ff;border-right-color:#34d399;border-bottom-color:#f59e0b"></div>
  <div style="font-size:12px;line-height:2" class="muted">
    <div><span style="color:#3ec1ff">●</span> 统招 55%</div>
    <div><span style="color:#34d399">●</span> 自主招生 25%</div>
    <div><span style="color:#f59e0b">●</span> 国际班 20%</div>
  </div>
</div>`, 200),
    },
    quiz: {
      question: 'ActiveRingChart 与 ECharts 饼图怎么选？',
      options: [
        {
          text: '简单占比且要大屏动效用 ActiveRing；复杂交互用 ECharts 饼图',
          isCorrect: true,
          steps: [
            '1. ActiveRing 配置简单、动效开箱即用',
            '2. ECharts 饼图支持 drill、legend 交互',
            '3. 可组合使用',
          ],
        },
        {
          text: 'ActiveRing 完全替代 ECharts',
          isCorrect: false,
          steps: ['复杂图表仍用 ECharts', 'ActiveRing 适合简单环图'],
        },
        {
          text: '饼图必须用 DataV',
          isCorrect: false,
          steps: ['ECharts 饼图更常用', '按需求选择'],
        },
      ],
    },
  },
  {
    id: 'datav-flyline',
    category: 'datav',
    title: '飞线图 FlylineChart',
    example: {
      description:
        'dv-flyline-chart 用于地图飞线动效，展示生源流向、跨区域招生；精细地图底图通常仍用 ECharts geo 或静态图做背景。',
      files: datavFiles(`<script setup>
import { ref } from 'vue'

const config = ref({
  points: [
    { name: '北京', coordinate: [0.5, 0.3] },
    { name: '上海', coordinate: [0.7, 0.55] },
    { name: '广州', coordinate: [0.55, 0.75] },
  ],
  lines: [
    { source: '北京', target: '上海' },
    { source: '北京', target: '广州' },
  ],
  bgColor: 'transparent',
})
</script>

<template>
  <dv-flyline-chart :config="config" style="width:100%;height:240px;" />
</template>`),
      previewHtml: darkPreview(`<div class="panel" style="height:220px;position:relative;overflow:hidden;">
  <div style="position:absolute;left:50%;top:28%;width:8px;height:8px;background:#3ec1ff;border-radius:50%;box-shadow:0 0 8px #3ec1ff"></div>
  <div style="position:absolute;left:68%;top:52%;width:8px;height:8px;background:#34d399;border-radius:50%"></div>
  <div style="position:absolute;left:54%;top:72%;width:8px;height:8px;background:#f59e0b;border-radius:50%"></div>
  <svg width="100%" height="100%" style="position:absolute;inset:0"><line x1="52%" y1="32%" x2="70%" y2="54%" stroke="#3ec1ff" stroke-width="1" opacity=".6"/><line x1="52%" y1="32%" x2="56%" y2="74%" stroke="#3ec1ff" stroke-width="1" opacity=".6"/></svg>
  <div class="muted" style="position:absolute;bottom:12px;width:100%;text-align:center;font-size:12px">生源流向飞线（示意）</div>
</div>`, 260),
    },
    quiz: {
      question: 'FlylineChart 的典型用途是？',
      options: [
        {
          text: '地图上的点与点之间飞线动效，展示流向',
          isCorrect: true,
          steps: [
            '1. points 定义城市坐标',
            '2. lines 定义 source → target',
            '3. 常配合地图底图',
          ],
        },
        {
          text: '画柱状统计图',
          isCorrect: false,
          steps: ['柱状图用 ECharts bar', 'Flyline 是地图飞线'],
        },
        {
          text: '表格轮播',
          isCorrect: false,
          steps: ['表格用 ScrollBoard', '飞线是地图组件'],
        },
      ],
    },
  },
  {
    id: 'datav-loading',
    category: 'datav',
    title: 'Loading 加载',
    example: {
      description: 'dv-loading 在接口请求期间展示加载动画，避免面板空白；配合 v-if 在数据到达后切换内容。',
      files: datavFiles(`<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
const kpi = ref('--')

onMounted(() => {
  setTimeout(() => {
    kpi.value = '96.2%'
    loading.value = false
  }, 1500)
})
</script>

<template>
  <dv-border-box-1 class="panel">
    <dv-loading v-if="loading">加载中...</dv-loading>
    <div v-else class="kpi">
      <div class="label">本科上线率</div>
      <div class="val">{{ kpi }}</div>
    </div>
  </dv-border-box-1>
</template>

<style scoped>
.panel { width: 100%; height: 200px; position: relative; }
.kpi { text-align: center; padding-top: 60px; }
.label { color: #94a3b8; }
.val { color: #3ec1ff; font-size: 32px; margin-top: 8px; }
</style>`),
      previewHtml: darkPreview(`<div class="panel" style="height:180px;display:flex;align-items:center;justify-content:center;flex-direction:column;">
  <div style="width:36px;height:36px;border:3px solid #1e3a5f;border-top-color:#3ec1ff;border-radius:50%;animation:spin .8s linear infinite"></div>
  <div class="muted" style="margin-top:12px;font-size:13px">加载中...</div>
</div><style>@keyframes spin{to{transform:rotate(360deg)}}</style>`, 220),
    },
    quiz: {
      question: '大屏接口较慢时，Loading 组件应如何配合？',
      options: [
        {
          text: 'v-if 控制，数据到达后关闭 loading',
          isCorrect: true,
          steps: ['1. 请求前 loading=true', '2. 显示 dv-loading', '3. 数据到了 loading=false'],
        },
        {
          text: '一直显示 Loading',
          isCorrect: false,
          steps: ['数据到了应关闭', '否则看不到内容'],
        },
        {
          text: 'Loading 写在后端',
          isCorrect: false,
          steps: ['Loading 是前端组件'],
        },
      ],
    },
  },
  {
    id: 'datav-theme',
    category: 'datav',
    title: '颜色与主题定制',
    example: {
      description: 'DataV 组件普遍支持 color 数组自定义配色；统一政务蓝风格需在所有组件上保持一致色值。',
      files: datavFiles(`<script setup>
const theme = ['#3ec1ff', '#1d4ed8']
</script>

<template>
  <dv-border-box-8 :color="theme" backgroundColor="rgb(8 20 40 / 0.8)" class="box">
    <dv-decoration-2 :color="theme" style="width:100%;height:30px;" />
    <div class="title">教育局政务蓝主题</div>
  </dv-border-box-8>
</template>

<style scoped>
.box { height: 200px; padding: 12px; }
.title { text-align: center; color: #7ee7ff; margin-top: 40px; letter-spacing: 3px; }
</style>`),
      previewHtml: darkPreview(`<div class="panel" style="height:180px;text-align:center;padding-top:60px;border-color:#3ec1ff">
  <div style="height:3px;background:linear-gradient(90deg,#1d4ed8,#3ec1ff,#1d4ed8);margin-bottom:40px;opacity:.8"></div>
  <div style="letter-spacing:3px">教育局政务蓝主题</div>
  <div class="muted" style="margin-top:8px;font-size:12px">color: ['#3ec1ff', '#1d4ed8']</div>
</div>`, 220),
    },
    quiz: {
      question: '统一大屏配色，推荐做法是？',
      options: [
        {
          text: '定义主题色数组，所有 DataV 组件共用 color',
          isCorrect: true,
          steps: [
            '1. const theme = ["#3ec1ff", "#1d4ed8"]',
            '2. 各组件 :color="theme"',
            '3. ECharts 同步用相同色值',
          ],
        },
        {
          text: '每个组件随机配色',
          isCorrect: false,
          steps: ['大屏需要统一视觉', '应定义主题变量'],
        },
        {
          text: '只能用默认颜色',
          isCorrect: false,
          steps: ['大部分组件支持 color 属性', '可自定义'],
        },
      ],
    },
  },
  {
    id: 'datav-layout',
    category: 'datav',
    title: '大屏布局实战',
    example: {
      description: '典型三栏：左 KPI + 右榜单，中间主图；Grid 划分 + 每格 BorderBox + 内部 ECharts/ScrollBoard。',
      files: datavFiles(`<template>
  <div class="screen">
    <div class="top">
      <dv-decoration-8 style="width:120px;height:40px;" />
      <span class="title">教育监管大屏</span>
      <dv-decoration-8 :reverse="true" style="width:120px;height:40px;" />
    </div>
    <div class="grid">
      <dv-border-box-12 class="cell">左侧 KPI<br><small>DigitalFlop</small></dv-border-box-12>
      <dv-border-box-12 class="cell main">中间主图<br><small>ECharts 地图/柱图</small></dv-border-box-12>
      <dv-border-box-12 class="cell">右侧榜单<br><small>ScrollBoard</small></dv-border-box-12>
    </div>
  </div>
</template>

<style scoped>
.screen { height: 320px; padding: 8px; }
.top { display: flex; align-items: center; justify-content: center; gap: 12px; height: 50px; }
.title { color: #7ee7ff; letter-spacing: 4px; }
.grid { display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 10px; height: calc(100% - 50px); }
.cell { color: #7ee7ff; font-size: 14px; text-align: center; display: flex; align-items: center; justify-content: center; flex-direction: column; }
.cell small { color: #64748b; margin-top: 6px; }
</style>`),
      previewHtml: darkPreview(`<div style="text-align:center;margin-bottom:12px;letter-spacing:3px;font-size:14px">教育监管大屏</div>
<div style="display:grid;grid-template-columns:1fr 2fr 1fr;gap:10px;height:220px;">
  <div class="panel" style="display:flex;align-items:center;justify-content:center;flex-direction:column;font-size:13px">左侧 KPI<div class="muted" style="font-size:11px;margin-top:4px">DigitalFlop</div></div>
  <div class="panel" style="display:flex;align-items:center;justify-content:center;flex-direction:column;font-size:13px">中间主图<div class="muted" style="font-size:11px;margin-top:4px">ECharts</div></div>
  <div class="panel" style="display:flex;align-items:center;justify-content:center;flex-direction:column;font-size:13px">右侧榜单<div class="muted" style="font-size:11px;margin-top:4px">ScrollBoard</div></div>
</div>`, 300),
    },
    quiz: {
      question: '1920 大屏三栏布局，中间主图区通常占？',
      options: [
        {
          text: '更宽比例（如 1:2:1）',
          isCorrect: true,
          steps: ['1. grid-template-columns: 1fr 2fr 1fr', '2. 中间放地图或核心图'],
        },
        {
          text: '三等分且中间最窄',
          isCorrect: false,
          steps: ['主图区通常更宽', '视觉焦点在中间'],
        },
        {
          text: '只用一行文字',
          isCorrect: false,
          steps: ['需要 Grid 分区布局'],
        },
      ],
    },
  },
  {
    id: 'datav-echarts',
    category: 'datav',
    title: 'DataV + ECharts 组合',
    example: {
      description: 'BorderBox 做外壳，内部 div 挂载 ECharts；backgroundColor: transparent 融入深色大屏。',
      files: [
        {
          name: 'package.json',
          content: `{
  "dependencies": {
    "vue": "^3",
    "@kjgl77/datav-vue3": "^1.7.0",
    "echarts": "^5"
  }
}`,
        },
        {
          name: 'src/main.js',
          content: `import { createApp } from 'vue'
import App from './App.vue'
import DataVVue3 from '@kjgl77/datav-vue3'

createApp(App).use(DataVVue3).mount('#app')`,
        },
        {
          name: 'src/App.vue',
          content: `<script setup>
import PanelDemo from './components/PanelDemo.vue'
</script>

<template>
  <PanelDemo />
</template>

<style>
html, body, #app { margin: 0; background: #0b1324; }
</style>`,
        },
        {
          name: 'src/components/PanelDemo.vue',
          content: `<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref(null)
let chart = null

onMounted(() => {
  chart = echarts.init(chartRef.value)
  chart.setOption({
    backgroundColor: 'transparent',
    grid: { left: 40, right: 20, top: 30, bottom: 30 },
    xAxis: { type: 'category', data: ['语文', '数学', '英语'], axisLabel: { color: '#94a3b8' } },
    yAxis: { type: 'value', axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
    series: [{ type: 'bar', data: [82, 91, 76], itemStyle: { color: '#3ec1ff' } }],
  })
})

onUnmounted(() => chart?.dispose())
</script>

<template>
  <dv-border-box-8 class="panel">
    <div class="title">学科均分</div>
    <div ref="chartRef" class="chart" />
  </dv-border-box-8>
</template>

<style scoped>
.panel { width: 100%; height: 260px; padding: 8px; box-sizing: border-box; }
.title { color: #7ee7ff; text-align: center; padding: 8px 0; }
.chart { width: 100%; height: 200px; }
</style>`,
        },
      ],
      previewHtml: `<!DOCTYPE html>
<html lang="zh-CN"><head><meta charset="utf-8"><style>
body{margin:0;background:#0b1324}.panel{margin:16px;height:260px;border:1px solid #2563eb;padding:8px}
.title{color:#7ee7ff;text-align:center;padding:8px;font-family:system-ui,sans-serif}#chart{width:100%;height:200px}
</style><script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"><\/script></head><body>
<div class="panel"><div class="title">学科均分</div><div id="chart"></div></div>
<script>echarts.init(document.getElementById('chart')).setOption({backgroundColor:'transparent',grid:{left:40,right:20,top:20,bottom:30},
xAxis:{type:'category',data:['语文','数学','英语'],axisLabel:{color:'#94a3b8'}},yAxis:{type:'value',axisLabel:{color:'#94a3b8'},splitLine:{lineStyle:{color:'#1e293b'}}},
series:[{type:'bar',data:[82,91,76],itemStyle:{color:'#3ec1ff'}}]});<\/script></body></html>`,
    },
    quiz: {
      question: 'ECharts 嵌入 DataV 边框内，背景应如何设置？',
      options: [
        {
          text: 'backgroundColor: "transparent"',
          isCorrect: true,
          steps: ['1. 透明背景融入 BorderBox', '2. 容器设明确宽高', '3. 轴文字用浅色'],
        },
        {
          text: 'backgroundColor: "#ffffff"',
          isCorrect: false,
          steps: ['白底破坏大屏风格', '应透明'],
        },
        {
          text: '不需要容器宽高',
          isCorrect: false,
          steps: ['ECharts 必须有宽高', '否则不显示'],
        },
      ],
    },
  },
]
