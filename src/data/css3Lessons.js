export const css3Lessons = [
  {
    id: 'css3-intro',
    category: 'css3',
    title: 'CSS3 简介',
    example: {
      description: 'CSS3 是 CSS 的最新标准，新增圆角、阴影、渐变、动画等特性。',
      html: `<div class="card old">CSS2 风格</div>
<div class="card new">CSS3 风格</div>`,
      css: `.card {
  width: 200px;
  padding: 20px;
  margin-bottom: 12px;
  text-align: center;
  font-weight: bold;
}

.old {
  border: 2px solid #94a3b8;
  background: #f1f5f9;
  color: #475569;
}

.new {
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.35);
}`,
    },
    quiz: {
      question: 'CSS3 相比 CSS2，最主要的变化是什么？',
      options: [
        {
          text: '新增大量视觉效果和动画特性',
          isCorrect: true,
          steps: [
            'CSS3 在 CSS2 基础上扩展，不是替换',
            '新增圆角、阴影、渐变、过渡、动画等',
            '仍使用选择器 { 属性: 值; } 语法',
            '现代浏览器已广泛支持 CSS3',
          ],
        },
        {
          text: '完全改变了 CSS 语法规则',
          isCorrect: false,
          steps: [
            'CSS3 基本语法与 CSS2 相同',
            '主要是新增属性和特性',
            '旧 CSS 代码仍然有效',
          ],
        },
        {
          text: '只能用于移动端',
          isCorrect: false,
          steps: [
            'CSS3 适用于所有设备',
            '桌面和移动端都可使用',
            '响应式布局也依赖 CSS3',
          ],
        },
      ],
    },
  },
  {
    id: 'css3-radius',
    category: 'css3',
    title: 'CSS3 圆角',
    example: {
      description: 'border-radius 属性设置元素圆角，可分别控制四个角。',
      html: `<div class="box r1">8px 圆角</div>
<div class="box r2">50% 圆形</div>
<div class="box r3">椭圆角</div>`,
      css: `.box {
  width: 160px;
  padding: 16px;
  margin-bottom: 10px;
  background: #dbeafe;
  color: #1e40af;
  text-align: center;
  font-weight: bold;
}

.r1 { border-radius: 8px; }
.r2 {
  width: 80px;
  height: 80px;
  line-height: 48px;
  border-radius: 50%;
}
.r3 { border-radius: 20px 4px 20px 4px; }`,
    },
    quiz: {
      question: '将正方形元素变成圆形，border-radius 应设为？',
      options: [
        {
          text: '50%',
          isCorrect: true,
          steps: [
            '元素宽高相等时，border-radius: 50% 得到正圆',
            '示例：width: 80px; height: 80px; border-radius: 50%;',
            '也可用固定像素值（值为宽高一半）',
            '常用于头像、圆形按钮',
          ],
        },
        {
          text: '100%',
          isCorrect: false,
          steps: [
            '100% 在某些情况下效果异常',
            '圆形通常用 50%',
            '50% 表示半径为宽高较小值的一半',
          ],
        },
        {
          text: 'circle',
          isCorrect: false,
          steps: [
            'border-radius 不支持 circle 关键字（旧语法除外）',
            '正确写法是 50% 或具体像素',
            '参考 MDN border-radius 文档',
          ],
        },
      ],
    },
  },
  {
    id: 'css3-gradient',
    category: 'css3',
    title: 'CSS3 渐变',
    example: {
      description: 'linear-gradient 线性渐变和 radial-gradient 径向渐变。',
      html: `<div class="grad linear">线性渐变</div>
<div class="grad radial">径向渐变</div>
<div class="grad multi">多色渐变</div>`,
      css: `.grad {
  height: 70px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  border-radius: 10px;
}

.linear {
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
}

.radial {
  background: radial-gradient(circle, #f59e0b, #ef4444);
}

.multi {
  background: linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6);
}`,
    },
    quiz: {
      question: '从左到右的线性渐变背景，应怎么写？',
      options: [
        {
          text: 'background: linear-gradient(to right, 色1, 色2);',
          isCorrect: true,
          steps: [
            '使用 linear-gradient 函数',
            '方向写 to right（或 90deg）',
            '示例：background: linear-gradient(to right, red, blue);',
            '可设多个颜色停止点',
          ],
        },
        {
          text: 'background: gradient(left, red, blue);',
          isCorrect: false,
          steps: [
            '没有 gradient() 这种写法',
            '线性渐变用 linear-gradient()',
            '径向渐变用 radial-gradient()',
          ],
        },
        {
          text: 'background-linear: red blue;',
          isCorrect: false,
          steps: [
            '没有 background-linear 属性',
            '渐变写在 background 属性中',
            '函数名是 linear-gradient',
          ],
        },
      ],
    },
  },
  {
    id: 'css3-shadow',
    category: 'css3',
    title: 'CSS3 阴影',
    example: {
      description: 'box-shadow 盒阴影和 text-shadow 文字阴影。',
      html: `<div class="box shadow1">盒阴影</div>
<div class="box shadow2">多层阴影</div>
<p class="text-shadow">文字阴影效果</p>`,
      css: `.box {
  width: 180px;
  padding: 20px;
  margin-bottom: 14px;
  background: white;
  text-align: center;
  font-weight: bold;
  border-radius: 10px;
}

.shadow1 {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.shadow2 {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1), 0 8px 24px rgba(59,130,246,0.2);
}

.text-shadow {
  font-size: 28px;
  font-weight: bold;
  color: #3b82f6;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}`,
    },
    quiz: {
      question: '给元素添加阴影应使用哪个属性？',
      options: [
        {
          text: 'box-shadow',
          isCorrect: true,
          steps: [
            '语法：box-shadow: x偏移 y偏移 模糊 扩散 颜色;',
            '示例：box-shadow: 0 4px 12px rgba(0,0,0,0.15);',
            '可叠加多个阴影，逗号分隔',
            '文字阴影用 text-shadow',
          ],
        },
        {
          text: 'shadow',
          isCorrect: false,
          steps: [
            'CSS 中没有 shadow 属性',
            '盒阴影用 box-shadow',
            '文字阴影用 text-shadow',
          ],
        },
        {
          text: 'drop-shadow',
          isCorrect: false,
          steps: [
            'drop-shadow 是 filter 属性的函数',
            '常规盒阴影用 box-shadow',
            'filter: drop-shadow() 用于特殊滤镜场景',
          ],
        },
      ],
    },
  },
  {
    id: 'css3-text',
    category: 'css3',
    title: 'CSS3 文本效果',
    example: {
      description: '文本溢出省略、单词断行、文字描边等 CSS3 文本特性。',
      html: `<p class="ellipsis">这是一段很长的文字，超出容器宽度后会显示省略号效果</p>
<p class="stroke">描边文字</p>
<p class="wrap">Supercalifragilisticexpialidocious</p>`,
      css: `.ellipsis {
  width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #f1f5f9;
  padding: 10px;
  border-radius: 6px;
}

.stroke {
  font-size: 32px;
  font-weight: bold;
  color: white;
  -webkit-text-stroke: 2px #3b82f6;
}

.wrap {
  width: 200px;
  word-break: break-all;
  background: #fef3c7;
  padding: 10px;
  border-radius: 6px;
}`,
    },
    quiz: {
      question: '单行文字超出显示省略号，需要哪三个属性配合？',
      options: [
        {
          text: 'overflow: hidden; white-space: nowrap; text-overflow: ellipsis;',
          isCorrect: true,
          steps: [
            'white-space: nowrap 强制不换行',
            'overflow: hidden 隐藏溢出内容',
            'text-overflow: ellipsis 显示省略号',
            '三者缺一不可',
          ],
        },
        {
          text: 'text-overflow: ellipsis 单独即可',
          isCorrect: false,
          steps: [
            'text-overflow  alone 不会生效',
            '必须配合 overflow 和 white-space',
            '这是经典三件套写法',
          ],
        },
        {
          text: 'overflow: scroll; text-cut: ellipsis;',
          isCorrect: false,
          steps: [
            '没有 text-cut 属性',
            'overflow: scroll 会显示滚动条而非省略号',
            '正确三属性见标准写法',
          ],
        },
      ],
    },
  },
  {
    id: 'css3-transform',
    category: 'css3',
    title: 'CSS3 2D 转换',
    example: {
      description: 'transform 实现旋转、缩放、平移、倾斜等 2D 变换。',
      html: `<div class="row">
  <div class="box">原始</div>
  <div class="box rotate">旋转</div>
  <div class="box scale">缩放</div>
  <div class="box translate">平移</div>
</div>`,
      css: `.row {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.box {
  width: 70px;
  height: 70px;
  background: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
}

.rotate { transform: rotate(30deg); }
.scale { transform: scale(1.3); }
.translate { transform: translate(10px, -5px); }`,
    },
    quiz: {
      question: '将元素旋转 30 度，应使用哪个 transform 函数？',
      options: [
        {
          text: 'rotate(30deg)',
          isCorrect: true,
          steps: [
            '写法：transform: rotate(30deg);',
            'deg 表示角度单位',
            '正值顺时针，负值逆时针',
            'transform 还可组合多个函数',
          ],
        },
        {
          text: 'turn(30)',
          isCorrect: false,
          steps: [
            '没有 turn() 作为独立函数名',
            '旋转用 rotate()',
            '也可使用 turn 单位：rotate(0.083turn)',
          ],
        },
        {
          text: 'skew(30deg)',
          isCorrect: false,
          steps: [
            'skew 是倾斜变换，不是旋转',
            '旋转用 rotate(30deg)',
            'scale 是缩放，translate 是平移',
          ],
        },
      ],
    },
  },
  {
    id: 'css3-transition',
    category: 'css3',
    title: 'CSS3 过渡',
    example: {
      description: 'transition 让属性变化产生平滑过渡动画。',
      html: `<div class="btn">悬停查看过渡效果</div>
<div class="card-trans">悬停放大</div>`,
      css: `.btn {
  display: inline-block;
  padding: 14px 28px;
  background: #3b82f6;
  color: white;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.btn:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

.card-trans {
  width: 160px;
  padding: 20px;
  margin-top: 16px;
  background: #dbeafe;
  text-align: center;
  border-radius: 10px;
  transition: all 0.4s ease;
  cursor: pointer;
}

.card-trans:hover {
  transform: scale(1.08);
  background: #bfdbfe;
}`,
    },
    quiz: {
      question: 'transition: all 0.3s ease 中，0.3s 表示什么？',
      options: [
        {
          text: '过渡动画持续时间',
          isCorrect: true,
          steps: [
            'transition 语法：属性 时长 缓动函数 延迟',
            '0.3s 表示动画持续 0.3 秒',
            'ease 是缓动曲线（先快后慢）',
            'all 表示所有可动画属性都过渡',
          ],
        },
        {
          text: '延迟开始时间',
          isCorrect: false,
          steps: [
            '延迟是第 4 个参数',
            '0.3s 在这里是持续时间',
            '示例：transition: all 0.3s ease 1s（1s 延迟）',
          ],
        },
        {
          text: '动画重复次数',
          isCorrect: false,
          steps: [
            '重复次数是 animation 的属性',
            'transition 只做一次过渡',
            '0.3s 是过渡时长',
          ],
        },
      ],
    },
  },
  {
    id: 'css3-animation',
    category: 'css3',
    title: 'CSS3 动画',
    example: {
      description: '@keyframes 定义关键帧，animation 属性控制动画播放。',
      html: `<div class="pulse">脉冲动画</div>
<div class="spin">旋转动画</div>`,
      css: `.pulse {
  width: 80px;
  height: 80px;
  background: #8b5cf6;
  border-radius: 50%;
  margin-bottom: 20px;
  animation: pulse 1.5s ease infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.15); opacity: 0.7; }
}

.spin {
  width: 50px;
  height: 50px;
  border: 4px solid #e2e8f0;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}`,
    },
    quiz: {
      question: '定义 CSS 动画关键帧使用哪个规则？',
      options: [
        {
          text: '@keyframes',
          isCorrect: true,
          steps: [
            '用 @keyframes 名称 { ... } 定义',
            '示例：@keyframes fade { from { opacity: 0; } to { opacity: 1; } }',
            '通过 animation: fade 1s 应用到元素',
            '可定义 0%/from 到 100%/to 的多个阶段',
          ],
        },
        {
          text: '@animation',
          isCorrect: false,
          steps: [
            '没有 @animation 规则',
            '关键帧用 @keyframes',
            'animation 是元素上的属性',
          ],
        },
        {
          text: '@transition',
          isCorrect: false,
          steps: [
            '没有 @transition 规则',
            '过渡不需要 @keyframes',
            '复杂动画才用 @keyframes',
          ],
        },
      ],
    },
  },
  {
    id: 'css3-columns',
    category: 'css3',
    title: 'CSS3 多列布局',
    example: {
      description: 'column-count 和 column-gap 实现报纸式多栏排版。',
      html: `<div class="multi-col">
  <p>CSS3 多列布局可以将一段长文本自动分成多栏显示，就像报纸排版一样。这是 CSS3 中非常实用的排版特性。</p>
  <p>通过 column-count 设置列数，column-gap 设置列间距，column-rule 可以添加分隔线。</p>
</div>`,
      css: `.multi-col {
  column-count: 3;
  column-gap: 24px;
  column-rule: 1px solid #cbd5e1;
  background: #f8fafc;
  padding: 20px;
  border-radius: 10px;
}

.multi-col p {
  margin: 0 0 12px;
  line-height: 1.7;
  color: #475569;
}`,
    },
    quiz: {
      question: '将文本分为 3 列显示，应设置哪个属性？',
      options: [
        {
          text: 'column-count: 3',
          isCorrect: true,
          steps: [
            'column-count 指定列数',
            '示例：column-count: 3;',
            '配合 column-gap 设置列间距',
            '适合长文多栏排版',
          ],
        },
        {
          text: 'columns: 3',
          isCorrect: false,
          steps: [
            'columns 是简写，但 column-count 更明确',
            'column-count: 3 是标准写法',
            'columns: 3 也能工作，但题目最佳答案是 column-count',
          ],
        },
        {
          text: 'grid-columns: 3',
          isCorrect: false,
          steps: [
            '没有 grid-columns 属性',
            '多列布局用 column-count',
            'Grid 布局用 display: grid',
          ],
        },
      ],
    },
  },
  {
    id: 'css3-box-sizing',
    category: 'css3',
    title: 'CSS3 盒模型',
    example: {
      description: 'box-sizing: border-box 让 width 包含 padding 和 border。',
      html: `<div class="demo">
  <div class="box content-box">content-box<br>200px + padding</div>
  <div class="box border-box">border-box<br>200px 含 padding</div>
</div>`,
      css: `.demo {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.box {
  width: 200px;
  padding: 20px;
  border: 4px solid #3b82f6;
  background: #dbeafe;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
}

.content-box {
  box-sizing: content-box;
}

.border-box {
  box-sizing: border-box;
}`,
    },
    quiz: {
      question: '让元素的 width 包含 padding 和 border，应设置？',
      options: [
        {
          text: 'box-sizing: border-box',
          isCorrect: true,
          steps: [
            'border-box 让宽高包含 padding 和 border',
            '示例：* { box-sizing: border-box; } 全局设置',
            'content-box 是默认值（不含 padding/border）',
            '现代布局几乎总是用 border-box',
          ],
        },
        {
          text: 'box-model: include',
          isCorrect: false,
          steps: [
            '没有 box-model 属性',
            '用 box-sizing: border-box',
            '这是 CSS3 最常用的属性之一',
          ],
        },
        {
          text: 'width: border-box',
          isCorrect: false,
          steps: [
            'width 不接受 border-box 值',
            'box-sizing 是独立属性',
            '正确：box-sizing: border-box',
          ],
        },
      ],
    },
  },
  {
    id: 'css3-flexbox',
    category: 'css3',
    title: 'CSS3 弹性盒子',
    example: {
      description: 'Flexbox 是一维弹性布局，轻松实现居中和对齐。',
      html: `<div class="flex-container">
  <div class="flex-item">A</div>
  <div class="flex-item grow">B (flex:1)</div>
  <div class="flex-item">C</div>
</div>
<div class="flex-center">
  <span>完美居中</span>
</div>`,
      css: `.flex-container {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}

.flex-item {
  padding: 16px 24px;
  background: #dbeafe;
  border-radius: 8px;
  font-weight: bold;
}

.grow { flex: 1; background: #bfdbfe; }

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background: #f1f5f9;
  border-radius: 10px;
}

.flex-center span {
  background: #22c55e;
  color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-weight: bold;
}`,
    },
    quiz: {
      question: '启用 Flexbox 布局，父元素应设置？',
      options: [
        {
          text: 'display: flex',
          isCorrect: true,
          steps: [
            '父容器设置 display: flex',
            '子元素自动成为 flex item',
            'justify-content 控制主轴对齐',
            'align-items 控制交叉轴对齐',
          ],
        },
        {
          text: 'flex: enable',
          isCorrect: false,
          steps: [
            '没有 flex: enable 写法',
            '父元素用 display: flex',
            'flex 是子元素的属性',
          ],
        },
        {
          text: 'layout: flexbox',
          isCorrect: false,
          steps: [
            '没有 layout 属性',
            '正确写法是 display: flex',
            'CSS3 Flexbox 是现代布局核心',
          ],
        },
      ],
    },
  },
  {
    id: 'css3-grid',
    category: 'css3',
    title: 'CSS3 Grid 网格',
    example: {
      description: 'Grid 二维网格布局，同时控制行和列。',
      html: `<div class="grid-container">
  <div class="grid-item header">Header</div>
  <div class="grid-item sidebar">Side</div>
  <div class="grid-item main">Main</div>
  <div class="grid-item footer">Footer</div>
</div>`,
      css: `.grid-container {
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 8px;
  height: 200px;
}

.grid-item {
  padding: 12px;
  background: #dbeafe;
  border-radius: 6px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
}

.header { grid-column: 1 / 3; background: #93c5fd; }
.footer { grid-column: 1 / 3; background: #93c5fd; }
.main { background: #bfdbfe; }`,
    },
    quiz: {
      question: '创建 3 列等宽网格，grid-template-columns 应写？',
      options: [
        {
          text: 'repeat(3, 1fr)',
          isCorrect: true,
          steps: [
            'repeat(3, 1fr) 创建 3 个等宽列',
            '示例：grid-template-columns: repeat(3, 1fr);',
            '1fr 表示占剩余空间的一份',
            '也可写 1fr 1fr 1fr',
          ],
        },
        {
          text: 'columns: 3',
          isCorrect: false,
          steps: [
            'columns 是多列布局属性',
            'Grid 用 grid-template-columns',
            'display: grid 是前提',
          ],
        },
        {
          text: 'grid: 3',
          isCorrect: false,
          steps: [
            'grid 简写不能这样写',
            '用 grid-template-columns: repeat(3, 1fr)',
            'Grid 是二维布局',
          ],
        },
      ],
    },
  },
  {
    id: 'css3-media',
    category: 'css3',
    title: 'CSS3 媒体查询',
    example: {
      description: '@media 根据屏幕尺寸应用不同样式，实现响应式设计。',
      html: `<div class="responsive">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
<p class="hint">缩小窗口查看布局变化</p>`,
      css: `.responsive {
  display: flex;
  gap: 10px;
}

.item {
  flex: 1;
  padding: 24px;
  background: #dbeafe;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 10px;
}

.hint {
  color: #64748b;
  font-size: 14px;
  margin-top: 12px;
}

@media (max-width: 600px) {
  .responsive {
    flex-direction: column;
  }
  .item {
    background: #fef3c7;
  }
  .hint {
    color: #dc2626;
    font-weight: bold;
  }
}`,
    },
    quiz: {
      question: '屏幕宽度小于 768px 时应用样式，怎么写？',
      options: [
        {
          text: '@media (max-width: 768px) { ... }',
          isCorrect: true,
          steps: [
            '@media 规则包裹条件样式',
            'max-width: 768px 表示最大宽度 768px',
            '这是移动端适配的标准写法',
            '配合 viewport meta 标签使用',
          ],
        },
        {
          text: '@screen mobile { ... }',
          isCorrect: false,
          steps: [
            '没有 @screen mobile 语法',
            '用 @media (max-width: 768px)',
            '也可使用 min-width 做桌面优先',
          ],
        },
        {
          text: '@responsive 768 { ... }',
          isCorrect: false,
          steps: [
            '@responsive 不是 CSS 语法',
            '媒体查询用 @media',
            '条件是 (max-width: 768px)',
          ],
        },
      ],
    },
  },
]
