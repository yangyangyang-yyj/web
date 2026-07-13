export const cssKnowledge = {
  'css-syntax': {
    title: 'CSS 语法与选择器',
    intro:
      'CSS 由选择器和声明块组成：选择器 { 属性: 值; }。样式可写在 style 标签、外部 .css 文件或行内 style 属性中，推荐外部文件统一管理。',
    tableHeaders: ['选择器', '写法', '匹配规则', '示例场景'],
    phases: [
      {
        name: '基础选择器',
        hooks: [
          { composition: '元素', options: 'p { }', when: '标签名', use: '所有 p 元素' },
          { composition: '类', options: '.name { }', when: 'class 属性', use: '可复用，如 .btn' },
          { composition: 'ID', options: '#name { }', when: 'id 属性', use: '页内唯一，如 #header' },
          { composition: '通配', options: '* { }', when: '所有元素', use: '全局 reset，慎用' },
        ],
      },
      {
        name: '组合选择器',
        hooks: [
          { composition: '后代', options: 'div p', when: '空格连接', use: 'div 内所有 p（任意层级）' },
          { composition: '子代', options: 'div > p', when: '直接子元素', use: '只匹配一层' },
          { composition: '并列', options: 'h1, h2', when: '逗号分组', use: '多选择器同一套样式' },
          { composition: '相邻', options: 'h1 + p', when: '紧邻兄弟', use: 'h1 后第一个 p' },
        ],
      },
    ],
    syntax: {
      title: '三种引入方式',
      blocks: [
        {
          title: '外部 / 内部 / 行内',
          code: `<!-- 外部（推荐） -->
<link rel="stylesheet" href="style.css">

<!-- 内部 -->
<style>
  p { color: #333; }
</style>

<!-- 行内（少用） -->
<p style="color: red;">`,
        },
      ],
    },
    tips: ['一条声明只有一个分号结尾。', '选择器优先级：内联 > ID > class > 元素。'],
  },
  'css-id-class': {
    title: 'Id 与 Class',
    intro: 'class 用于一组可复用样式，一个元素可有多个 class；id 页面唯一，用于锚点和 JS 定位。开发中 90% 场景用 class。',
    tableHeaders: ['对比', '选择器', '特点', '建议'],
    phases: [
      {
        hooks: [
          { composition: 'class', options: '.card', when: '可复用', use: '组件、状态、布局类名' },
          { composition: '多 class', options: 'class="card active"', when: '空格分隔', use: '组合多种样式' },
          { composition: 'id', options: '#banner', when: '唯一', use: '页内只能出现一次' },
          { composition: '优先级', options: '#id > .class', when: '特异性', use: 'id 权重高于 class' },
        ],
      },
    ],
    tips: ['命名用 kebab-case：nav-item、btn-primary。', '避免用 id 写大量样式，难复用。'],
  },
  'css-import': {
    title: 'CSS 导入',
    intro: '@import 可在 CSS 文件中引入其他样式表；现代项目更常用 HTML link 或构建工具打包。注意 @import 须写在文件最前面。',
    tableHeaders: ['方式', '写法', '说明', '场景'],
    phases: [
      {
        hooks: [
          { composition: 'link', options: '<link rel="stylesheet">', when: 'HTML 引入', use: '最常用，并行加载' },
          { composition: '@import', options: '@import url("b.css")', when: 'CSS 内引入', use: '须在所有规则之前' },
          { composition: '多文件', options: '多个 link', when: '拆分模块', use: 'base.css + theme.css' },
        ],
      },
    ],
    tips: ['@import 会阻塞，性能不如 link。', 'Vite 项目用 import "./style.css" 在 JS 入口引入。'],
  },
  'css-background': {
    title: '背景',
    intro: 'background 相关属性控制元素背景色、背景图、平铺和定位，是大屏和卡片 UI 的基础。',
    tableHeaders: ['属性', '常用值', '作用', '示例'],
    phases: [
      {
        hooks: [
          { composition: 'background-color', options: '#0b1324', when: '纯色背景', use: '大屏深色底' },
          { composition: 'background-image', options: 'url(bg.png)', when: '背景图', use: '装饰纹理' },
          { composition: 'background-repeat', options: 'no-repeat', when: '平铺', use: 'no-repeat / repeat-x' },
          { composition: 'background-position', options: 'center top', when: '位置', use: '对齐方式' },
          { composition: 'background-size', options: 'cover', when: '缩放', use: 'cover 铺满 / contain 完整显示' },
          { composition: '简写', options: 'background: #000 url() no-repeat center/cover', when: '一行写法', use: '覆盖多个属性' },
        ],
      },
    ],
    tips: ['半透明背景：rgb(0 0 0 / 0.5)。', '大屏常用纯色或渐变，少用大图背景。'],
  },
  'css-text-font': {
    title: '文本与字体',
    intro: '控制文字颜色、大小、行高、对齐和字体族。大屏需考虑远距可读性，字号不宜过小。',
    tableHeaders: ['属性', '示例', '作用', '建议'],
    phases: [
      {
        hooks: [
          { composition: 'color', options: 'color: #7ee7ff', when: '文字颜色', use: '深色底用浅色字' },
          { composition: 'font-size', options: '16px / 1rem', when: '字号', use: '大屏 KPI 可用 24px+' },
          { composition: 'font-weight', options: '400 / 700', when: '粗细', use: '标题 bold，正文 normal' },
          { composition: 'line-height', options: '1.6', when: '行高', use: '1.5~1.8 提升可读性' },
          { composition: 'text-align', options: 'center', when: '对齐', use: 'left/center/right' },
          { composition: 'font-family', options: 'system-ui, sans-serif', when: '字体栈', use: '优先系统字体' },
        ],
      },
    ],
    tips: ['letter-spacing 加大字间距适合大屏标题。', 'text-overflow: ellipsis 单行省略。'],
  },
  'css-box-model': {
    title: '盒模型',
    intro:
      '每个元素都是一个矩形盒子：content 内容 → padding 内边距 → border 边框 → margin 外边距。width/height 默认只算 content 区域（content-box）。',
    tableHeaders: ['区域', '属性', '作用', '记忆'],
    phases: [
      {
        hooks: [
          { composition: 'content', options: 'width height', when: '内容区', use: '文字、图片实际占位' },
          { composition: 'padding', options: 'padding: 16px', when: '内边距', use: '内容与边框间距' },
          { composition: 'border', options: 'border: 1px solid', when: '边框', use: '包围 padding' },
          { composition: 'margin', options: 'margin: 20px auto', when: '外边距', use: '盒子与其他元素间距' },
        ],
      },
    ],
    syntax: {
      title: '盒模型示意',
      blocks: [
        {
          title: '从内到外',
          code: `/* margin → border → padding → content */
.box {
  width: 200px;
  padding: 16px;
  border: 2px solid #3ec1ff;
  margin: 20px;
}`,
        },
      ],
    },
    tips: ['margin 垂直方向会折叠（取较大值）。', 'padding 和 margin 均可四方向单独设置。'],
  },
  'css-border': {
    title: '边框',
    intro: 'border 设置边框宽度、样式和颜色；border-radius 圆角（CSS3）。虚线、实线常用于面板分割。',
    tableHeaders: ['属性', '写法', '效果', '场景'],
    phases: [
      {
        hooks: [
          { composition: 'border-width', options: '1px', when: '边框粗细', use: '细线分割' },
          { composition: 'border-style', options: 'solid dashed', when: '线型', use: '实线/虚线/点线' },
          { composition: 'border-color', options: '#2563eb', when: '颜色', use: '与主题色一致' },
          { composition: '简写', options: 'border: 1px solid #ccc', when: '一行', use: '宽 样式 色' },
          { composition: '单边', options: 'border-bottom', when: '单边框', use: '只画底部分割线' },
        ],
      },
    ],
    tips: ['outline 不占布局空间，常用于 focus 焦点环。', '透明边框可做 hover 防抖动。'],
  },
  'css-margin-padding': {
    title: '内外边距',
    intro: 'padding 撑开内容与边框距离；margin 控制盒子间距。四方向写法：单值（四边）、两值（上下 左右）、四值（上右下左）。',
    tableHeaders: ['属性', '简写', '含义', '技巧'],
    phases: [
      {
        hooks: [
          { composition: 'padding', options: 'padding: 16px', when: '内边距', use: '按钮、卡片内留白' },
          { composition: 'margin', options: 'margin: 0 auto', when: '外边距', use: '块级水平居中' },
          { composition: '两值', options: '10px 20px', when: '上下 左右', use: '快速设置' },
          { composition: '四值', options: '10px 20px 30px 40px', when: '上右下左', use: '顺时针' },
        ],
      },
    ],
    tips: ['百分比 padding 相对父元素宽度计算。', 'margin 负值可让元素重叠（慎用）。'],
  },
  'css-display': {
    title: 'Display 显示模式',
    intro:
      'display 决定元素如何参与布局：block 独占一行、inline 不换行、inline-block 行内但可设宽高、none 隐藏不占位。',
    tableHeaders: ['值', '特点', '代表元素', '场景'],
    phases: [
      {
        hooks: [
          { composition: 'block', options: 'display: block', when: '块级', use: 'div、p、h1，独占一行' },
          { composition: 'inline', options: 'display: inline', when: '行内', use: 'span、a，不可设宽高' },
          { composition: 'inline-block', options: 'display: inline-block', when: '行内块', use: '可设宽高且不换行' },
          { composition: 'none', options: 'display: none', when: '隐藏', use: '不占空间，v-if 类似' },
          { composition: 'flex', options: 'display: flex', when: '弹性布局', use: '一维排列，大屏常用' },
          { composition: 'grid', options: 'display: grid', when: '网格布局', use: '二维布局，三栏大屏' },
        ],
      },
    ],
    tips: ['visibility: hidden 隐藏但仍占位。', 'inline 元素 margin-top/bottom 无效。'],
  },
  'css-position': {
    title: '定位 Position',
    intro:
      'position 配合 top/right/bottom/left 控制元素位置。static 默认；relative 相对自身；absolute 相对最近定位祖先；fixed 相对视口；sticky 粘性。',
    tableHeaders: ['值', '参照物', '脱标', '场景'],
    phases: [
      {
        hooks: [
          { composition: 'static', options: '默认', when: '正常文档流', use: '不设偏移' },
          { composition: 'relative', options: '相对自身原位置', when: '可设偏移', use: '微调、作 absolute 父级' },
          { composition: 'absolute', options: '相对定位祖先', when: '脱离文档流', use: '角标、弹层、图表 tooltip' },
          { composition: 'fixed', options: '相对视口', when: '脱离文档流', use: '固定导航、回到顶部' },
          { composition: 'sticky', options: '滚动粘性', when: '流内→固定', use: '表头吸顶' },
          { composition: 'z-index', options: 'z-index: 10', when: '层叠顺序', use: '仅定位元素生效' },
        ],
      },
    ],
    tips: ['absolute 找最近 position 非 static 的祖先。', '大屏装饰层注意 z-index 别挡图表点击。'],
  },
  'css-pseudo': {
    title: '伪类与伪元素',
    intro:
      '伪类描述元素状态（:hover）；伪元素创建虚拟子节点（::before）。单冒号兼容旧写法，伪元素推荐双冒号。',
    tableHeaders: ['类型', '选择器', '作用', '示例'],
    phases: [
      {
        name: '常用伪类',
        hooks: [
          { composition: ':hover', options: 'a:hover', when: '鼠标悬停', use: '按钮、链接交互' },
          { composition: ':active', options: ':active', when: '按下瞬间', use: '点击反馈' },
          { composition: ':focus', options: ':focus', when: '获得焦点', use: '表单无障碍' },
          { composition: ':nth-child', options: ':nth-child(2n)', when: '结构伪类', use: '斑马纹表格行' },
          { composition: ':first-child', options: ':first-child', when: '第一个子元素', use: '首行加粗' },
        ],
      },
      {
        name: '常用伪元素',
        hooks: [
          { composition: '::before', options: 'content: ""', when: '元素前插入', use: '装饰线、图标' },
          { composition: '::after', options: 'content: ""', when: '元素后插入', use: '清除浮动、角标' },
          { composition: '::placeholder', options: '::placeholder', when: '占位符样式', use: '输入框提示色' },
        ],
      },
    ],
    tips: ['伪元素必须写 content 才显示。', ':not(.class) 排除某些元素。'],
  },
  'css-flexbox': {
    title: 'Flex 弹性布局',
    intro:
      'Flex 是一维布局：父容器 display:flex，子项成为 flex item。通过 justify-content（主轴）和 align-items（交叉轴）控制对齐，大屏横排 KPI 必备。',
    tableHeaders: ['属性', '常用值', '作用', '场景'],
    phases: [
      {
        name: '容器属性',
        hooks: [
          { composition: 'display', options: 'display: flex', when: '启用 Flex', use: '父元素设置' },
          { composition: 'flex-direction', options: 'row / column', when: '主轴方向', use: '横排或竖排' },
          { composition: 'justify-content', options: 'center / space-between', when: '主轴对齐', use: '水平居中、两端对齐' },
          { composition: 'align-items', options: 'center / stretch', when: '交叉轴对齐', use: '垂直居中' },
          { composition: 'gap', options: 'gap: 12px', when: '子项间距', use: '替代 margin 更方便' },
          { composition: 'flex-wrap', options: 'wrap', when: '换行', use: '子项过多时折行' },
        ],
      },
      {
        name: '子项属性',
        hooks: [
          { composition: 'flex', options: 'flex: 1', when: '弹性占比', use: '平分剩余空间' },
          { composition: 'align-self', options: 'align-self: center', when: '单个对齐', use: '覆盖父级 align-items' },
        ],
      },
    ],
    tips: ['flex 子项默认 min-width: auto 可能溢出，可设 min-width: 0。', '大屏 KPI 横排：display:flex; gap:16px。'],
  },
  'css-transition-animation': {
    title: '过渡与动画（CSS2/基础）',
    intro:
      'transition 在属性变化时平滑过渡；animation 用 @keyframes 定义关键帧动画。CSS3 有更完整语法，本节为基础概念。',
    tableHeaders: ['概念', '写法', '作用', '区别'],
    phases: [
      {
        hooks: [
          { composition: 'transition', options: 'all 0.3s ease', when: '属性过渡', use: 'hover 颜色渐变' },
          { composition: 'transition-property', options: 'opacity, transform', when: '指定属性', use: '只过渡需要的' },
          { composition: '@keyframes', options: '@keyframes fadeIn', when: '关键帧', use: '定义 0%~100% 状态' },
          { composition: 'animation', options: 'fadeIn 1s infinite', when: '应用动画', use: '名称 时长 循环' },
        ],
      },
    ],
    tips: ['过渡需要触发（如 :hover）。', '动画优先 transform/opacity，性能好。'],
  },
  'css-media-query': {
    title: '媒体查询（CSS2 基础）',
    intro:
      '@media 根据设备宽度、分辨率等条件应用不同样式，是响应式布局核心。大屏项目也会用 media query 做窄屏降级。',
    tableHeaders: ['写法', '含义', '场景', '示例'],
    phases: [
      {
        hooks: [
          { composition: 'max-width', options: '@media (max-width: 768px)', when: '小于等于', use: '手机竖屏样式' },
          { composition: 'min-width', options: '@media (min-width: 1200px)', when: '大于等于', use: '桌面宽屏' },
          { composition: 'orientation', options: 'orientation: landscape', when: '横竖屏', use: '平板适配' },
        ],
      },
    ],
    syntax: {
      title: '移动优先示例',
      blocks: [
        {
          title: '渐进增强',
          code: `/* 默认手机样式 */
.sidebar { display: none; }

/* 平板及以上 */
@media (min-width: 768px) {
  .sidebar { display: block; width: 240px; }
}`,
        },
      ],
    },
    tips: ['大屏项目主要按固定分辨率设计，media 用于管理端窄屏。', '配合 meta viewport 使用。'],
  },
}
