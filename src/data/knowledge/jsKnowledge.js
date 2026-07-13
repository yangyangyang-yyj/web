/** JavaScript 课程知识点，按 lesson id 索引 */
export const jsKnowledge = {
  'js-intro': {
    title: 'JavaScript 简介',
    intro:
      'JavaScript（简称 JS）是运行在浏览器中的脚本语言，负责网页的交互与逻辑。它与 HTML（结构）、CSS（样式）并称 Web 前端三大基础技术。现代 JS 也可通过 Node.js 在服务端运行。',
    tableHeaders: ['概念', '说明', '作用', '示例场景'],
    phases: [
      {
        name: '三大技术分工',
        hooks: [
          { composition: 'HTML', options: '超文本标记语言', when: '页面结构', use: '标题、段落、表单、图片等骨架' },
          { composition: 'CSS', options: '层叠样式表', when: '视觉呈现', use: '颜色、布局、动画、响应式' },
          { composition: 'JavaScript', options: '脚本语言', when: '行为与逻辑', use: '点击响应、数据请求、动态渲染' },
        ],
      },
      {
        name: 'JS 能做什么',
        hooks: [
          { composition: 'DOM 操作', options: 'document.querySelector', when: '改页面内容', use: '增删节点、改文字和样式' },
          { composition: '事件响应', options: 'addEventListener', when: '用户交互', use: '点击、输入、滚动、键盘' },
          { composition: '数据请求', options: 'fetch / axios', when: '与后端通信', use: '登录、列表、图表数据' },
          { composition: '框架基础', options: 'Vue / React', when: '工程化开发', use: '组件化、状态管理、路由' },
        ],
      },
    ],
    tips: [
      'JS 代码写在 <script> 标签中，或外部 .js 文件通过 src 引入。',
      '推荐把 script 放在 body 末尾，确保 DOM 已加载。',
      '浏览器控制台（F12）是调试 JS 的第一工具。',
    ],
  },
  'js-output': {
    title: 'JavaScript 输出方式',
    intro:
      '调试和展示结果有多种渠道：写入页面、输出到控制台、弹窗提示。开发中 console.log 最常用；面向用户的信息用 DOM 更新；alert 会阻塞页面，生产环境少用。',
    tableHeaders: ['方法', '写法', '输出位置', '适用场景'],
    phases: [
      {
        name: '三种常用输出',
        hooks: [
          { composition: 'innerHTML', options: 'el.innerHTML = "<b>Hi</b>"', when: '写入 HTML 元素', use: '可渲染标签，注意 XSS 风险' },
          { composition: 'textContent', options: 'el.textContent = "Hi"', when: '纯文本写入', use: '安全，不解析 HTML 标签' },
          { composition: 'console.log', options: 'console.log(data)', when: '开发者工具控制台', use: '调试变量、流程、接口返回' },
          { composition: 'alert', options: 'alert("提示")', when: '模态弹窗', use: '简单提示，会阻塞后续代码' },
        ],
      },
      {
        name: '其他 console 方法',
        hooks: [
          { composition: 'console.warn', options: 'console.warn(msg)', when: '黄色警告', use: '标记潜在问题' },
          { composition: 'console.error', options: 'console.error(err)', when: '红色错误', use: '捕获异常信息' },
          { composition: 'console.table', options: 'console.table(arr)', when: '表格展示', use: '数组/对象结构化查看' },
        ],
      },
    ],
    syntax: {
      title: '页面写入 vs 控制台',
      blocks: [
        {
          title: '修改已有元素',
          code: `const p = document.getElementById('output');
p.textContent = '纯文本，安全';
p.innerHTML = '<strong>可加标签</strong>';

console.log('调试信息', { time: Date.now() });`,
        },
      ],
    },
    tips: [
      'document.write() 会覆盖整个文档，动态更新页面不要用。',
      '用户输入内容写入 innerHTML 前要做转义，防 XSS。',
      '生产环境去掉调试用的 console.log。',
    ],
  },
  'js-variables': {
    title: '变量与数据类型',
    intro:
      '变量用于存储数据。现代 JS 用 let（可变）和 const（常量）声明，避免 var 的作用域问题。JS 是动态类型语言，同一变量可存不同类型，但开发中应保持类型语义清晰。',
    tableHeaders: ['类型/关键字', '示例', '特点', '注意点'],
    phases: [
      {
        name: '声明方式',
        hooks: [
          { composition: 'const', options: 'const PI = 3.14', when: '不可重新赋值', use: '默认首选，对象/数组内容仍可改' },
          { composition: 'let', options: 'let count = 0', when: '需要重新赋值', use: '块级作用域，循环计数器等' },
          { composition: 'var', options: 'var x = 1', when: '旧写法', use: '函数作用域，存在变量提升，新项目避免' },
        ],
      },
      {
        name: '基本类型（7 种）',
        hooks: [
          { composition: 'string', options: '"hello"', when: '字符串', use: '文本、模板字符串' },
          { composition: 'number', options: '42, 3.14, NaN', when: '数字', use: '整数、浮点、Infinity' },
          { composition: 'boolean', options: 'true / false', when: '布尔', use: '条件判断' },
          { composition: 'undefined', options: 'let a; // undefined', when: '未赋值', use: '声明后未初始化' },
          { composition: 'null', options: 'let b = null', when: '空值', use: '主动表示「无对象」' },
          { composition: 'symbol', options: 'Symbol("id")', when: '唯一标识', use: '对象私有属性键' },
          { composition: 'bigint', options: '100n', when: '大整数', use: '超出 Number 安全范围' },
        ],
      },
      {
        name: '引用类型',
        hooks: [
          { composition: 'object', options: '{ name: "张三" }', when: '键值集合', use: '配置、实体数据' },
          { composition: 'array', options: '[1, 2, 3]', when: '有序列表', use: '列表、集合操作' },
          { composition: 'function', options: 'function fn() {}', when: '可调用对象', use: '逻辑封装' },
        ],
      },
    ],
    syntax: {
      title: '类型检测',
      blocks: [
        {
          title: 'typeof 与判断技巧',
          code: `typeof "abc"      // "string"
typeof 42         // "number"
typeof true       // "boolean"
typeof undefined  // "undefined"
typeof null       // "object"（历史遗留）
Array.isArray([]) // true`,
        },
      ],
    },
    tips: [
      '优先 const，只有需要重新赋值才用 let。',
      '变量命名用 camelCase：userName、isActive。',
      '比较 null 用 === null，不要依赖 typeof。',
    ],
  },
  'js-operators': {
    title: '运算符',
    intro:
      '运算符用于计算和比较。算术运算符处理数值；比较运算符判断大小关系；逻辑运算符组合条件。特别注意 == 与 === 的区别，以及 + 对字符串的拼接行为。',
    tableHeaders: ['类别', '运算符', '含义', '示例'],
    phases: [
      {
        name: '算术运算符',
        hooks: [
          { composition: '+ - * /', options: '加减乘除', when: '数值运算', use: '10 + 3 → 13' },
          { composition: '%', options: '取余', when: '模运算', use: '10 % 3 → 1，判断奇偶' },
          { composition: '**', options: '幂运算', when: 'ES7', use: '2 ** 3 → 8' },
          { composition: '++ / --', options: '自增自减', when: '计数器', use: 'i++ 先使用后加 1' },
        ],
      },
      {
        name: '比较运算符',
        hooks: [
          { composition: '===', options: '严格相等', when: '值和类型都相等', use: '5 === "5" → false，推荐' },
          { composition: '!==', options: '严格不等', when: '与 === 相反', use: '避免隐式转换' },
          { composition: '==', options: '宽松相等', when: '会类型转换', use: '0 == false → true，少用' },
          { composition: '>, <, >=, <=', options: '大小比较', when: '数值/字符串', use: '字符串按字典序' },
        ],
      },
      {
        name: '逻辑运算符',
        hooks: [
          { composition: '&&', options: '逻辑与', when: '全真才真', use: '条件链式判断' },
          { composition: '||', options: '逻辑或', when: '有真即真', use: '默认值：name || "匿名"' },
          { composition: '!', options: '逻辑非', when: '取反', use: '!isLogin' },
          { composition: '??', options: '空值合并', when: 'null/undefined', use: 'value ?? "默认"' },
          { composition: '?:', options: '三元运算符', when: '简写 if', use: 'score >= 60 ? "及格" : "不及格"' },
        ],
      },
    ],
    tips: [
      '始终优先 === 和 !==，避免隐式类型转换陷阱。',
      '字符串 + 数字会把数字转成字符串："1" + 2 → "12"。',
      '?? 只处理 null/undefined，|| 会把 0、"" 也当假值。',
    ],
  },
  'js-condition': {
    title: '条件语句',
    intro:
      '条件语句让程序根据布尔表达式的结果走不同分支。if...else 适合区间和复杂逻辑；switch 适合固定值的等值匹配；三元运算符适合简单二选一赋值。',
    tableHeaders: ['语句', '语法结构', '适用场景', '注意点'],
    phases: [
      {
        name: 'if 系列',
        hooks: [
          { composition: 'if', options: 'if (条件) { }', when: '单分支', use: '条件为真时执行' },
          { composition: 'if...else', options: 'if () {} else {}', when: '二选一', use: '互斥逻辑' },
          { composition: 'else if', options: 'if () {} else if () {}', when: '多分支', use: '成绩等级、权限判断' },
        ],
      },
      {
        name: 'switch 与三元',
        hooks: [
          { composition: 'switch', options: 'switch(x) { case 1: break; }', when: '等值匹配', use: '菜单选项、状态码' },
          { composition: 'default', options: 'default: ...', when: '无匹配时', use: '兜底分支' },
          { composition: '三元', options: 'a ? b : c', when: '简单赋值', use: 'const label = ok ? "是" : "否"' },
        ],
      },
    ],
    syntax: {
      title: '典型写法',
      blocks: [
        {
          title: 'if...else if 区间判断',
          code: `if (score >= 90) {
  grade = '优秀';
} else if (score >= 60) {
  grade = '及格';
} else {
  grade = '不及格';
}`,
        },
        {
          title: 'switch 固定值',
          code: `switch (day) {
  case 1: return '周一';
  case 2: return '周二';
  default: return '其他';
}`,
        },
      ],
    },
    tips: [
      'switch 每个 case 末尾通常要 break，否则会继续执行下一个 case。',
      '复杂条件先算成布尔变量，提高可读性：const isValid = age >= 18 && hasId。',
      '避免过深嵌套，超过 3 层考虑提前 return 或查表法。',
    ],
  },
  'js-loop': {
    title: '循环',
    intro:
      '循环用于重复执行代码。for 适合已知次数；while 适合条件驱动；for...of 遍历可迭代对象；for...in 遍历对象键。数组遍历现代写法优先 for...of 或数组方法。',
    tableHeaders: ['循环', '语法', '适用场景', '注意点'],
    phases: [
      {
        name: '传统循环',
        hooks: [
          { composition: 'for', options: 'for (let i=0; i<n; i++)', when: '已知次数', use: '下标遍历、固定次数' },
          { composition: 'while', options: 'while (条件) { }', when: '先判断后执行', use: '不确定次数、读入直到结束' },
          { composition: 'do...while', options: 'do { } while (条件)', when: '至少执行一次', use: '菜单循环、重试逻辑' },
        ],
      },
      {
        name: '遍历语法',
        hooks: [
          { composition: 'for...of', options: 'for (const x of arr)', when: '可迭代对象', use: '数组、字符串、Map、Set' },
          { composition: 'for...in', options: 'for (const k in obj)', when: '对象键名', use: '普通对象属性，不用于数组' },
          { composition: 'break', options: 'break', when: '提前退出', use: '找到目标后跳出循环' },
          { composition: 'continue', options: 'continue', when: '跳过本次', use: '过滤某些元素继续下一轮' },
        ],
      },
    ],
    syntax: {
      title: '数组遍历对比',
      blocks: [
        {
          title: 'for / for...of / 方法',
          code: `// 需要下标
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

// 只要值
for (const item of arr) {
  console.log(item);
}

// 函数式
arr.forEach((item, i) => console.log(i, item));`,
        },
      ],
    },
    tips: [
      '遍历数组不要用 for...in，会遍历到额外属性且顺序不保证。',
      '循环中修改外部变量时注意闭包，用 let 而非 var。',
      '大数据量考虑 map/filter/reduce，语义更清晰。',
    ],
  },
  'js-function': {
    title: '函数',
    intro:
      '函数是封装可复用逻辑的代码块，可接收参数并返回结果。JS 中函数是一等公民，可赋值给变量、作为参数传递。现代写法包括函数声明、函数表达式和箭头函数。',
    tableHeaders: ['写法', '语法', '特点', '使用建议'],
    phases: [
      {
        name: '定义方式',
        hooks: [
          { composition: '函数声明', options: 'function add(a, b) { return a+b }', when: '具名函数', use: '会提升，可在声明前调用' },
          { composition: '函数表达式', options: 'const fn = function() {}', when: '赋值给变量', use: '不会提升' },
          { composition: '箭头函数', options: 'const fn = (a, b) => a + b', when: '简洁写法', use: '无自己的 this，适合回调' },
        ],
      },
      {
        name: '参数与返回值',
        hooks: [
          { composition: '形参/实参', options: 'function greet(name)', when: '调用时传值', use: 'name 是形参，调用时传入实参' },
          { composition: '默认参数', options: 'function fn(x = 0)', when: '缺省值', use: '未传参时用默认值' },
          { composition: 'return', options: 'return 值', when: '返回结果', use: '执行后函数结束，无 return 返回 undefined' },
          { composition: '剩余参数', options: 'function fn(...args)', when: '不定参数', use: 'args 是真数组' },
        ],
      },
    ],
    syntax: {
      title: '三种定义对比',
      blocks: [
        {
          title: '声明 / 表达式 / 箭头',
          code: `function add(a, b) { return a + b; }

const multiply = function(a, b) { return a * b; };

const divide = (a, b) => a / b;

// 箭头函数简写
const double = n => n * 2;
const log = () => console.log('hi');`,
        },
      ],
    },
    tips: [
      '回调、数组方法里优先箭头函数，避免 this 指向混乱。',
      '函数只做一件事，命名用动词：getUser、formatDate。',
      '纯函数（无副作用、同输入同输出）更易测试和复用。',
    ],
  },
  'js-array': {
    title: '数组',
    intro:
      '数组是有序的数据集合，用方括号创建，下标从 0 开始。JS 数组是动态的，长度可变。现代开发大量依赖 map、filter、reduce 等不改变原数组（部分方法除外）的高阶方法。',
    tableHeaders: ['方法/操作', '写法', '作用', '是否改原数组'],
    phases: [
      {
        name: '基础操作',
        hooks: [
          { composition: '创建', options: 'const arr = [1, 2, 3]', when: '字面量', use: '最常用' },
          { composition: '访问', options: 'arr[0]', when: '下标', use: '第一个元素，越界得 undefined' },
          { composition: 'length', options: 'arr.length', when: '长度', use: '末尾追加后自动更新' },
          { composition: 'push / pop', options: 'arr.push(x) / arr.pop()', when: '末尾增删', use: '栈操作' },
          { composition: 'unshift / shift', options: 'arr.unshift(x) / arr.shift()', when: '开头增删', use: '队列操作' },
        ],
      },
      {
        name: '遍历与转换',
        hooks: [
          { composition: 'forEach', options: 'arr.forEach(fn)', when: '逐项执行', use: '无返回值，副作用操作' },
          { composition: 'map', options: 'arr.map(fn)', when: '映射新数组', use: '格式转换、提取字段' },
          { composition: 'filter', options: 'arr.filter(fn)', when: '筛选', use: '条件过滤元素' },
          { composition: 'reduce', options: 'arr.reduce(fn, init)', when: '归并', use: '求和、分组、扁平化' },
          { composition: 'find / some', options: 'arr.find(fn)', when: '查找', use: '找第一个匹配项或判断存在' },
        ],
      },
    ],
    syntax: {
      title: '链式调用',
      blocks: [
        {
          title: 'map + filter + join',
          code: `const nums = [1, 2, 3, 4, 5];

const result = nums
  .filter(n => n % 2 === 0)  // [2, 4]
  .map(n => n * 10)          // [20, 40]
  .join(', ');               // "20, 40"`,
        },
      ],
    },
    tips: [
      'map/filter 返回新数组，不修改原数组；sort/reverse 会改原数组。',
      '判断空数组：arr.length === 0，不要用 arr == false。',
      '解构取首项：const [first, ...rest] = arr。',
    ],
  },
  'js-object': {
    title: '对象',
    intro:
      '对象是由键值对组成的集合，用于描述实体数据。属性值可以是任意类型，包括函数（称为方法）。访问属性用点语法或方括号；解构可快速提取多个属性。',
    tableHeaders: ['操作', '写法', '说明', '场景'],
    phases: [
      {
        name: '创建与访问',
        hooks: [
          { composition: '字面量', options: 'const user = { name: "李四" }', when: '创建对象', use: '最常用' },
          { composition: '点访问', options: 'user.name', when: '已知属性名', use: '简洁直观' },
          { composition: '方括号', options: 'user["name"]', when: '动态键名', use: 'user[key] 键名在变量中' },
          { composition: '新增/修改', options: 'user.age = 28', when: '动态属性', use: '不存在则新增' },
          { composition: '删除', options: 'delete user.age', when: '移除属性', use: '少用，可用解构排除' },
        ],
      },
      {
        name: '方法与遍历',
        hooks: [
          { composition: '方法', options: 'greet() { return this.name }', when: '对象内函数', use: 'this 指向当前对象' },
          { composition: 'Object.keys', options: 'Object.keys(obj)', when: '所有键名', use: '返回字符串数组' },
          { composition: 'Object.values', options: 'Object.values(obj)', when: '所有值', use: '列表展示' },
          { composition: '解构', options: 'const { name, age } = user', when: '提取属性', use: '函数参数、赋值简写' },
        ],
      },
    ],
    syntax: {
      title: '对象解构与展开',
      blocks: [
        {
          title: '解构 + 合并',
          code: `const user = { name: '李四', age: 28 };
const { name, age } = user;

const updated = { ...user, age: 29, city: '北京' };
// { name: '李四', age: 29, city: '北京' }`,
        },
      ],
    },
    tips: [
      '对象属性名可加引号：{ "full-name": "张三" }，访问用方括号。',
      '判断属性存在：\'name\' in obj 或 Object.hasOwn(obj, \'name\')。',
      '浅拷贝用展开运算符 {...obj}，深拷贝需 structuredClone 或库。',
    ],
  },
  'js-string': {
    title: '字符串',
    intro:
      '字符串用于表示文本，可用单引号、双引号或反引号创建。模板字符串（反引号）支持换行和嵌入表达式。字符串是不可变的，所有「修改」方法都返回新字符串。',
    tableHeaders: ['方法/语法', '写法', '作用', '返回值'],
    phases: [
      {
        name: '创建与模板',
        hooks: [
          { composition: '普通字符串', options: "'hello' 或 \"hello\"", when: '固定文本', use: '无变量插值' },
          { composition: '模板字符串', options: '`你好，${name}`', when: '嵌入变量', use: '支持多行，推荐' },
          { composition: '拼接', options: "'a' + 'b'", when: '旧式拼接', use: '简单场景可用，复杂用模板字符串' },
        ],
      },
      {
        name: '常用方法',
        hooks: [
          { composition: 'length', options: 'str.length', when: '字符数', use: '注意 emoji 可能占 2 个码元' },
          { composition: 'trim', options: 'str.trim()', when: '去首尾空白', use: '表单输入清洗' },
          { composition: 'includes', options: 'str.includes("abc")', when: '是否包含', use: '搜索子串' },
          { composition: 'split / join', options: 'str.split(",")', when: '拆分/合并', use: 'CSV、标签解析' },
          { composition: 'slice', options: 'str.slice(0, 3)', when: '截取', use: '不改变原串' },
          { composition: 'toUpperCase', options: 'str.toUpperCase()', when: '大小写转换', use: '比较前统一大小写' },
        ],
      },
    ],
    syntax: {
      title: '模板字符串',
      blocks: [
        {
          title: '变量与表达式',
          code: `const name = '小明';
const score = 95;

const msg = \`你好，\${name}！
你的分数是 \${score}，\${score >= 60 ? '及格' : '不及格'}。\`;`,
        },
      ],
    },
    tips: [
      '用户输入用 trim() 去空格再判断空字符串。',
      '比较字符串大小写不敏感：a.toLowerCase() === b.toLowerCase()。',
      'HTML 拼接前转义特殊字符，或改用 textContent。',
    ],
  },
  'js-dom': {
    title: 'DOM 操作',
    intro:
      'DOM（文档对象模型）是浏览器将 HTML 解析成的树形对象结构。JavaScript 通过 DOM API 查找、创建、修改、删除节点，实现页面动态更新。这是原生 JS 操作页面的核心能力。',
    tableHeaders: ['API', '写法', '作用', '注意点'],
    phases: [
      {
        name: '查找元素',
        hooks: [
          { composition: 'getElementById', options: 'document.getElementById("id")', when: '按 id', use: '最快，id 应唯一' },
          { composition: 'querySelector', options: 'document.querySelector(".btn")', when: 'CSS 选择器', use: '返回第一个匹配' },
          { composition: 'querySelectorAll', options: 'document.querySelectorAll("li")', when: '多个元素', use: '返回 NodeList，可 forEach' },
        ],
      },
      {
        name: '修改与创建',
        hooks: [
          { composition: 'textContent', options: 'el.textContent = "文字"', when: '纯文本', use: '安全，不解析 HTML' },
          { composition: 'innerHTML', options: 'el.innerHTML = "<b>粗体</b>"', when: 'HTML 内容', use: '注意 XSS' },
          { composition: 'style', options: 'el.style.color = "red"', when: '行内样式', use: '改 class 更利于维护' },
          { composition: 'classList', options: 'el.classList.add("active")', when: '类名切换', use: 'add/remove/toggle' },
          { composition: 'createElement', options: 'document.createElement("li")', when: '创建节点', use: '配合 appendChild 插入' },
          { composition: 'appendChild', options: 'parent.appendChild(child)', when: '追加子节点', use: '挂到父元素末尾' },
        ],
      },
    ],
    syntax: {
      title: '动态添加列表项',
      blocks: [
        {
          title: 'createElement 完整流程',
          code: `const li = document.createElement('li');
li.textContent = '新待办';
li.classList.add('todo-item');
document.getElementById('list').appendChild(li);`,
        },
      ],
    },
    tips: [
      '批量更新列表时，先 DocumentFragment 再一次性 append，减少重排。',
      '样式优先改 class，把规则写在 CSS 里。',
      'querySelector 找不到返回 null，操作前先判空。',
    ],
  },
  'js-event': {
    title: '事件',
    intro:
      '事件是用户或浏览器触发的动作，如点击、输入、滚动、键盘按下。JS 通过事件监听函数响应这些动作。理解事件流（冒泡/捕获）和 event 对象，是写好交互的基础。',
    tableHeaders: ['概念', '写法/值', '说明', '场景'],
    phases: [
      {
        name: '绑定方式',
        hooks: [
          { composition: 'addEventListener', options: 'el.addEventListener("click", fn)', when: '推荐方式', use: '可绑定多个，可控制冒泡' },
          { composition: 'removeEventListener', options: 'el.removeEventListener("click", fn)', when: '解绑', use: '传入同一函数引用' },
          { composition: 'onclick 属性', options: 'btn.onclick = fn', when: '旧式', use: '会覆盖，不推荐' },
        ],
      },
      {
        name: '常用事件类型',
        hooks: [
          { composition: 'click', options: '"click"', when: '鼠标点击', use: '按钮、链接' },
          { composition: 'input', options: '"input"', when: '输入变化', use: '搜索框实时过滤' },
          { composition: 'submit', options: '"submit"', when: '表单提交', use: '需 e.preventDefault() 阻止刷新' },
          { composition: 'keydown', options: '"keydown"', when: '键盘按下', use: '快捷键、回车提交' },
          { composition: 'load', options: '"load"', when: '资源加载完', use: '图片、window.onload' },
        ],
      },
      {
        name: 'event 对象',
        hooks: [
          { composition: 'e.target', options: '事件触发元素', when: '事件委托', use: '判断实际点击了谁' },
          { composition: 'e.preventDefault', options: '阻止默认行为', when: '表单/链接', use: '阻止跳转或提交' },
          { composition: 'e.stopPropagation', options: '阻止冒泡', when: '嵌套元素', use: '父级不会收到事件' },
        ],
      },
    ],
    syntax: {
      title: '事件委托',
      blocks: [
        {
          title: '父元素统一监听',
          code: `list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('done');
  }
});`,
        },
      ],
    },
    tips: [
      '动态添加的子元素，用事件委托绑定在父元素上更省事。',
      '匿名函数无法 removeEventListener，需保存函数引用。',
      '移动端注意 touch 事件与 300ms 延迟（现代浏览器已优化）。',
    ],
  },
  'js-json': {
    title: 'JSON',
    intro:
      'JSON（JavaScript Object Notation）是轻量级数据交换格式，与语言无关。前端与后端、localStorage 存储都常用 JSON 字符串。JS 内置 JSON.stringify 和 JSON.parse 完成对象与字符串互转。',
    tableHeaders: ['方法', '写法', '方向', '注意点'],
    phases: [
      {
        name: '序列化与反序列化',
        hooks: [
          { composition: 'JSON.stringify', options: 'JSON.stringify(obj)', when: '对象 → 字符串', use: '发请求、存 localStorage' },
          { composition: 'JSON.parse', options: 'JSON.parse(str)', when: '字符串 → 对象', use: '读接口响应、读缓存' },
          { composition: '格式化', options: 'JSON.stringify(obj, null, 2)', when: '缩进美化', use: '调试展示' },
        ],
      },
      {
        name: 'JSON 支持的数据类型',
        hooks: [
          { composition: '支持', options: 'string, number, boolean, null, object, array', when: '合法 JSON 值', use: '键名必须用双引号' },
          { composition: '不支持', options: 'undefined, function, Symbol', when: '会被忽略或报错', use: 'Date 需先转 ISO 字符串' },
        ],
      },
    ],
    syntax: {
      title: '与 localStorage 配合',
      blocks: [
        {
          title: '存取对象',
          code: `const user = { name: '王五', age: 30 };

// 存储
localStorage.setItem('user', JSON.stringify(user));

// 读取
const saved = JSON.parse(localStorage.getItem('user') || '{}');`,
        },
      ],
    },
    tips: [
      'JSON.parse 非法字符串会抛错，用 try/catch 包裹。',
      '接口返回已是对象时（fetch + res.json()）不要再 parse。',
      '循环引用的对象无法 stringify，会报错。',
    ],
  },
  'js-async': {
    title: '异步编程',
    intro:
      'JavaScript 是单线程的，耗时操作（网络请求、定时器）不会阻塞主线程，而是通过回调、Promise、async/await 异步处理。理解异步是写现代前端的关键。',
    flow: '同步代码 → 遇到异步任务（放入任务队列）→ 继续执行后续同步代码 → 异步完成后执行回调 / 恢复 await',
    flowLabel: '事件循环简图',
    tableHeaders: ['机制', '写法', '说明', '使用场景'],
    phases: [
      {
        name: 'Promise',
        hooks: [
          { composition: 'new Promise', options: 'new Promise((resolve, reject) => {})', when: '封装异步', use: '自己包装定时器、请求' },
          { composition: 'then', options: 'promise.then(res => {})', when: '成功回调', use: '链式处理结果' },
          { composition: 'catch', options: 'promise.catch(err => {})', when: '失败捕获', use: '统一错误处理' },
          { composition: 'finally', options: 'promise.finally(() => {})', when: '无论成败', use: '关闭 loading' },
        ],
      },
      {
        name: 'async / await',
        hooks: [
          { composition: 'async', options: 'async function load() {}', when: '声明异步函数', use: '函数必定返回 Promise' },
          { composition: 'await', options: 'const data = await fetchData()', when: '等待 Promise', use: '写法像同步，需在 async 内' },
          { composition: 'try/catch', options: 'try { await fn() } catch(e) {}', when: '错误处理', use: '替代 .catch' },
        ],
      },
      {
        name: '常用 API',
        hooks: [
          { composition: 'setTimeout', options: 'setTimeout(fn, 1000)', when: '延迟执行', use: '防抖、轮询' },
          { composition: 'fetch', options: 'fetch(url).then(r => r.json())', when: '网络请求', use: '现代浏览器内置' },
          { composition: 'Promise.all', options: 'Promise.all([p1, p2])', when: '并行等待', use: '多个请求同时完成' },
        ],
      },
    ],
    syntax: {
      title: 'async/await 请求示例',
      blocks: [
        {
          title: 'fetch + await',
          code: `async function loadUser() {
  try {
    const res = await fetch('/api/user');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('请求失败', err);
  }
}`,
        },
      ],
    },
    tips: [
      'await 会暂停当前 async 函数，但不会阻塞整个页面。',
      '多个独立请求用 Promise.all 并行，比逐个 await 更快。',
      '不要忘记 catch，未处理的 Promise 拒绝会在控制台报错。',
    ],
  },
  'js-es6': {
    title: 'ES6+ 新特性',
    intro:
      'ES6（ECMAScript 2015）及后续版本大幅改善了 JS 语法：let/const、箭头函数、解构、展开、模块化等。现代框架和工程化代码都建立在 ES6+ 之上，是面试和实战的必备基础。',
    tableHeaders: ['特性', '语法', '作用', '示例'],
    phases: [
      {
        name: '语法糖',
        hooks: [
          { composition: 'let / const', options: 'const x = 1', when: '块级作用域', use: '替代 var' },
          { composition: '箭头函数', options: '(a, b) => a + b', when: '简洁函数', use: '回调、不绑定 this' },
          { composition: '模板字符串', options: '`${name}`', when: '字符串插值', use: '多行文本' },
          { composition: '默认参数', options: 'function fn(x = 0)', when: '参数默认值', use: '减少 if 判断' },
        ],
      },
      {
        name: '解构与展开',
        hooks: [
          { composition: '数组解构', options: 'const [a, b] = arr', when: '提取元素', use: '交换变量、取首尾' },
          { composition: '对象解构', options: 'const { name } = user', when: '提取属性', use: '函数参数、props' },
          { composition: '展开数组', options: '[...arr1, ...arr2]', when: '合并/拷贝', use: '不修改原数组' },
          { composition: '展开对象', options: '{ ...obj, key: val }', when: '浅拷贝合并', use: '更新不可变状态' },
        ],
      },
      {
        name: '模块与其他',
        hooks: [
          { composition: 'import / export', options: 'export const fn = () => {}', when: '模块化', use: 'Vite 项目默认 ESM' },
          { composition: '可选链', options: 'user?.address?.city', when: 'ES2020', use: '安全访问深层属性' },
          { composition: '空值合并', options: 'value ?? "默认"', when: 'ES2020', use: '仅 null/undefined 用默认值' },
        ],
      },
    ],
    syntax: {
      title: '解构 + 展开综合',
      blocks: [
        {
          title: '函数参数与对象更新',
          code: `function createUser({ name, age = 18, ...rest }) {
  return { name, age, ...rest, createdAt: Date.now() };
}

const defaults = { theme: 'light', lang: 'zh' };
const settings = { ...defaults, theme: 'dark' };`,
        },
      ],
    },
    tips: [
      'Vite 项目默认支持 ESM，用 import 不要用 require。',
      '展开只做浅拷贝，嵌套对象要单独处理。',
      '可选链 ?. 和空值合并 ?? 经常一起用，简化判空代码。',
    ],
  },
}
