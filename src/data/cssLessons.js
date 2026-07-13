export const cssLessons = [
  {
    id: 'css-syntax',
    category: 'css',
    title: 'CSS 语法与选择器',
    example: {
      description: 'CSS 基本语法：选择器 { 属性: 值; }，以及元素、类、ID 选择器。',
      html: `<h1>标题样式</h1>
<p>这是一个段落。</p>
<p class="highlight">带 class 的段落。</p>
<p id="special">带 id 的特殊段落。</p>`,
      css: `h1 {
  color: #2563eb;
  text-align: center;
}

p {
  font-size: 16px;
  line-height: 1.6;
}

.highlight {
  background: #fef3c7;
  padding: 8px;
}

#special {
  color: #dc2626;
  font-weight: bold;
}`,
    },
    quiz: {
      question: '要给所有 <p> 元素设置样式，应使用哪种选择器？',
      options: [
        {
          text: 'p { }',
          isCorrect: true,
          steps: [
            '元素选择器直接写标签名：p { color: red; }',
            '放在 <style> 标签或 .css 文件中',
            '每条声明格式：属性: 值;',
            '会选中页面上所有 p 元素',
          ],
        },
        {
          text: '.p { }',
          isCorrect: false,
          steps: [
            '.p 是 class 选择器，匹配 class="p" 的元素',
            '不是匹配 <p> 标签',
            '标签选择器应写 p { }',
          ],
        },
        {
          text: '#p { }',
          isCorrect: false,
          steps: [
            '#p 是 id 选择器，匹配 id="p" 的元素',
            '给所有段落设样式用元素选择器 p',
            'id 在页面中应唯一',
          ],
        },
      ],
    },
  },
  {
    id: 'css-id-class',
    category: 'css',
    title: 'Id 和 Class 选择器',
    example: {
      description: 'class 可复用（.名称），id 唯一（#名称）。',
      html: `<div class="card">卡片 1</div>
<div class="card featured">卡片 2（额外 class）</div>
<div id="banner">唯一横幅区域</div>`,
      css: `.card {
  border: 1px solid #cbd5e1;
  padding: 16px;
  margin-bottom: 10px;
  border-radius: 8px;
}

.card.featured {
  border-color: #3b82f6;
  background: #eff6ff;
}

#banner {
  background: #1e293b;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
}`,
    },
    quiz: {
      question: '多个元素共用的样式，应优先用哪种选择器？',
      options: [
        {
          text: 'class 选择器（.name）',
          isCorrect: true,
          steps: [
            'HTML 中写 class="name"',
            'CSS 中写 .name { ... }',
            '同一个 class 可应用于多个元素',
            '例如 .btn 可用于多个按钮',
          ],
        },
        {
          text: 'id 选择器（#name）',
          isCorrect: false,
          steps: [
            'id 在页面中应唯一，不适合复用',
            '共用样式应使用 class',
            'id 适合唯一区域如 #header',
          ],
        },
        {
          text: 'tag#name',
          isCorrect: false,
          steps: [
            '这是标签+id 组合选择器',
            '仍然只匹配特定 id 的元素',
            '复用样式应使用 class',
          ],
        },
      ],
    },
  },
  {
    id: 'css-import',
    category: 'css',
    title: 'CSS 引入方式',
    example: {
      description: '行内样式、内部样式表、外部样式表三种方式对比。',
      html: `<p class="internal">内部样式表控制</p>
<p style="color: green;">行内样式控制</p>
<p class="external-demo">模拟外部样式效果</p>`,
      css: `/* 内部样式表写法 */
.internal {
  color: #2563eb;
  font-size: 18px;
}

/* 外部样式表通过 link 引入：
<link rel="stylesheet" href="style.css">
*/
.external-demo {
  color: #9333ea;
  border-left: 4px solid #9333ea;
  padding-left: 12px;
}`,
    },
    quiz: {
      question: '推荐在 HTML 中引入外部 CSS 文件的方式是？',
      options: [
        {
          text: '<link rel="stylesheet" href="style.css">',
          isCorrect: true,
          steps: [
            '在 <head> 中添加 link 标签',
            'rel 属性设为 stylesheet',
            'href 指向 .css 文件路径',
            '外部 CSS 便于维护和复用',
          ],
        },
        {
          text: '<style src="style.css"></style>',
          isCorrect: false,
          steps: [
            'style 标签不支持 src 属性',
            '外部文件用 link 引入',
            'style 标签内直接写 CSS 规则',
          ],
        },
        {
          text: '<css href="style.css">',
          isCorrect: false,
          steps: [
            'HTML 中没有 <css> 标签',
            '正确写法是 link rel="stylesheet"',
            '放在 head 区域内',
          ],
        },
      ],
    },
  },
  {
    id: 'css-background',
    category: 'css',
    title: '背景 Background',
    example: {
      description: 'background-color、background-image 等背景属性。',
      html: `<div class="box color">纯色背景</div>
<div class="box image">图片背景</div>
<div class="box gradient">渐变背景</div>`,
      css: `.box {
  height: 80px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  border-radius: 8px;
}

.color {
  background-color: #3b82f6;
}

.image {
  background-image: url('https://via.placeholder.com/400x80/6366f1/ffffff?text=BG');
  background-size: cover;
  background-position: center;
}

.gradient {
  background: linear-gradient(135deg, #667eea, #764ba2);
}`,
    },
    quiz: {
      question: '设置元素背景颜色应使用哪个属性？',
      options: [
        {
          text: 'background-color',
          isCorrect: true,
          steps: [
            '写法：background-color: #3b82f6;',
            '可用颜色名、十六进制、rgb() 等',
            '示例：background-color: red;',
            '简写 background 也可同时设置多项',
          ],
        },
        {
          text: 'bgcolor',
          isCorrect: false,
          steps: [
            'bgcolor 是旧 HTML 属性，已废弃',
            '应使用 CSS 的 background-color',
            '样式与结构分离',
          ],
        },
        {
          text: 'color',
          isCorrect: false,
          steps: [
            'color 设置文字颜色，不是背景',
            '背景色用 background-color',
            '两者经常一起使用',
          ],
        },
      ],
    },
  },
  {
    id: 'css-text-font',
    category: 'css',
    title: '文本与字体',
    example: {
      description: '文字颜色、对齐、装饰、字体大小与字重等。',
      html: `<p class="title">居中标题文字</p>
<p class="desc">这是一段<strong>描述文字</strong>，演示字体样式。</p>
<p class="strike">删除线文本</p>`,
      css: `.title {
  color: #1e293b;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  font-family: "Microsoft YaHei", sans-serif;
}

.desc {
  color: #475569;
  text-indent: 2em;
  line-height: 1.8;
  letter-spacing: 1px;
}

.strike {
  text-decoration: line-through;
  color: #94a3b8;
}`,
    },
    quiz: {
      question: '让文字水平居中应使用哪个属性？',
      options: [
        {
          text: 'text-align: center',
          isCorrect: true,
          steps: [
            '在目标元素上设置 text-align: center',
            '示例：h1 { text-align: center; }',
            '还可设 left、right、justify',
            '对块级元素内的行内内容生效',
          ],
        },
        {
          text: 'align: center',
          isCorrect: false,
          steps: [
            'CSS 中没有 align 属性',
            '文字对齐用 text-align',
            '元素居中布局常用 margin: 0 auto 或 flex',
          ],
        },
        {
          text: 'center: true',
          isCorrect: false,
          steps: [
            '这不是合法的 CSS 属性',
            '文字居中用 text-align: center',
            '注意与 flex 居中的区别',
          ],
        },
      ],
    },
  },
  {
    id: 'css-box-model',
    category: 'css',
    title: '盒子模型',
    example: {
      description: '内容(content)、内边距(padding)、边框(border)、外边距(margin) 组成盒子。',
      html: `<div class="outer">
  <div class="inner">盒子模型示例</div>
</div>`,
      css: `.outer {
  background: #dbeafe;
  padding: 20px;
}

.inner {
  background: #fef3c7;
  border: 4px solid #f59e0b;
  padding: 20px;
  margin: 10px;
  width: 200px;
  text-align: center;
  font-weight: bold;
}`,
    },
    quiz: {
      question: 'CSS 盒模型从里到外依次是？',
      options: [
        {
          text: 'content → padding → border → margin',
          isCorrect: true,
          steps: [
            'content：实际内容区域',
            'padding：内容与边框之间的内边距',
            'border：边框',
            'margin：元素与其他元素之间的外边距',
          ],
        },
        {
          text: 'margin → border → padding → content',
          isCorrect: false,
          steps: [
            '顺序反了，margin 在最外层',
            '正确顺序：content → padding → border → margin',
            '可用浏览器开发者工具查看盒模型',
          ],
        },
        {
          text: 'content → border → padding → margin',
          isCorrect: false,
          steps: [
            'padding 在 border 内侧，不是外侧',
            'border 夹在 padding 和 margin 之间',
            '记忆：内边距靠近内容，外边距远离内容',
          ],
        },
      ],
    },
  },
  {
    id: 'css-border',
    category: 'css',
    title: '边框 Border',
    example: {
      description: 'border 宽度、样式、颜色，以及 border-radius 圆角。',
      html: `<div class="box solid">实线边框</div>
<div class="box dashed">虚线边框</div>
<div class="box round">圆角边框</div>`,
      css: `.box {
  padding: 16px;
  margin-bottom: 10px;
  text-align: center;
}

.solid {
  border: 2px solid #3b82f6;
}

.dashed {
  border: 2px dashed #ef4444;
}

.round {
  border: 2px solid #22c55e;
  border-radius: 16px;
  background: #f0fdf4;
}`,
    },
    quiz: {
      question: '设置 2px 蓝色实线边框的简写是？',
      options: [
        {
          text: 'border: 2px solid blue;',
          isCorrect: true,
          steps: [
            '简写顺序：宽度 样式 颜色',
            '示例：border: 2px solid blue;',
            '也可分开写 border-width、border-style、border-color',
            'solid 表示实线，dashed 表示虚线',
          ],
        },
        {
          text: 'border: blue solid 2px;',
          isCorrect: false,
          steps: [
            '简写推荐顺序：宽度 → 样式 → 颜色',
            '正确：border: 2px solid blue;',
            '部分浏览器可能容错，但应遵循规范',
          ],
        },
        {
          text: 'border-line: 2px blue;',
          isCorrect: false,
          steps: [
            '没有 border-line 属性',
            '使用 border 简写属性',
            '圆角额外用 border-radius',
          ],
        },
      ],
    },
  },
  {
    id: 'css-margin-padding',
    category: 'css',
    title: 'Margin 与 Padding',
    example: {
      description: 'margin 控制外边距，padding 控制内边距，均支持四方向设置。',
      html: `<div class="container">
  <div class="box_a">margin + padding 示例 A</div>
  <div class="box_b">margin + padding 示例 B</div>
</div>`,
      css: `.container {
  background: #f1f5f9;
  padding: 10px;
}

.box_a {
  background: #bfdbfe;
  margin: 20px;
  padding: 16px;
}

.box_b {
  background: #bbf7d0;
  margin: 10px 30px;
  padding: 10px 20px;
}`,
    },
    quiz: {
      question: '要让元素内容与边框之间留出 16px 空白，应设置？',
      options: [
        {
          text: 'padding: 16px;',
          isCorrect: true,
          steps: [
            'padding 控制内边距（内容与边框之间）',
            '写法：padding: 16px;',
            '四方向相同可写一个值',
            '不同方向：padding: 10px 20px;',
          ],
        },
        {
          text: 'margin: 16px;',
          isCorrect: false,
          steps: [
            'margin 是外边距，在边框外侧',
            '内容与边框之间用 padding',
            'margin 影响元素与其他元素的间距',
          ],
        },
        {
          text: 'spacing: 16px;',
          isCorrect: false,
          steps: [
            'CSS 中没有 spacing 属性',
            '内边距用 padding',
            '外边距用 margin',
          ],
        },
      ],
    },
  },
  {
    id: 'css-display',
    category: 'css',
    title: 'Display 显示模式',
    example: {
      description: 'block、inline、inline-block 及 display: none 的区别。',
      html: `<span class="block">span 改为 block</span>
<span class="inline-block">inline-block 元素</span>
<span class="hidden">display:none 不可见</span>
<span>正常 inline 元素</span>`,
      css: `.block {
  display: block;
  background: #dbeafe;
  margin-bottom: 8px;
  padding: 8px;
}

.inline-block {
  display: inline-block;
  width: 160px;
  background: #fef3c7;
  padding: 8px;
  text-align: center;
}

.hidden {
  display: none;
}`,
    },
    quiz: {
      question: '要让元素独占一行且可设置宽高，display 应设为？',
      options: [
        {
          text: 'block',
          isCorrect: true,
          steps: [
            'display: block 使元素变为块级',
            '块级元素独占一行',
            '可设置 width、height',
            'div、p、h1 默认就是 block',
          ],
        },
        {
          text: 'inline',
          isCorrect: false,
          steps: [
            'inline 元素不换行',
            '无法设置 width/height',
            'span、a 默认是 inline',
          ],
        },
        {
          text: 'visible',
          isCorrect: false,
          steps: [
            'display 没有 visible 值',
            'visibility: visible 控制可见性',
            '独占一行用 display: block',
          ],
        },
      ],
    },
  },
  {
    id: 'css-position',
    category: 'css',
    title: 'Position 定位',
    example: {
      description: 'relative、absolute、fixed 定位及 z-index 层叠。',
      html: `<div class="relative-box">
  相对定位容器
  <div class="absolute-box">绝对定位</div>
</div>
<div class="fixed-badge">fixed 角标</div>`,
      css: `.relative-box {
  position: relative;
  height: 120px;
  background: #e0e7ff;
  border: 2px solid #6366f1;
  padding: 16px;
  border-radius: 8px;
}

.absolute-box {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #6366f1;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
}

.fixed-badge {
  position: fixed;
  bottom: 16px;
  right: 16px;
  background: #ef4444;
  color: white;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 13px;
  z-index: 10;
}`,
    },
    quiz: {
      question: '相对其最近已定位祖先元素偏移，应使用哪种定位？',
      options: [
        {
          text: 'position: absolute',
          isCorrect: true,
          steps: [
            '设置 position: absolute',
            '配合 top/right/bottom/left 偏移',
            '参照最近 position 非 static 的祖先',
            '无定位祖先时参照初始包含块',
          ],
        },
        {
          text: 'position: relative',
          isCorrect: false,
          steps: [
            'relative 相对自身原位置偏移',
            'absolute 相对定位祖先偏移',
            '常配合：父 relative + 子 absolute',
          ],
        },
        {
          text: 'position: static',
          isCorrect: false,
          steps: [
            'static 是默认定位，不能偏移',
            '需要 absolute 或 relative 等',
            'absolute 用于相对父元素定位',
          ],
        },
      ],
    },
  },
  {
    id: 'css-pseudo',
    category: 'css',
    title: '伪类与组合选择器',
    example: {
      description: ':hover、:first-child 等伪类，以及后代、子选择器。',
      html: `<ul class="menu">
  <li><a href="#">首页</a></li>
  <li><a href="#">产品</a></li>
  <li><a href="#">关于</a></li>
</ul>
<div class="parent">
  <p>直接子段落</p>
  <div><p>嵌套段落</p></div>
</div>`,
      css: `.menu {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
}

.menu a {
  text-decoration: none;
  color: #334155;
  padding: 8px 16px;
  border-radius: 6px;
}

.menu a:hover {
  background: #3b82f6;
  color: white;
}

.menu li:first-child a {
  font-weight: bold;
}

.parent > p {
  color: #dc2626;
  font-weight: bold;
}`,
    },
    quiz: {
      question: '鼠标悬停时改变链接样式，应使用哪个伪类？',
      options: [
        {
          text: ':hover',
          isCorrect: true,
          steps: [
            '写法：a:hover { color: red; }',
            '鼠标悬停在元素上时生效',
            '常用于按钮、链接交互反馈',
            '还有 :active（点击时）、:focus（聚焦时）',
          ],
        },
        {
          text: ':mouse',
          isCorrect: false,
          steps: [
            'CSS 中没有 :mouse 伪类',
            '悬停效果用 :hover',
            '参考 CSS 伪类列表',
          ],
        },
        {
          text: ':over',
          isCorrect: false,
          steps: [
            '没有 :over 伪类',
            '正确是 :hover',
            '注意伪类用单冒号 :',
          ],
        },
      ],
    },
  },
  {
    id: 'css-flexbox',
    category: 'css',
    title: 'Flexbox 弹性布局',
    example: {
      description: 'display: flex 实现灵活的一维布局。',
      html: `<div class="flex-row">
  <div class="item">项目 1</div>
  <div class="item grow">项目 2（flex:1）</div>
  <div class="item">项目 3</div>
</div>
<div class="flex-center">
  <div class="center-item">水平垂直居中</div>
</div>`,
      css: `.flex-row {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}

.item {
  background: #dbeafe;
  padding: 16px;
  border-radius: 8px;
}

.grow {
  flex: 1;
  background: #bfdbfe;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: #f1f5f9;
  border-radius: 8px;
}

.center-item {
  background: #22c55e;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
}`,
    },
    quiz: {
      question: 'Flex 容器中让子元素水平居中，应设置？',
      options: [
        {
          text: 'justify-content: center',
          isCorrect: true,
          steps: [
            '父元素设置 display: flex',
            '水平居中：justify-content: center',
            '垂直居中：align-items: center',
            '两者配合可实现完全居中',
          ],
        },
        {
          text: 'align-items: center',
          isCorrect: false,
          steps: [
            'align-items 控制交叉轴（通常是垂直方向）',
            '水平居中用 justify-content',
            '主轴方向由 flex-direction 决定',
          ],
        },
        {
          text: 'text-align: center',
          isCorrect: false,
          steps: [
            'text-align 只对行内内容有效',
            'Flex 布局用 justify-content',
            'text-align 不能居中 flex 子项本身',
          ],
        },
      ],
    },
  },
  {
    id: 'css-transition-animation',
    category: 'css',
    title: '过渡与动画',
    example: {
      description: 'transition 平滑过渡与 @keyframes 动画。',
      html: `<div class="transition-box">悬停过渡效果</div>
<div class="animation-box">自动动画</div>`,
      css: `.transition-box {
  width: 200px;
  padding: 20px;
  background: #3b82f6;
  color: white;
  text-align: center;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-bottom: 16px;
}

.transition-box:hover {
  background: #2563eb;
  transform: scale(1.05);
}

.animation-box {
  width: 200px;
  padding: 20px;
  background: #9333ea;
  color: white;
  text-align: center;
  border-radius: 8px;
  animation: bounce 1.5s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}`,
    },
    quiz: {
      question: '让属性变化在 0.3 秒内平滑完成，应使用？',
      options: [
        {
          text: 'transition: all 0.3s;',
          isCorrect: true,
          steps: [
            'transition 语法：属性 时长 缓动函数',
            '示例：transition: all 0.3s ease;',
            'all 表示所有可动画属性都过渡',
            '也可指定单个属性如 background-color 0.3s',
          ],
        },
        {
          text: 'animate: 0.3s;',
          isCorrect: false,
          steps: [
            'animate 不是 transition 的属性名',
            '平滑过渡用 transition',
            '循环keyframes动画用 animation',
          ],
        },
        {
          text: 'smooth: 0.3s;',
          isCorrect: false,
          steps: [
            'CSS 中没有 smooth 属性',
            '过渡效果用 transition',
            '自动播放动画用 @keyframes + animation',
          ],
        },
      ],
    },
  },
  {
    id: 'css-media-query',
    category: 'css',
    title: '媒体查询（响应式）',
    example: {
      description: '使用 @media 在不同屏幕宽度下应用不同样式。',
      html: `<div class="responsive-grid">
  <div class="col">列 1</div>
  <div class="col">列 2</div>
  <div class="col">列 3</div>
</div>
<p class="tip">缩小浏览器窗口查看响应式效果</p>`,
      css: `.responsive-grid {
  display: flex;
  gap: 12px;
}

.col {
  flex: 1;
  background: #dbeafe;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  font-weight: bold;
}

.tip {
  color: #64748b;
  font-size: 14px;
  margin-top: 12px;
}

@media (max-width: 600px) {
  .responsive-grid {
    flex-direction: column;
  }

  .col {
    background: #fef3c7;
  }

  .tip {
    color: #dc2626;
    font-weight: bold;
  }
}`,
    },
    quiz: {
      question: '屏幕宽度 ≤768px 时应用特殊样式，应怎么写？',
      options: [
        {
          text: '@media (max-width: 768px) { ... }',
          isCorrect: true,
          steps: [
            '媒体查询以 @media 开头',
            'max-width 表示最大宽度条件',
            '示例：@media (max-width: 768px) { .nav { display: none; } }',
            '这是响应式布局的核心写法',
          ],
        },
        {
          text: '@screen (width: 768px) { ... }',
          isCorrect: false,
          steps: [
            '没有 @screen 这种标准写法',
            '应使用 @media (max-width: 768px)',
            '还可组合 min-width 做区间查询',
          ],
        },
        {
          text: '@responsive 768px { ... }',
          isCorrect: false,
          steps: [
            '@responsive 不是 CSS 语法',
            '媒体查询用 @media',
            '配合 viewport meta 使用效果更佳',
          ],
        },
      ],
    },
  },
]
