import { cssLessons } from './cssLessons.js'
import { css3Lessons } from './css3Lessons.js'
import { jsLessons } from './jsLessons.js'

export const htmlLessons = [
  {
    id: 'doc-basics',
    category: 'html',
    title: '文档基础',
    example: {
      description: 'HTML5 最小文档结构，包含 DOCTYPE、字符编码和视口设置。',
      code: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的第一个页面</title>
</head>
<body>
  <h1>Hello HTML5</h1>
  <p>这是一个最小的 HTML5 文档。</p>
</body>
</html>`,
    },
    quiz: {
      question: '中文网页必须声明哪种字符编码，才能避免乱码？',
      options: [
        {
          text: '<meta charset="utf-8">',
          isCorrect: true,
          steps: [
            '在 <head> 标签内第一行添加 <meta charset="utf-8">',
            'charset 属性值设为 utf-8，支持中文及绝大多数字符',
            '该声明必须出现在 <head> 中，且尽量靠前',
            '保存文件时编码也选 UTF-8',
          ],
        },
        {
          text: '<meta charset="gb2312">',
          isCorrect: false,
          steps: [
            'gb2312 是旧国标编码，现代网页不推荐',
            '正确写法是 <meta charset="utf-8">',
            'UTF-8 是国际标准，兼容性更好',
          ],
        },
        {
          text: '<encoding utf-8>',
          isCorrect: false,
          steps: [
            '<encoding> 不是合法的 HTML 标签',
            '字符编码应使用 <meta charset="utf-8">',
            '写在 <head> 区域内',
          ],
        },
      ],
    },
  },
  {
    id: 'text-format',
    category: 'html',
    title: '文本与排版',
    example: {
      description: '标题、段落、强调、引用等常用文本标签。',
      code: `<h1>一级标题</h1>
<h2>二级标题</h2>
<p>这是一个<strong>加粗</strong>和<em>斜体</em>的段落。</p>
<p>这里有一段<mark>高亮</mark>文字，以及 H<sub>2</sub>O 和 x<sup>2</sup>。</p>
<blockquote>这是一段引用文字。</blockquote>
<pre><code>const hello = "world";</code></pre>`,
    },
    quiz: {
      question: '要语义化地表示"重要且需要强调"的文本，应优先使用哪个标签？',
      options: [
        {
          text: '<strong>',
          isCorrect: true,
          steps: [
            '用 <strong> 包裹需要强调的文本',
            '例如：<p>这是<strong>重要</strong>内容</p>',
            'screen reader 会识别其语义',
            '仅视觉效果可用 CSS，语义优先 strong',
          ],
        },
        {
          text: '<b>',
          isCorrect: false,
          steps: [
            '<b> 只表示粗体，无语义',
            '强调重要内容应优先 <strong>',
            '样式可用 CSS 的 font-weight: bold',
          ],
        },
        {
          text: '<span style="font-weight:bold">',
          isCorrect: false,
          steps: [
            '行内样式能加粗，但缺少语义',
            '优先 <strong> 表示重要文本',
            '样式交给 CSS 统一管理',
          ],
        },
      ],
    },
  },
  {
    id: 'links-nav',
    category: 'html',
    title: '链接与导航',
    example: {
      description: '超链接与导航区域的写法。',
      code: `<nav>
  <a href="/">首页</a>
  <a href="/about">关于</a>
  <a href="https://www.runoob.com" target="_blank" rel="noopener noreferrer">
    菜鸟教程（新窗口打开）
  </a>
</nav>
<p>访问 <a href="#section1">本页锚点</a> 或发送邮件到
  <a href="mailto:hello@example.com">hello@example.com</a>
</p>`,
    },
    quiz: {
      question: '新窗口打开外链时，推荐同时添加哪个 rel 属性？',
      options: [
        {
          text: 'rel="noopener noreferrer"',
          isCorrect: true,
          steps: [
            '写 <a href="URL" target="_blank" rel="noopener noreferrer">',
            'noopener 防止新页面通过 window.opener 访问原页面',
            'noreferrer 不发送 Referer，提升隐私与安全',
            'target="_blank" 与 rel 属性一起使用',
          ],
        },
        {
          text: 'rel="nofollow"',
          isCorrect: false,
          steps: [
            'nofollow 告诉搜索引擎不跟踪链接',
            '新窗口安全应使用 noopener noreferrer',
            '两者用途不同，不要混淆',
          ],
        },
        {
          text: 'rel="external"',
          isCorrect: false,
          steps: [
            'HTML 标准中没有 rel="external"',
            '新窗口打开用 target="_blank"',
            '安全属性用 rel="noopener noreferrer"',
          ],
        },
      ],
    },
  },
  {
    id: 'images-media',
    category: 'html',
    title: '图片与多媒体',
    example: {
      description: '图片、figure 说明，以及 video/audio 基本用法。',
      code: `<figure>
  <img src="https://via.placeholder.com/320x180" alt="示例图片" width="320" height="180">
  <figcaption>图1：示例图片说明</figcaption>
</figure>

<video width="320" controls poster="https://via.placeholder.com/320x180">
  <source src="movie.mp4" type="video/mp4">
  你的浏览器不支持 video 标签。
</video>

<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  你的浏览器不支持 audio 标签。
</audio>`,
    },
    quiz: {
      question: 'img 标签中，哪个属性对于无障碍访问是必须的？',
      options: [
        {
          text: 'alt',
          isCorrect: true,
          steps: [
            '每个 <img> 都应写 alt 属性',
            '示例：<img src="photo.jpg" alt="一只橘猫">',
            'alt 描述图片内容，供屏幕阅读器使用',
            '纯装饰图可写 alt=""，但不能省略属性',
          ],
        },
        {
          text: 'title',
          isCorrect: false,
          steps: [
            'title 只是悬停提示，不能替代 alt',
            '无障碍必须提供 alt 属性',
            'alt 描述图片，title 是可选补充',
          ],
        },
        {
          text: 'width',
          isCorrect: false,
          steps: [
            'width 控制显示宽度，与无障碍无关',
            '必须写的是 alt 属性',
            '可同时设置 width/height 防止布局抖动',
          ],
        },
      ],
    },
  },
  {
    id: 'lists',
    category: 'html',
    title: '列表',
    example: {
      description: '无序列表、有序列表和描述列表。',
      code: `<h3>无序列表</h3>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<h3>有序列表</h3>
<ol>
  <li>打开编辑器</li>
  <li>编写代码</li>
  <li>在浏览器预览</li>
</ol>

<h3>描述列表</h3>
<dl>
  <dt>HTML</dt>
  <dd>超文本标记语言</dd>
  <dt>CSS</dt>
  <dd>层叠样式表</dd>
</dl>`,
    },
    quiz: {
      question: '要展示"术语 + 解释"的结构，应使用哪组标签？',
      options: [
        {
          text: '<dl> + <dt> + <dd>',
          isCorrect: true,
          steps: [
            '外层用 <dl>（description list）',
            '术语用 <dt>（definition term）',
            '解释用 <dd>（definition description）',
            '示例：<dl><dt>HTML</dt><dd>超文本标记语言</dd></dl>',
          ],
        },
        {
          text: '<ul> + <li>',
          isCorrect: false,
          steps: [
            'ul/li 用于无序列表',
            '术语解释应使用 dl/dt/dd',
            '不要混用语义不同的列表类型',
          ],
        },
        {
          text: '<table> + <tr> + <td>',
          isCorrect: false,
          steps: [
            'table 用于表格数据，不是术语列表',
            '术语解释用 <dl><dt><dd>',
            '非表格内容不要用 table 布局',
          ],
        },
      ],
    },
  },
  {
    id: 'tables',
    category: 'html',
    title: '表格',
    example: {
      description: '表格结构：thead、tbody、th、td，以及跨列合并。',
      code: `<table border="1" cellpadding="8">
  <thead>
    <tr>
      <th>姓名</th>
      <th>科目</th>
      <th>分数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>张三</td>
      <td>HTML</td>
      <td>95</td>
    </tr>
    <tr>
      <td>李四</td>
      <td colspan="2">缺考</td>
    </tr>
  </tbody>
</table>`,
    },
    quiz: {
      question: '表头单元格应使用哪个标签，而不是 td？',
      options: [
        {
          text: '<th>',
          isCorrect: true,
          steps: [
            '表头行中使用 <th> 而非 <td>',
            '示例：<tr><th>姓名</th><th>年龄</th></tr>',
            'th 默认加粗居中，语义表示列/行标题',
            '配合 thead 使用结构更清晰',
          ],
        },
        {
          text: '<thead>',
          isCorrect: false,
          steps: [
            'thead 是表头区域容器，不是单元格',
            '单元格标签是 th（表头）或 td（数据）',
            '结构：<thead><tr><th>...</th></tr></thead>',
          ],
        },
        {
          text: '<header>',
          isCorrect: false,
          steps: [
            'header 是页面语义标签，不是表格标签',
            '表格表头单元格用 <th>',
            '表格区域用 thead 包裹',
          ],
        },
      ],
    },
  },
  {
    id: 'forms-basic',
    category: 'html',
    title: '表单基础',
    example: {
      description: 'form、label、input、textarea、select、button 的基本用法。',
      code: `<form action="/submit" method="post">
  <fieldset>
    <legend>用户信息</legend>

    <label for="username">用户名：</label>
    <input type="text" id="username" name="username" required>
    <br><br>

    <label for="bio">简介：</label><br>
    <textarea id="bio" name="bio" rows="3" cols="30"></textarea>
    <br><br>

    <label for="city">城市：</label>
    <select id="city" name="city">
      <option value="">请选择</option>
      <option value="bj">北京</option>
      <option value="sh">上海</option>
    </select>
    <br><br>

    <button type="submit">提交</button>
    <button type="reset">重置</button>
  </fieldset>
</form>`,
    },
    quiz: {
      question: 'label 的 for 属性应该与哪个属性值对应，才能点击标签聚焦输入框？',
      options: [
        {
          text: 'input 的 id',
          isCorrect: true,
          steps: [
            '给 input 设置唯一 id，如 id="email"',
            'label 写 for="email"，与 id 一致',
            '示例：<label for="email">邮箱</label><input id="email" type="email">',
            '点击 label 文字即可聚焦对应输入框',
          ],
        },
        {
          text: 'input 的 name',
          isCorrect: false,
          steps: [
            'name 用于表单提交时的字段名',
            'label 的 for 对应的是 input 的 id',
            'id 和 for 必须完全一致',
          ],
        },
        {
          text: 'input 的 type',
          isCorrect: false,
          steps: [
            'type 指定输入类型，如 text、email',
            'label 关联靠 id 和 for',
            '两者没有对应关系',
          ],
        },
      ],
    },
  },
  {
    id: 'input-types',
    category: 'html',
    title: 'HTML5 Input 类型',
    example: {
      description: 'HTML5 新增的 input 类型及基础校验。',
      code: `<form>
  <p><label>邮箱：<input type="email" name="email"></label></p>
  <p><label>网址：<input type="url" name="website"></label></p>
  <p><label>数字：<input type="number" name="age" min="1" max="120"></label></p>
  <p><label>日期：<input type="date" name="birthday"></label></p>
  <p><label>时间：<input type="time" name="meet-time"></label></p>
  <p><label>搜索：<input type="search" name="q"></label></p>
  <p><label>颜色：<input type="color" name="theme"></label></p>
  <p><label>文件：<input type="file" name="avatar" accept="image/*"></label></p>
</form>`,
    },
    quiz: {
      question: '要输入邮箱并启用浏览器内置格式校验，input 的 type 应设为？',
      options: [
        {
          text: 'email',
          isCorrect: true,
          steps: [
            '写 <input type="email" name="email">',
            '浏览器会自动校验是否含 @ 等基本格式',
            '配合 required 可强制必填',
            '比 type="text" 语义更明确',
          ],
        },
        {
          text: 'text',
          isCorrect: false,
          steps: [
            'type="text" 不会校验邮箱格式',
            '邮箱字段应使用 type="email"',
            '也可用 pattern 自定义，但 email 更简单',
          ],
        },
        {
          text: 'mail',
          isCorrect: false,
          steps: [
            'HTML 中没有 type="mail"',
            '正确值是 type="email"',
            '参考 HTML5 标准 input 类型列表',
          ],
        },
      ],
    },
  },
  {
    id: 'form-attrs',
    category: 'html',
    title: '表单属性',
    example: {
      description: 'placeholder、required、disabled、readonly、pattern 等常用属性。',
      code: `<form>
  <p>
    <label>用户名（必填）：
      <input type="text" name="user" required placeholder="请输入用户名">
    </label>
  </p>
  <p>
    <label>手机号（正则校验）：
      <input type="tel" name="phone" pattern="1[3-9]\\d{9}" placeholder="11位手机号">
    </label>
  </p>
  <p>
    <label>只读字段：
      <input type="text" name="id" value="10001" readonly>
    </label>
  </p>
  <p>
    <label>禁用字段：
      <input type="text" name="locked" value="不可编辑" disabled>
    </label>
  </p>
</form>`,
    },
    quiz: {
      question: '哪个属性可以在不提交该字段的情况下，让输入框不可编辑但仍随表单提交？',
      options: [
        {
          text: 'readonly',
          isCorrect: true,
          steps: [
            '添加 readonly 属性：<input readonly>',
            '用户无法修改，但值会随表单提交',
            '与 disabled 不同，disabled 字段不会提交',
            '只读展示用 readonly，完全禁用用 disabled',
          ],
        },
        {
          text: 'disabled',
          isCorrect: false,
          steps: [
            'disabled 会禁用字段且不会提交其值',
            '只读但可提交用 readonly',
            'disabled 还会变灰且无法聚焦',
          ],
        },
        {
          text: 'required',
          isCorrect: false,
          steps: [
            'required 表示必填，不限制编辑',
            '不可编辑但可提交用 readonly',
            '两者用途完全不同',
          ],
        },
      ],
    },
  },
  {
    id: 'semantic',
    category: 'html',
    title: 'HTML5 语义化标签',
    example: {
      description: '用语义标签构建清晰的页面结构。',
      code: `<header>
  <h1>我的网站</h1>
  <nav><a href="/">首页</a> <a href="/blog">博客</a></nav>
</header>

<main>
  <article>
    <h2>文章标题</h2>
    <p>发布时间：<time datetime="2026-07-13">2026年7月13日</time></p>
    <p>这是文章正文内容……</p>
  </article>

  <aside>
    <h3>相关推荐</h3>
    <ul><li>推荐1</li><li>推荐2</li></ul>
  </aside>
</main>

<footer>
  <p>&copy; 2026 我的网站</p>
</footer>`,
    },
    quiz: {
      question: '页面主内容区域（全页唯一）应使用哪个标签？',
      options: [
        {
          text: '<main>',
          isCorrect: true,
          steps: [
            '用 <main> 包裹页面核心内容',
            '每个页面只应有一个 main',
            '示例：<main><article>...</article></main>',
            '不要与 header、footer 嵌套混淆',
          ],
        },
        {
          text: '<section>',
          isCorrect: false,
          steps: [
            'section 表示文档中的章节，可有多个',
            '整页主内容区域用 main',
            'main 内可包含多个 section/article',
          ],
        },
        {
          text: '<div id="main">',
          isCorrect: false,
          steps: [
            'div 无语义，不推荐替代 main',
            'HTML5 语义标签是 <main>',
            '语义化有利于 SEO 和无障碍',
          ],
        },
      ],
    },
  },
  {
    id: 'common-attrs',
    category: 'html',
    title: '通用属性与概念',
    example: {
      description: 'id、class、data-*、lang 等通用属性，以及块级/行内元素。',
      code: `<div id="app" class="container" lang="zh-CN">
  <p class="intro highlight" title="悬停提示" data-level="beginner">
    这是一个带通用属性的段落。
  </p>
  <span class="tag">行内元素 span</span>
  <div class="block">块级元素 div</div>
</div>`,
    },
    quiz: {
      question: '要存储自定义数据供 JavaScript 读取，应使用哪种属性？',
      options: [
        {
          text: 'data-* 属性',
          isCorrect: true,
          steps: [
            '以 data- 开头，如 data-id="123"',
            '示例：<div data-user="张三" data-level="1">',
            'JS 中通过 element.dataset.user 读取',
            '不要滥用自定义非标准属性',
          ],
        },
        {
          text: 'custom 属性',
          isCorrect: false,
          steps: [
            'HTML 没有 custom 属性',
            '自定义数据用 data-* 前缀',
            '符合 HTML5 标准且可校验',
          ],
        },
        {
          text: 'id 属性',
          isCorrect: false,
          steps: [
            'id 用于唯一标识元素',
            '存储自定义数据应使用 data-*',
            'id 在页面中必须唯一',
          ],
        },
      ],
    },
  },
  {
    id: 'head-meta',
    category: 'html',
    title: 'Head 常见内容',
    example: {
      description: 'head 中的 meta、link、script 等常见配置。',
      code: `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="HTML 学习示例站点">
  <meta name="keywords" content="HTML,HTML5,学习">
  <title>HTML 学习手册</title>
  <link rel="stylesheet" href="style.css">
  <script src="app.js" defer></script>
</head>`,
    },
    quiz: {
      question: '移动端适配时，viewport meta 标签中 width 应设为什么？',
      options: [
        {
          text: 'device-width',
          isCorrect: true,
          steps: [
            '写 <meta name="viewport" content="width=device-width, initial-scale=1.0">',
            'device-width 让布局宽度等于设备屏幕宽度',
            'initial-scale=1.0 设置初始缩放比例',
            '这是响应式页面的标准配置',
          ],
        },
        {
          text: '1024',
          isCorrect: false,
          steps: [
            '固定像素宽度无法适配各种屏幕',
            '应使用 width=device-width',
            '配合 CSS 媒体查询实现响应式',
          ],
        },
        {
          text: 'auto',
          isCorrect: false,
          steps: [
            'viewport width 不支持 auto 值',
            '正确写法是 device-width',
            '参考 MDN viewport meta 文档',
          ],
        },
      ],
    },
  },
  {
    id: 'entities',
    category: 'html',
    title: '字符实体与其他',
    example: {
      description: '常用 HTML 字符实体、注释和路径写法。',
      code: `<p>空格：&nbsp;&nbsp;小于号：&lt; 大于号：&gt;</p>
<p>版权符号：&copy; 2026 &nbsp; 引号：&quot;Hello&quot;</p>
<p>&&amp; 表示 &amp; 符号本身</p>

<!-- 这是 HTML 注释，不会显示在页面上 -->

<p>
  <a href="about.html">相对路径</a> |
  <a href="https://example.com/page">绝对路径</a>
</p>`,
    },
    quiz: {
      question: '要在页面中显示 "<" 符号，应使用哪个字符实体？',
      options: [
        {
          text: '&lt;',
          isCorrect: true,
          steps: [
            '小于号用 &lt; 表示（less than）',
            '示例：<p>5 &lt; 10</p> 显示为 5 < 10',
            '直接在 HTML 中写 < 可能被解析为标签',
            '大于号对应 &gt;',
          ],
        },
        {
          text: '&lg;',
          isCorrect: false,
          steps: [
            'HTML 中没有 &lg; 实体',
            '小于号是 &lt;',
            '可查 HTML 字符实体参考表',
          ],
        },
        {
          text: '<less>',
          isCorrect: false,
          steps: [
            '<less> 不是合法实体',
            '使用 &lt; 表示小于号',
            '特殊字符应转义避免解析错误',
          ],
        },
      ],
    },
  },
]

export const lessons = [...htmlLessons, ...cssLessons, ...css3Lessons, ...jsLessons]
