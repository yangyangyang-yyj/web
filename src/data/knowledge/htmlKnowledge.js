/** HTML 课程知识点，按 lesson id 索引 */
export const htmlKnowledge = {
  'doc-basics': {
    title: 'HTML5 文档结构',
    intro:
      'HTML 文档由声明、根元素 html、head（元信息）和 body（可见内容）组成。DOCTYPE 告诉浏览器按标准模式解析；charset 和 viewport 是中文网页和移动端的基础配置。',
    tableHeaders: ['部分', '标签/写法', '作用', '要点'],
    phases: [
      {
        name: '最小文档骨架',
        hooks: [
          { composition: 'DOCTYPE', options: '<!DOCTYPE html>', when: '文档第一行', use: '启用 HTML5 标准模式，避免怪异模式' },
          { composition: 'html', options: '<html lang="zh-CN">', when: '根元素', use: 'lang 利于 SEO 和读屏软件发音' },
          { composition: 'head', options: '<head>...</head>', when: '不可见元信息区', use: '放 charset、title、CSS、JS 引用' },
          { composition: 'body', options: '<body>...</body>', when: '可见内容区', use: '所有展示给用户的标签写在这里' },
        ],
      },
      {
        name: 'head 必备三项',
        hooks: [
          { composition: 'charset', options: '<meta charset="utf-8">', when: '字符编码', use: '必须靠前，防止中文乱码' },
          { composition: 'viewport', options: 'width=device-width', when: '移动端视口', use: '响应式页面标配' },
          { composition: 'title', options: '<title>页面标题</title>', when: '标签页标题', use: '影响 SEO 和书签名称' },
        ],
      },
    ],
    tips: [
      '文件保存编码选 UTF-8，与 meta charset 一致。',
      '一个页面只有一个 html、一个 head、一个 body。',
    ],
  },
  'text-format': {
    title: '文本与排版标签',
    intro:
      'HTML 用语义化标签表达文本含义，而不是只靠样式。标题用 h1~h6 建立层级；强调用 strong/em；代码和引用有专门标签。',
    tableHeaders: ['标签', '写法', '语义', '使用场景'],
    phases: [
      {
        name: '标题与段落',
        hooks: [
          { composition: 'h1~h6', options: '<h1>一级标题</h1>', when: '六级标题，h1 最大', use: '每页通常一个 h1，其余逐级递减' },
          { composition: 'p', options: '<p>段落</p>', when: '普通段落', use: '块级元素，上下有默认间距' },
          { composition: 'br', options: '<br>', when: '换行', use: '段内强制换行，无闭合标签' },
        ],
      },
      {
        name: '强调与修饰',
        hooks: [
          { composition: 'strong', options: '<strong>重要</strong>', when: '重要强调', use: '语义强调，默认加粗' },
          { composition: 'em', options: '<em>斜体强调</em>', when: '语气强调', use: '默认斜体，读屏会重读' },
          { composition: 'mark', options: '<mark>高亮</mark>', when: '高亮标记', use: '搜索结果、重点提示' },
          { composition: 'sub/sup', options: 'H<sub>2</sub>O', when: '下标/上标', use: '化学式、数学幂次' },
        ],
      },
      {
        name: '引用与代码',
        hooks: [
          { composition: 'blockquote', options: '<blockquote>引用</blockquote>', when: '块级引用', use: '引述整段文字' },
          { composition: 'code', options: '<code>const x=1</code>', when: '行内代码', use: '配合 pre 展示多行代码' },
          { composition: 'pre', options: '<pre><code>...</code></pre>', when: '预格式化', use: '保留空格和换行' },
        ],
      },
    ],
    tips: ['视觉加粗用 CSS font-weight，语义重要用 strong。', '不要跳级使用标题（h1 后直接 h3）。'],
  },
  'links-nav': {
    title: '链接与导航',
    intro:
      'a 标签创建超链接，href 指定目标。导航区域用 nav 包裹一组链接。外链新窗口打开需加 rel="noopener noreferrer" 防安全风险。',
    tableHeaders: ['概念', '写法', '说明', '场景'],
    phases: [
      {
        name: 'href 类型',
        hooks: [
          { composition: '绝对路径', options: 'href="https://..."', when: '完整 URL', use: '跳转外部网站' },
          { composition: '相对路径', options: 'href="about.html"', when: '站内页面', use: '同站点页面跳转' },
          { composition: '锚点', options: 'href="#section1"', when: '页内跳转', use: '跳到同页 id 位置' },
          { composition: '邮件', options: 'href="mailto:a@b.com"', when: '打开邮件客户端', use: '联系邮箱' },
        ],
      },
      {
        name: '安全与导航',
        hooks: [
          { composition: 'target', options: 'target="_blank"', when: '新窗口打开', use: '必须配合 rel 使用' },
          { composition: 'rel', options: 'noopener noreferrer', when: '安全属性', use: '防 window.opener 劫持和泄露 Referer' },
          { composition: 'nav', options: '<nav><a>...</a></nav>', when: '导航语义', use: '主导航、面包屑链接组' },
        ],
      },
    ],
    tips: ['下载文件用 href="file.pdf" download。', '电话链接：href="tel:10086"。'],
  },
  'images-media': {
    title: '图片与多媒体',
    intro:
      'img 嵌入图片，必须写 alt 做无障碍替代文本。figure/figcaption 表达图片与说明关系。video/audio 提供原生音视频播放。',
    tableHeaders: ['标签', '关键属性', '作用', '要点'],
    phases: [
      {
        name: '图片',
        hooks: [
          { composition: 'img', options: 'src + alt', when: '嵌入图片', use: 'alt 必填，纯装饰可 alt=""' },
          { composition: 'width/height', options: 'width="320"', when: '尺寸', use: '设宽高防布局抖动' },
          { composition: 'figure', options: '<figure><img><figcaption>', when: '图文组合', use: '图片配标题说明' },
        ],
      },
      {
        name: '音视频',
        hooks: [
          { composition: 'video', options: 'controls poster', when: '视频播放', use: 'source 指定多格式' },
          { composition: 'audio', options: 'controls', when: '音频播放', use: 'source 指定 mp3 等' },
          { composition: 'source', options: 'type="video/mp4"', when: '多格式源', use: '浏览器选支持的格式' },
        ],
      },
    ],
    tips: ['图片优先用现代格式 WebP；大图做压缩。', '自动播放视频需 muted 且注意用户体验。'],
  },
  'lists': {
    title: '列表',
    intro: 'HTML 三种列表：无序 ul、有序 ol、描述 dl。列表项都用 li（dl 用 dt/dd）。导航菜单、步骤说明、术语表都常用列表。',
    tableHeaders: ['类型', '标签', '特点', '场景'],
    phases: [
      {
        hooks: [
          { composition: '无序列表', options: '<ul><li></li></ul>', when: '无顺序', use: '导航、特性罗列' },
          { composition: '有序列表', options: '<ol><li></li></ol>', when: '有顺序', use: '操作步骤、排行榜' },
          { composition: '描述列表', options: '<dl><dt><dd>', when: '名-值对', use: '术语解释、元数据' },
        ],
      },
    ],
    tips: ['ol 的 type 可设 1/A/a/I/i。', '嵌套列表：li 内再放 ul/ol。'],
  },
  'tables': {
    title: '表格',
    intro:
      '表格用于展示二维结构化数据。thead 放表头、tbody 放数据行；th 表示表头单元格，td 表示数据单元格。colspan/rowspan 合并单元格。',
    tableHeaders: ['标签', '写法', '作用', '注意'],
    phases: [
      {
        hooks: [
          { composition: 'table', options: '<table>', when: '表格容器', use: '不要用 table 做页面布局' },
          { composition: 'thead/tbody', options: '<thead><tr><th>', when: '结构分区', use: '表头与数据分离' },
          { composition: 'th', options: '<th>列名</th>', when: '表头单元格', use: '默认加粗居中' },
          { composition: 'td', options: '<td>数据</td>', when: '数据单元格', use: '普通数据' },
          { composition: 'colspan', options: 'colspan="2"', when: '横向合并', use: '跨列单元格' },
          { composition: 'rowspan', options: 'rowspan="2"', when: '纵向合并', use: '跨行单元格' },
        ],
      },
    ],
    tips: ['复杂表格加 caption 做表格标题。', '大数据表格考虑分页，不要一次渲染上万行。'],
  },
  'forms-basic': {
    title: '表单基础',
    intro:
      'form 收集用户输入提交到服务器。label 关联控件提升可点击区域；fieldset/legend 分组；button 区分 submit 和 reset。',
    tableHeaders: ['元素', '写法', '作用', '要点'],
    phases: [
      {
        hooks: [
          { composition: 'form', options: 'action + method', when: '表单容器', use: 'action 提交地址，method 常用 post' },
          { composition: 'label', options: 'for="id"', when: '标签', use: 'for 对应 input 的 id' },
          { composition: 'input', options: 'type text', when: '单行输入', use: 'name 是提交字段名' },
          { composition: 'textarea', options: 'rows cols', when: '多行文本', use: '评论、简介' },
          { composition: 'select', options: 'option', when: '下拉选择', use: 'option value 是提交值' },
          { composition: 'button', options: 'type="submit"', when: '按钮', use: 'submit 提交，reset 重置' },
        ],
      },
    ],
    tips: ['placeholder 不是 label 的替代品。', '敏感表单用 method="post"。'],
  },
  'input-types': {
    title: 'HTML5 Input 类型',
    intro:
      'HTML5 为 input 新增多种 type，浏览器可提供专用键盘和内置校验，比纯 text 语义更清晰。',
    tableHeaders: ['type', '示例', '行为', '场景'],
    phases: [
      {
        hooks: [
          { composition: 'email', options: 'type="email"', when: '邮箱格式校验', use: '注册、登录' },
          { composition: 'url', options: 'type="url"', when: '网址校验', use: '个人主页' },
          { composition: 'number', options: 'min max step', when: '数字输入', use: '年龄、数量' },
          { composition: 'date/time', options: 'type="date"', when: '日期时间选择器', use: '生日、预约' },
          { composition: 'search', options: 'type="search"', when: '搜索框样式', use: '站内搜索' },
          { composition: 'file', options: 'accept="image/*"', when: '文件上传', use: '头像、附件' },
          { composition: 'color', options: 'type="color"', when: '取色器', use: '主题色选择' },
        ],
      },
    ],
    tips: ['移动端 type="tel" 弹出数字键盘。', '校验失败时可用 :invalid 伪类做样式。'],
  },
  'form-attrs': {
    title: '表单属性',
    intro:
      '常用属性控制输入行为：required 必填、placeholder 占位提示、pattern 正则校验、readonly 只读、disabled 禁用。',
    tableHeaders: ['属性', '写法', '效果', '区别'],
    phases: [
      {
        hooks: [
          { composition: 'required', options: 'required', when: '必填', use: '提交前浏览器校验' },
          { composition: 'placeholder', options: 'placeholder="提示"', when: '占位文字', use: '输入后消失，不是值' },
          { composition: 'pattern', options: 'pattern="[0-9]{11}"', when: '正则校验', use: '手机号等自定义格式' },
          { composition: 'readonly', options: 'readonly', when: '只读', use: '不可改但会提交' },
          { composition: 'disabled', options: 'disabled', when: '禁用', use: '不可改且不提交' },
        ],
      },
    ],
    tips: ['readonly vs disabled：只读仍提交，禁用不提交。', 'pattern 需配合 title 提示错误原因。'],
  },
  'semantic': {
    title: 'HTML5 语义化',
    intro:
      '语义标签让结构和含义一目了然，利于 SEO、无障碍和团队协作。用合适的标签代替满屏 div。',
    tableHeaders: ['标签', '含义', '位置', '注意'],
    phases: [
      {
        hooks: [
          { composition: 'header', options: '<header>', when: '页头/区块头', use: 'logo、导航，可有多个' },
          { composition: 'nav', options: '<nav>', when: '导航链接组', use: '主导航、目录' },
          { composition: 'main', options: '<main>', when: '主内容', use: '每页唯一' },
          { composition: 'article', options: '<article>', when: '独立文章', use: '博客帖、新闻' },
          { composition: 'section', options: '<section>', when: '文档章节', use: '有标题的内容分组' },
          { composition: 'aside', options: '<aside>', when: '侧边栏', use: '相关推荐、广告' },
          { composition: 'footer', options: '<footer>', when: '页脚', use: '版权、备案' },
        ],
      },
    ],
    tips: ['语义化不排斥 div，无语义包裹时才用 div。', 'article 内可嵌套 section，反之亦可。'],
  },
  'common-attrs': {
    title: '通用属性',
    intro: '几乎所有 HTML 元素都支持的属性：id 唯一标识、class 样式类名、data-* 自定义数据、lang 语言等。',
    tableHeaders: ['属性', '写法', '作用', '要点'],
    phases: [
      {
        hooks: [
          { composition: 'id', options: 'id="唯一名"', when: '唯一标识', use: '锚点、JS 查询，页内唯一' },
          { composition: 'class', options: 'class="a b"', when: '类名', use: '可多个，CSS/JS 选择' },
          { composition: 'data-*', options: 'data-id="1"', when: '自定义数据', use: 'JS 用 dataset 读取' },
          { composition: 'title', options: 'title="提示"', when: '悬停提示', use: '不能替代 img 的 alt' },
          { composition: 'lang', options: 'lang="zh-CN"', when: '语言', use: '影响发音和搜索引擎' },
        ],
      },
    ],
    tips: ['块级元素独占一行（div、p）；行内元素不换行（span、a）。', 'class 可复用，id 不可重复。'],
  },
  'head-meta': {
    title: 'Head 元信息',
    intro: 'head 中配置页面元数据：编码、视口、SEO 描述、样式表和脚本引用等，不直接显示在页面上。',
    tableHeaders: ['标签', '写法', '作用', '说明'],
    phases: [
      {
        hooks: [
          { composition: 'meta charset', options: 'utf-8', when: '字符编码', use: '放 head 最前' },
          { composition: 'meta viewport', options: 'device-width', when: '移动端适配', use: '响应式必备' },
          { composition: 'meta description', options: 'content="描述"', when: 'SEO 摘要', use: '搜索结果展示' },
          { composition: 'link', options: 'rel="stylesheet"', when: '引入 CSS', use: 'href 指向 .css' },
          { composition: 'script', options: 'src defer', when: '引入 JS', use: 'defer 延迟到 HTML 解析后执行' },
        ],
      },
    ],
    tips: ['script 放 body 底或 head+defer，避免阻塞渲染。', 'keywords meta 对 SEO 影响已很小。'],
  },
  'entities': {
    title: '字符实体与路径',
    intro:
      'HTML 中用字符实体显示特殊符号；注释用 <!-- -->；路径分相对路径和绝对路径。',
    tableHeaders: ['实体', '写法', '显示', '原因'],
    phases: [
      {
        hooks: [
          { composition: '小于号', options: '&lt;', when: '<', use: '避免被解析为标签' },
          { composition: '大于号', options: '&gt;', when: '>', use: '同上' },
          { composition: '和号', options: '&amp;', when: '&', use: '实体自身转义' },
          { composition: '空格', options: '&nbsp;', when: '不换行空格', use: '连续空格' },
          { composition: '版权', options: '&copy;', when: '©', use: '页脚常用' },
        ],
      },
    ],
    syntax: {
      title: '路径写法',
      intro: '引用站内资源和外部资源的两种路径方式。',
      blocks: [
        {
          title: '相对 vs 绝对',
          code: `<!-- 相对：同级目录 -->
<a href="about.html">关于</a>
<a href="css/style.css">样式</a>
<a href="../index.html">上一级</a>

<!-- 绝对：完整 URL -->
<a href="https://example.com/page">外链</a>
<img src="https://cdn.example.com/logo.png">`,
        },
      ],
    },
    tips: ['HTML 注释 <!-- --> 不会显示在页面。', '路径区分大小写（Linux 服务器）。'],
  },
}
