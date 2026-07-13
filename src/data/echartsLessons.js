const mainJs = `import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')`

const appVue = `<script setup>
import ChartDemo from './components/ChartDemo.vue'
</script>

<template>
  <ChartDemo />
</template>`

function chartComponent(optionBody, height = 280) {
  return `<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref(null)
let chart = null

function resize() {
  chart?.resize()
}

onMounted(() => {
  chart = echarts.init(chartRef.value)
  chart.setOption({
${optionBody}
  })
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)
  chart?.dispose()
})
</script>

<template>
  <div ref="chartRef" class="chart" />
</template>

<style scoped>
.chart {
  width: 100%;
  height: ${height}px;
}
</style>`
}

function echartsFiles(optionBody, height) {
  return [
    {
      name: 'package.json',
      content: `{
  "dependencies": {
    "vue": "^3",
    "echarts": "^5"
  }
}`,
    },
    {
      name: 'src/main.js',
      content: mainJs,
    },
    {
      name: 'src/App.vue',
      content: appVue,
    },
    {
      name: 'src/components/ChartDemo.vue',
      content: chartComponent(optionBody, height),
    },
  ]
}

export const echartsLessons = [
  {
    id: 'echarts-intro',
    category: 'echarts',
    title: 'ECharts 简介',
    example: {
      description: '在 Vue 3 项目中安装 echarts，在组件 onMounted 里 init 容器并 setOption。',
      files: echartsFiles(`    title: { text: '我的第一个图表' },
    xAxis: { data: ['Mon', 'Tue', 'Wed'] },
    yAxis: {},
    series: [{ type: 'bar', data: [120, 200, 150] }]`),
    },
    quiz: {
      question: '初始化并渲染 ECharts 图表的基本步骤是？',
      options: [
        {
          text: 'init 容器 → setOption 配置',
          isCorrect: true,
          steps: [
            '1. 模板中准备 ref 容器 div，设置宽高',
            '2. onMounted 中 echarts.init(chartRef.value)',
            '3. chart.setOption(option) 传入配置项',
            '4. onUnmounted 中 chart.dispose() 释放实例',
          ],
        },
        {
          text: 'new Chart(option)',
          isCorrect: false,
          steps: [
            'ECharts 没有 new Chart 写法',
            '使用 echarts.init() 创建实例',
            '再调用 setOption 渲染',
          ],
        },
        {
          text: '直接在模板写 <chart> 标签',
          isCorrect: false,
          steps: [
            'ECharts 不是 Web Component 标签',
            '需要 JS 初始化和 setOption',
            '容器是普通 div 元素',
          ],
        },
      ],
    },
  },
  {
    id: 'echarts-option',
    category: 'echarts',
    title: 'option 配置项结构',
    example: {
      description: 'option 是 ECharts 的核心配置对象，在 chart.setOption() 中一次性传入。',
      files: echartsFiles(`    color: ['#5470c6', '#91cc75', '#fac858'],
    backgroundColor: '#f8fafc',
    title: { text: 'option 结构示例', left: 'center' },
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: ['A', 'B', 'C'] },
    yAxis: { type: 'value' },
    series: [{ name: '销量', type: 'bar', data: [10, 22, 18] }]`),
    },
    quiz: {
      question: 'option 中 color 属性的作用是？',
      options: [
        {
          text: '全局调色盘，按顺序为系列分配颜色',
          isCorrect: true,
          steps: [
            '1. color 是 option 顶层属性',
            '2. 值为颜色数组：["#5470c6", "#91cc75"]',
            '3. 第 1 个系列用第 1 个颜色，依次循环',
            '4. 单个系列也可用 series.itemStyle.color 覆盖',
          ],
        },
        {
          text: '设置图表背景颜色',
          isCorrect: false,
          steps: [
            '背景色用 backgroundColor 属性',
            'color 是系列数据的调色盘',
            '两者不要混淆',
          ],
        },
        {
          text: '设置文字颜色',
          isCorrect: false,
          steps: [
            '文字颜色在 title.textStyle.color 等位置设置',
            '顶层 color 是系列配色',
            '参考配置项手册 color',
          ],
        },
      ],
    },
  },
  {
    id: 'echarts-title',
    category: 'echarts',
    title: 'title 标题组件',
    example: {
      description: 'title 配置图表标题的文字、位置和样式，写在 setOption 的 option 对象里。',
      files: echartsFiles(`    title: {
      text: '月度销售报告',
      subtext: '2026 年数据',
      left: 'center',
      top: 10,
      textStyle: { color: '#1e293b', fontSize: 18 },
      subtextStyle: { color: '#64748b', fontSize: 12 },
    },
    xAxis: { data: ['1月', '2月', '3月'] },
    yAxis: {},
    series: [{ type: 'bar', data: [30, 45, 38] }]`),
    },
    quiz: {
      question: 'title.left: "center" 表示什么？',
      options: [
        {
          text: '标题水平居中对齐',
          isCorrect: true,
          steps: [
            '1. left 控制标题水平位置',
            '2. 可选 "left" / "center" / "right" 或像素值',
            '3. top 控制垂直位置',
            '4. subtext 是副标题，subtextStyle 控制副标题样式',
          ],
        },
        {
          text: '图表数据左对齐',
          isCorrect: false,
          steps: [
            'left 只影响 title 组件位置',
            '数据对齐在 grid 或 axis 中配置',
            'title 是标题文字组件',
          ],
        },
        {
          text: 'Y 轴在左侧显示',
          isCorrect: false,
          steps: [
            'Y 轴位置在 yAxis.position 配置',
            'title.left 是标题水平定位',
            '两者无关',
          ],
        },
      ],
    },
  },
  {
    id: 'echarts-tooltip',
    category: 'echarts',
    title: 'tooltip 提示框',
    example: {
      description: 'tooltip 鼠标悬停时显示数据详情，trigger 决定触发方式。',
      files: echartsFiles(`    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter: '{b}<br/>{a}: {c} 件',
    },
    legend: { data: ['销量'] },
    xAxis: { data: ['周一', '周二', '周三'] },
    yAxis: {},
    series: [{ name: '销量', type: 'bar', data: [120, 200, 150] }]`),
    },
    quiz: {
      question: '柱状图多系列对比时，tooltip.trigger 应设为？',
      options: [
        {
          text: 'axis（坐标轴触发）',
          isCorrect: true,
          steps: [
            '1. trigger: "axis" 鼠标移到坐标轴区域触发',
            '2. 同一 x 轴上所有系列数据一起显示',
            '3. trigger: "item" 适合饼图等单点触发',
            '4. formatter 自定义提示框文字格式',
          ],
        },
        {
          text: 'item',
          isCorrect: false,
          steps: [
            'item 触发单个图形元素',
            '多系列柱状图对比常用 axis',
            '饼图常用 item',
          ],
        },
        {
          text: 'none',
          isCorrect: false,
          steps: [
            'none 会关闭 tooltip',
            '需要提示框不应设 none',
            '柱状图用 axis 更合适',
          ],
        },
      ],
    },
  },
  {
    id: 'echarts-legend',
    category: 'echarts',
    title: 'legend 图例',
    example: {
      description: 'legend 展示系列名称，点击可切换系列显示/隐藏。',
      files: echartsFiles(`    legend: {
      data: ['邮件', '广告'],
      top: 30,
      left: 'center',
    },
    xAxis: { data: ['Mon', 'Tue', 'Wed'] },
    yAxis: {},
    series: [
      { name: '邮件', type: 'bar', data: [120, 132, 101] },
      { name: '广告', type: 'bar', data: [80, 92, 70] },
    ]`),
    },
    quiz: {
      question: 'legend.data 中的名称必须与什么一致？',
      options: [
        {
          text: 'series 中每个系列的 name',
          isCorrect: true,
          steps: [
            '1. legend.data: ["邮件", "广告"]',
            '2. series[0].name: "邮件"，series[1].name: "广告"',
            '3. 名称一一对应，图例才能正确关联',
            '4. 点击图例可切换对应系列的显示',
          ],
        },
        {
          text: 'xAxis.data 的类目名',
          isCorrect: false,
          steps: [
            'xAxis.data 是横轴类目',
            'legend 对应的是系列 name',
            '两者含义不同',
          ],
        },
        {
          text: 'title.text 标题文字',
          isCorrect: false,
          steps: [
            'title 是标题，与图例无关',
            'legend 关联 series.name',
            '名称必须匹配',
          ],
        },
      ],
    },
  },
  {
    id: 'echarts-grid',
    category: 'echarts',
    title: 'grid 绘图网格',
    example: {
      description: 'grid 控制直角坐标系图表的绘图区域位置和大小。',
      files: echartsFiles(`    grid: {
      left: '10%',
      right: '5%',
      top: 60,
      bottom: 30,
      containLabel: true,
    },
    xAxis: { data: ['A', 'B', 'C', 'D'] },
    yAxis: {},
    series: [{ type: 'line', data: [30, 50, 40, 60] }]`),
    },
    quiz: {
      question: 'grid.containLabel: true 的作用是？',
      options: [
        {
          text: 'grid 区域自动包含坐标轴标签，防止标签被裁剪',
          isCorrect: true,
          steps: [
            '1. containLabel 默认 false',
            '2. 设为 true 时 left/right/top/bottom 会计算标签宽度',
            '3. 避免 Y 轴数字或 X 轴文字超出容器',
            '4. 常用百分比 + containLabel: true 组合',
          ],
        },
        {
          text: '在 grid 内显示数据标签',
          isCorrect: false,
          steps: [
            '数据标签用 series.label 配置',
            'containLabel 是防止轴标签溢出',
            '属于布局属性',
          ],
        },
        {
          text: '隐藏坐标轴标签',
          isCorrect: false,
          steps: [
            'containLabel 不会隐藏标签',
            '反而确保标签完整显示',
            '隐藏标签用 axisLabel.show: false',
          ],
        },
      ],
    },
  },
  {
    id: 'echarts-xaxis',
    category: 'echarts',
    title: 'xAxis 横轴',
    example: {
      description: 'xAxis 配置横轴类型、类目数据和轴标签样式。',
      files: echartsFiles(`    xAxis: {
      type: 'category',
      data: ['衬衫', '羊毛衫', '雪纺衫'],
      name: '商品',
      axisLabel: { rotate: 30, color: '#64748b' },
      axisLine: { lineStyle: { color: '#cbd5e1' } },
    },
    yAxis: { type: 'value', name: '销量' },
    series: [{ type: 'bar', data: [5, 20, 36] }]`),
    },
    quiz: {
      question: 'xAxis.type: "category" 表示什么？',
      options: [
        {
          text: '类目轴，适用于离散的分类数据',
          isCorrect: true,
          steps: [
            '1. category 类目轴，需配合 data: ["衬衫", "羊毛衫"]',
            '2. value 数值轴，用于连续数字',
            '3. time 时间轴，用于时间序列',
            '4. 柱状图/折线图 X 轴通常用 category',
          ],
        },
        {
          text: 'X 轴显示在图表下方',
          isCorrect: false,
          steps: [
            '位置由 xAxis.position 控制（top/bottom）',
            'type 表示数据类型',
            '默认 X 轴在底部',
          ],
        },
        {
          text: 'X 轴自动隐藏',
          isCorrect: false,
          steps: [
            '隐藏用 xAxis.show: false',
            'type: "category" 是类目数据类型',
            '与显示隐藏无关',
          ],
        },
      ],
    },
  },
  {
    id: 'echarts-yaxis',
    category: 'echarts',
    title: 'yAxis 纵轴',
    example: {
      description: 'yAxis 配置纵轴范围、刻度、名称等。',
      files: echartsFiles(`    xAxis: { data: ['1月', '2月', '3月', '4月'] },
    yAxis: {
      type: 'value',
      name: '销售额（万元）',
      min: 0,
      max: 100,
      splitLine: { lineStyle: { type: 'dashed' } },
    },
    series: [{ type: 'bar', data: [35, 62, 48, 80] }]`),
    },
    quiz: {
      question: 'yAxis.min 和 yAxis.max 的作用是？',
      options: [
        {
          text: '设置 Y 轴刻度的最小值和最大值',
          isCorrect: true,
          steps: [
            '1. min: 0 强制 Y 轴从 0 开始',
            '2. max: 100 设置上限为 100',
            '3. 不设置则 ECharts 自动根据数据计算',
            '4. splitLine 控制网格分割线样式',
          ],
        },
        {
          text: '设置数据中的最小和最大值',
          isCorrect: false,
          steps: [
            'min/max 控制轴刻度范围，不是筛选数据',
            '数据仍全部渲染',
            '只影响坐标轴显示范围',
          ],
        },
        {
          text: '设置图表容器的宽高',
          isCorrect: false,
          steps: [
            '容器尺寸在 CSS 或 grid 中设置',
            'yAxis.min/max 是纵轴刻度范围',
            '不要混淆',
          ],
        },
      ],
    },
  },
  {
    id: 'echarts-series',
    category: 'echarts',
    title: 'series 系列',
    example: {
      description: 'series 是数据系列数组，type 决定图表类型，data 是具体数据。',
      files: echartsFiles(`    legend: { data: ['蒸发量', '降水量'] },
    xAxis: { data: ['1月', '2月', '3月'] },
    yAxis: {},
    series: [
      {
        name: '蒸发量',
        type: 'bar',
        data: [2.0, 4.9, 7.0],
        barWidth: '40%',
      },
      {
        name: '降水量',
        type: 'line',
        data: [2.6, 5.9, 9.0],
        smooth: true,
      },
    ]`),
    },
    quiz: {
      question: 'series 中 type 属性的作用是？',
      options: [
        {
          text: '指定该系列的图表类型（bar/line/pie 等）',
          isCorrect: true,
          steps: [
            '1. type: "bar" 渲染柱状图',
            '2. type: "line" 渲染折线图',
            '3. type: "pie" 渲染饼图（不需 xAxis/yAxis）',
            '4. 同一图表可混合多种 type',
          ],
        },
        {
          text: '指定数据类型为字符串或数字',
          isCorrect: false,
          steps: [
            '数据类型由 data 数组内容决定',
            'type 是图表类型',
            '如 bar、line、scatter',
          ],
        },
        {
          text: '指定系列颜色',
          isCorrect: false,
          steps: [
            '颜色用 itemStyle.color 或全局 color',
            'type 决定图形类型',
            '不是颜色配置',
          ],
        },
      ],
    },
  },
  {
    id: 'echarts-bar',
    category: 'echarts',
    title: '柱状图 bar',
    example: {
      description: '柱状图常用属性：barWidth 柱宽、stack 堆叠、label 数据标签。',
      files: echartsFiles(`    tooltip: { trigger: 'axis' },
    legend: { data: ['直接', '邮件'] },
    xAxis: { data: ['周一', '周二', '周三'] },
    yAxis: {},
    series: [
      {
        name: '直接',
        type: 'bar',
        stack: 'total',
        data: [320, 302, 301],
        itemStyle: { color: '#5470c6' },
        label: { show: true, position: 'inside' },
      },
      {
        name: '邮件',
        type: 'bar',
        stack: 'total',
        data: [120, 132, 101],
        itemStyle: { color: '#91cc75' },
      },
    ]`),
    },
    quiz: {
      question: '多个柱状系列堆叠在一起，应设置？',
      options: [
        {
          text: '相同 stack 值，如 stack: "total"',
          isCorrect: true,
          steps: [
            '1. 每个要堆叠的 series 设置相同 stack 字符串',
            '2. 如 stack: "total"，同 stack 的柱子叠在一起',
            '3. 不同 stack 值的系列不会互相堆叠',
            '4. label.show 可在柱内显示数值',
          ],
        },
        {
          text: 'barWidth: "100%"',
          isCorrect: false,
          steps: [
            'barWidth 控制柱子宽度',
            '堆叠用 stack 属性',
            '两者作用不同',
          ],
        },
        {
          text: 'xAxis.stack: true',
          isCorrect: false,
          steps: [
            'xAxis 没有 stack 属性',
            'stack 写在 series 中',
            '每个系列单独配置',
          ],
        },
      ],
    },
  },
  {
    id: 'echarts-line',
    category: 'echarts',
    title: '折线图 line',
    example: {
      description: '折线图常用属性：smooth 平滑曲线、areaStyle 面积填充、markPoint 标注点。',
      files: echartsFiles(`    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
    yAxis: { type: 'value' },
    series: [{
      type: 'line',
      data: [150, 230, 224, 218, 135],
      smooth: true,
      areaStyle: { color: 'rgba(84,112,198,0.2)' },
      lineStyle: { width: 3, color: '#5470c6' },
      markPoint: {
        data: [{ type: 'max', name: '最大值' }],
      },
    }]`),
    },
    quiz: {
      question: 'line.smooth: true 的作用是？',
      options: [
        {
          text: '将折线变为平滑曲线',
          isCorrect: true,
          steps: [
            '1. smooth: true 开启贝塞尔曲线平滑',
            '2. smooth: 0~1 可调节平滑程度',
            '3. areaStyle 填充折线下方区域',
            '4. markPoint 标注最大/最小值等特殊点',
          ],
        },
        {
          text: '加快图表渲染速度',
          isCorrect: false,
          steps: [
            'smooth 只影响线条形状',
            '与性能优化无关',
            '是视觉效果配置',
          ],
        },
        {
          text: '自动补齐缺失数据',
          isCorrect: false,
          steps: [
            '缺失数据处理用 series.connectNulls',
            'smooth 是曲线平滑',
            '不同属性',
          ],
        },
      ],
    },
  },
  {
    id: 'echarts-pie',
    category: 'echarts',
    title: '饼图 pie',
    example: {
      description: '饼图用 series.type: "pie"，radius 控制大小，不需要 xAxis/yAxis。',
      files: echartsFiles(`    title: { text: '访问来源', left: 'center' },
    tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
    legend: { orient: 'vertical', left: 'left' },
    series: [{
      type: 'pie',
      radius: ['40%', '70%'],
      data: [
        { value: 1048, name: '搜索引擎' },
        { value: 735, name: '直接访问' },
        { value: 580, name: '邮件营销' },
      ],
      label: { formatter: '{b}\\n{d}%' },
    }]`),
    },
    quiz: {
      question: 'radius: ["40%", "70%"] 表示什么？',
      options: [
        {
          text: '环形饼图（内半径 40%，外半径 70%）',
          isCorrect: true,
          steps: [
            '1. radius 字符串/数字控制饼图半径',
            '2. 单值如 "50%" 是实心饼图',
            '3. 数组 [内, 外] 形成环形图（甜甜圈）',
            '4. 饼图 data 格式：{ value, name }',
          ],
        },
        {
          text: '饼图占容器的 40% 到 70% 位置',
          isCorrect: false,
          steps: [
            'radius 是饼图自身半径比例',
            '不是容器定位',
            '位置用 series.center 配置',
          ],
        },
        {
          text: '数据只显示 40% 到 70% 的部分',
          isCorrect: false,
          steps: [
            'radius 与数据筛选无关',
            '控制图形大小',
            '数据在 series.data 中完整展示',
          ],
        },
      ],
    },
  },
  {
    id: 'echarts-itemstyle',
    category: 'echarts',
    title: 'itemStyle 样式',
    example: {
      description: 'itemStyle 控制图形元素颜色、边框、圆角等视觉样式。',
      files: echartsFiles(`    xAxis: { data: ['A', 'B', 'C', 'D'] },
    yAxis: {},
    series: [{
      type: 'bar',
      data: [40, 65, 30, 80],
      itemStyle: {
        color: '#5470c6',
        borderRadius: [6, 6, 0, 0],
        borderColor: '#3b52a8',
        borderWidth: 1,
      },
      emphasis: {
        itemStyle: { color: '#91cc75' },
      },
    }]`),
    },
    quiz: {
      question: 'itemStyle.borderRadius: [6,6,0,0] 的作用是？',
      options: [
        {
          text: '设置柱子顶部圆角（左上、右上 6px）',
          isCorrect: true,
          steps: [
            '1. borderRadius 类似 CSS 圆角',
            '2. 四个值：[左上, 右上, 右下, 左下]',
            '3. [6,6,0,0] 只圆顶部两角',
            '4. emphasis.itemStyle 是鼠标悬停时样式',
          ],
        },
        {
          text: '设置图表容器圆角',
          isCorrect: false,
          steps: [
            '容器圆角在 CSS 中设置',
            'itemStyle 作用于数据图形',
            '如柱子、扇形、折线点',
          ],
        },
        {
          text: '设置坐标轴圆角',
          isCorrect: false,
          steps: [
            '坐标轴样式在 axisLine.lineStyle',
            'itemStyle 是系列图形样式',
            '不要混淆',
          ],
        },
      ],
    },
  },
  {
    id: 'echarts-datazoom',
    category: 'echarts',
    title: 'dataZoom 数据缩放',
    example: {
      description: 'dataZoom 让用户缩放或拖拽查看大量数据，type 有 slider 和 inside。',
      files: [
        {
          name: 'package.json',
          content: `{
  "dependencies": {
    "vue": "^3",
    "echarts": "^5"
  }
}`,
        },
        {
          name: 'src/main.js',
          content: mainJs,
        },
        {
          name: 'src/App.vue',
          content: appVue,
        },
        {
          name: 'src/components/ChartDemo.vue',
          content: `<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref(null)
let chart = null

const data = Array.from({ length: 30 }, () => Math.round(Math.random() * 100))

function resize() {
  chart?.resize()
}

onMounted(() => {
  chart = echarts.init(chartRef.value)
  chart.setOption({
    tooltip: { trigger: 'axis' },
    dataZoom: [
      { type: 'slider', start: 0, end: 40 },
      { type: 'inside' },
    ],
    xAxis: { data: Array.from({ length: 30 }, (_, i) => 'Day' + (i + 1)) },
    yAxis: {},
    series: [{ type: 'line', data }],
  })
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)
  chart?.dispose()
})
</script>

<template>
  <div ref="chartRef" class="chart" />
</template>

<style scoped>
.chart {
  width: 100%;
  height: 300px;
}
</style>`,
        },
      ],
    },
    quiz: {
      question: 'dataZoom 中 start: 0, end: 40 表示什么？',
      options: [
        {
          text: '默认显示数据的前 40% 范围',
          isCorrect: true,
          steps: [
            '1. start/end 是百分比，0~100',
            '2. start: 0, end: 40 显示前 40% 数据',
            '3. type: "slider" 显示底部滑动条',
            '4. type: "inside" 支持鼠标滚轮/拖拽缩放',
          ],
        },
        {
          text: '数据从第 0 条到第 40 条',
          isCorrect: false,
          steps: [
            'start/end 默认是百分比不是索引',
            '除非设置 startValue/endValue 才用索引',
            '百分比更常用',
          ],
        },
        {
          text: '图表缩小到 40% 大小',
          isCorrect: false,
          steps: [
            'start/end 控制数据窗口范围',
            '不是图表缩放比例',
            '是显示哪些数据',
          ],
        },
      ],
    },
  },
  {
    id: 'echarts-toolbox',
    category: 'echarts',
    title: 'toolbox 工具栏',
    example: {
      description: 'toolbox 提供保存图片、数据视图、切换图表类型等工具按钮。',
      files: echartsFiles(`    toolbox: {
      feature: {
        saveAsImage: { title: '保存为图片' },
        dataView: { title: '数据视图', readOnly: true },
        magicType: { type: ['line', 'bar'] },
        restore: { title: '还原' },
      },
      right: 20,
    },
    xAxis: { data: ['A', 'B', 'C'] },
    yAxis: {},
    series: [{ type: 'bar', data: [10, 22, 18] }]`),
    },
    quiz: {
      question: 'toolbox.feature.saveAsImage 的作用是？',
      options: [
        {
          text: '提供「保存为图片」工具按钮',
          isCorrect: true,
          steps: [
            '1. toolbox.feature 配置工具按钮',
            '2. saveAsImage 导出当前图表为 PNG',
            '3. dataView 查看/编辑数据',
            '4. magicType 切换 line/bar 等类型',
          ],
        },
        {
          text: '自动将图表保存到服务器',
          isCorrect: false,
          steps: [
            'saveAsImage 是下载到本地',
            '不会自动上传服务器',
            '用户手动点击保存',
          ],
        },
        {
          text: '设置图表背景图片',
          isCorrect: false,
          steps: [
            '背景图不是 saveAsImage 的功能',
            '该功能导出图片',
            '背景用 backgroundColor 或 graphic',
          ],
        },
      ],
    },
  },
]
