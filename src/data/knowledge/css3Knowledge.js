export const css3Knowledge = {
  'css3-intro': {
    title: 'CSS3 概述',
    intro:
      'CSS3 不是独立语言，而是在 CSS2.1 基础上模块化扩展：圆角、阴影、渐变、2D/3D 变换、过渡、动画、Grid 等。语法仍是 选择器 { 属性: 值; }，旧代码完全兼容。',
    tableHeaders: ['模块', '代表属性', '视觉效果', '大屏应用'],
    phases: [
      {
        hooks: [
          { composition: '外观', options: 'border-radius, box-shadow', when: '圆角阴影', use: '面板、卡片质感' },
          { composition: '背景', options: 'linear-gradient', when: '渐变', use: '深色大屏背景' },
          { composition: '变换', options: 'transform', when: '旋转缩放', use: '图标动效' },
          { composition: '动画', options: 'transition, animation', when: '动态效果', use: '数字滚动、边框光效' },
          { composition: '布局', options: 'flex, grid', when: '现代布局', use: '三栏大屏结构' },
        ],
      },
    ],
    tips: ['写新样式可加浏览器前缀（-webkit-）兼容旧版。', 'Can I use 网站可查属性兼容性。'],
  },
  'css3-radius': {
    title: '圆角 border-radius',
    intro:
      'border-radius 设置四角圆度，单位 px 或 %。50% 在正方形元素上得到正圆，是头像、徽章的常用写法。',
    tableHeaders: ['写法', '示例', '效果', '场景'],
    phases: [
      {
        hooks: [
          { composition: '四角相同', options: 'border-radius: 8px', when: '统一圆角', use: '按钮、卡片' },
          { composition: '正圆', options: 'border-radius: 50%', when: '宽高相等时', use: '头像、状态点' },
          { composition: '四角分别', options: '8px 8px 0 0', when: '上右下左', use: '只圆顶部两角' },
          { composition: '椭圆', options: '50% / 30%', when: '水平/垂直半径', use: '胶囊形标签' },
        ],
      },
    ],
    tips: ['overflow: hidden 配合圆角可裁切子元素。', 'ECharts 柱子圆角在 itemStyle.borderRadius 设置。'],
  },
  'css3-gradient': {
    title: '渐变',
    intro:
      'linear-gradient 线性渐变、radial-gradient 径向渐变。大屏深色背景、按钮高光、装饰条都常用渐变替代纯色素材。',
    tableHeaders: ['类型', '写法', '效果', '场景'],
    phases: [
      {
        hooks: [
          { composition: '线性', options: 'linear-gradient(180deg, #0b1324, #0f2847)', when: '沿角度渐变', use: '大屏背景' },
          { composition: '对角', options: 'linear-gradient(135deg, a, b)', when: '斜向渐变', use: '卡片、按钮' },
          { composition: '径向', options: 'radial-gradient(circle, a, b)', when: '中心向外', use: '光晕效果' },
          { composition: '多色停点', options: 'red 0%, blue 50%', when: '色标位置', use: '精确控制过渡' },
        ],
      },
    ],
    syntax: {
      title: '大屏常用渐变',
      blocks: [
        {
          title: '背景与边框',
          code: `.screen {
  background: linear-gradient(180deg, #0b1324 0%, #0a1628 100%);
}
.title-bar {
  background: linear-gradient(90deg, transparent, #3ec1ff, transparent);
}`,
        },
      ],
    },
    tips: ['渐变可作 background-image。', '文字渐变：background-clip: text。'],
  },
  'css3-shadow': {
    title: '阴影',
    intro: 'box-shadow 盒子阴影营造层次；text-shadow 文字阴影。inset 为内阴影。大屏面板常用微弱外阴影增加立体感。',
    tableHeaders: ['属性', '语法', '参数', '示例'],
    phases: [
      {
        hooks: [
          { composition: 'box-shadow', options: '0 4px 12px rgba(0,0,0,.3)', when: '外阴影', use: 'x偏移 y偏移 模糊 扩散 颜色' },
          { composition: 'inset', options: 'inset 0 0 20px blue', when: '内阴影', use: '凹陷、发光边框' },
          { composition: '多层', options: '逗号分隔多个', when: '叠加阴影', use: '更细腻层次' },
          { composition: 'text-shadow', options: '1px 1px 2px #000', when: '文字阴影', use: '标题立体感' },
        ],
      },
    ],
    tips: ['阴影不占用布局空间。', '发光效果：0 0 20px #3ec1ff。'],
  },
  'css3-text': {
    title: '文本效果（CSS3）',
    intro: 'CSS3 增强文本：text-shadow、文字溢出省略、自定义字体 @font-face、文字描边等。',
    tableHeaders: ['属性', '写法', '作用', '场景'],
    phases: [
      {
        hooks: [
          { composition: 'text-overflow', options: 'ellipsis', when: '溢出省略号', use: '需 white-space: nowrap' },
          { composition: 'word-break', options: 'break-all', when: '换行规则', use: '长英文/URL 折行' },
          { composition: '@font-face', options: 'font-family 自定义', when: '嵌入字体', use: '大屏数字字体' },
          { composition: '-webkit-text-stroke', options: '1px #fff', when: '文字描边', use: '标题艺术字' },
        ],
      },
    ],
    tips: ['大屏标题可用 letter-spacing 加间距。', 'font-display: swap 优化字体加载。'],
  },
  'css3-transform': {
    title: '2D/3D 变换',
    intro:
      'transform 对元素进行旋转、缩放、平移、倾斜，不触发重排（layout），性能优于改 width/top。大屏 scale 适配整屏就靠 transform: scale()。',
    tableHeaders: ['函数', '写法', '效果', '场景'],
    phases: [
      {
        hooks: [
          { composition: 'translate', options: 'translate(10px, 20px)', when: '平移', use: '微调位置' },
          { composition: 'scale', options: 'scale(0.5)', when: '缩放', use: '大屏整屏适配' },
          { composition: 'rotate', options: 'rotate(45deg)', when: '旋转', use: '图标、加载动画' },
          { composition: 'skew', options: 'skew(10deg)', when: '倾斜', use: '平行四边形效果' },
          { composition: '组合', options: 'transform: scale() translate()', when: '多函数', use: '注意书写顺序影响结果' },
          { composition: '原点', options: 'transform-origin: center', when: '变换中心', use: '默认中心，可改左上角' },
        ],
      },
    ],
    tips: ['scale 后点击区域需单独处理。', 'transform 不影响文档流占位（原位置保留）。'],
  },
  'css3-transition': {
    title: '过渡 Transition',
    intro:
      'transition 在 CSS 属性值变化时自动插值动画，需触发条件（:hover、class 切换、JS 改样式）。适合简单交互，复杂序列用 animation。',
    tableHeaders: ['属性', '写法', '含义', '示例'],
    phases: [
      {
        hooks: [
          { composition: 'transition-property', options: 'opacity, transform', when: '过渡哪些属性', use: '避免 all 性能差' },
          { composition: 'transition-duration', options: '0.3s', when: '持续时间', use: '常用 0.2~0.5s' },
          { composition: 'transition-timing-function', options: 'ease / linear', when: '速度曲线', use: 'ease-in-out 更自然' },
          { composition: 'transition-delay', options: '0.1s', when: '延迟开始', use: '依次出现效果' },
          { composition: '简写', options: 'transition: opacity 0.3s ease', when: '一行', use: '属性 时长 曲线' },
        ],
      },
    ],
    tips: ['只能过渡数值类属性（颜色、尺寸、opacity）。', 'display 不能过渡。'],
  },
  'css3-animation': {
    title: '动画 Animation',
    intro:
      '@keyframes 定义动画各阶段状态，animation 属性绑定到元素。可无限循环、反向、暂停，适合大屏边框呼吸灯、数据刷新提示。',
    tableHeaders: ['概念', '写法', '作用', '场景'],
    phases: [
      {
        hooks: [
          { composition: '@keyframes', options: 'from/to 或 0%/100%', when: '定义关键帧', use: '命名动画' },
          { composition: 'animation-name', options: 'fadeIn', when: '使用哪个动画', use: '对应 keyframes 名' },
          { composition: 'animation-duration', options: '2s', when: '一轮时长', use: '速度控制' },
          { composition: 'animation-iteration-count', options: 'infinite', when: '播放次数', use: '无限循环' },
          { composition: 'animation-direction', options: 'alternate', when: '交替反向', use: '来回动画' },
        ],
      },
    ],
    syntax: {
      title: '呼吸灯示例',
      blocks: [
        {
          title: '@keyframes + animation',
          code: `@keyframes glow {
  0%, 100% { box-shadow: 0 0 8px #3ec1ff; }
  50%      { box-shadow: 0 0 24px #3ec1ff; }
}
.panel { animation: glow 2s ease-in-out infinite; }`,
        },
      ],
    },
    tips: ['animation-fill-mode: forwards 保持结束状态。', '减少同时运行的大量动画。'],
  },
  'css3-columns': {
    title: '多列布局',
    intro: 'column-count / column-width 将内容分成多列，类似报纸排版。适合长文本，大屏用得较少。',
    tableHeaders: ['属性', '写法', '作用', '注意'],
    phases: [
      {
        hooks: [
          { composition: 'column-count', options: 'column-count: 3', when: '分几列', use: '自动计算列宽' },
          { composition: 'column-gap', options: 'column-gap: 20px', when: '列间距', use: '类似 gap' },
          { composition: 'column-rule', options: '1px solid #ccc', when: '列间分割线', use: '视觉分隔' },
        ],
      },
    ],
    tips: ['大屏列表更常用 Flex/Grid。', 'break-inside: avoid 防止元素被截断。'],
  },
  'css3-box-sizing': {
    title: 'box-sizing',
    intro:
      'box-sizing 改变 width/height 的计算方式。content-box（默认）width 只含内容；border-box 的 width 包含 padding 和 border，布局计算更直观。',
    tableHeaders: ['值', 'width 包含', '特点', '建议'],
    phases: [
      {
        hooks: [
          { composition: 'content-box', options: '默认', when: '宽=内容区', use: '加 padding 会撑大总宽' },
          { composition: 'border-box', options: '推荐全局', when: '宽=内容+padding+border', use: '设 width:100% 不溢出' },
        ],
      },
    ],
    syntax: {
      title: '全局重置',
      blocks: [
        {
          title: '推荐写法',
          code: `*, *::before, *::after {
  box-sizing: border-box;
}`,
        },
      ],
    },
    tips: ['Flex/Grid 子项设百分比宽度时 border-box 更安全。', '大屏固定布局几乎都用 border-box。'],
  },
  'css3-flexbox': {
    title: 'Flexbox（CSS3 完整）',
    intro:
      'CSS3 标准化了 Flex 布局。大屏三栏、KPI 横排、垂直居中都用 Flex。父设 display:flex，子项用 flex 属性分配空间。',
    tableHeaders: ['属性', '值', '作用', '大屏场景'],
    phases: [
      {
        name: '容器',
        hooks: [
          { composition: 'justify-content', options: 'space-between', when: '主轴对齐', use: 'KPI 均匀分布' },
          { composition: 'align-items', options: 'center', when: '交叉轴居中', use: '垂直居中图表标题' },
          { composition: 'flex-direction', options: 'column', when: '竖向排列', use: '上标题下图表' },
        ],
      },
      {
        name: '子项',
        hooks: [
          { composition: 'flex: 1', options: 'flex: 1 1 0', when: '平分空间', use: '三栏等宽侧栏' },
          { composition: 'flex-shrink', options: 'flex-shrink: 0', when: '禁止收缩', use: '防止图表被挤扁' },
        ],
      },
    ],
    tips: ['父级需有高度，子项 height:100% 才生效。', 'min-height: 0 解决 flex 子项溢出。'],
  },
  'css3-grid': {
    title: 'Grid 网格布局',
    intro:
      'Grid 是二维布局：同时定义行和列。grid-template-columns 划分列宽，gap 设间距。大屏 左-中-右 三栏用 1fr 2fr 1fr 最经典。',
    tableHeaders: ['属性', '写法', '作用', '示例'],
    phases: [
      {
        hooks: [
          { composition: 'display', options: 'display: grid', when: '启用网格', use: '父容器' },
          { composition: 'grid-template-columns', options: '1fr 2fr 1fr', when: '列定义', use: '三栏大屏' },
          { composition: 'grid-template-rows', options: '80px 1fr', when: '行定义', use: '顶栏+内容区' },
          { composition: 'gap', options: 'gap: 12px', when: '行列间距', use: '统一间距' },
          { composition: 'grid-area', options: 'grid-area: main', when: '区域命名', use: '复杂布局模板' },
          { composition: 'fr', options: '1fr', when: '弹性份数', use: '按比例分配剩余空间' },
        ],
      },
    ],
    syntax: {
      title: '大屏三栏',
      blocks: [
        {
          title: '经典布局',
          code: `.screen {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 60px 1fr;
  gap: 12px;
  height: 100vh;
}`,
        },
      ],
    },
    tips: ['fr 与 px 可混用：240px 1fr 240px。', 'Grid 适合页面骨架，内部图表区再用 Flex。'],
  },
  'css3-media': {
    title: '媒体查询（CSS3）',
    intro:
      'CSS3 扩展了 @media：支持更多特性查询。实战常用 min-width/max-width 断点；大屏项目也会为窄屏管理端写降级样式。',
    tableHeaders: ['断点', '写法', '目标设备', '策略'],
    phases: [
      {
        hooks: [
          { composition: '手机', options: 'max-width: 576px', when: '小屏', use: '单列、隐藏侧边栏' },
          { composition: '平板', options: '768px ~ 1024px', when: '中屏', use: '两列布局' },
          { composition: '桌面', options: 'min-width: 1200px', when: '宽屏', use: '完整三栏' },
          { composition: '大屏', options: 'min-width: 1920px', when: '超宽', use: '放大字号间距' },
        ],
      },
    ],
    tips: [
      '大屏可视化项目常用固定 1920 设计 + scale，不完全依赖 media。',
      'vw/vh 与 rem 也是适配方案，见面试题模块。',
    ],
  },
}
