export const jsLessons = [
  {
    id: 'js-intro',
    category: 'js',
    title: 'JavaScript 简介',
    example: {
      description: 'JavaScript 是 Web 的编程语言，可控制网页行为，与 HTML、CSS 配合使用。',
      html: `<h2 id="title">Hello JavaScript</h2>
<p id="desc">点击按钮改变内容</p>
<button id="btn">点我</button>`,
      js: `const btn = document.getElementById('btn');
const title = document.getElementById('title');
const desc = document.getElementById('desc');

btn.addEventListener('click', () => {
  title.textContent = 'JS 让网页动起来！';
  desc.textContent = 'HTML 结构 + CSS 样式 + JS 行为';
  btn.style.background = '#f59e0b';
});`,
    },
    quiz: {
      question: 'Web 前端三大核心技术是？',
      options: [
        {
          text: 'HTML、CSS、JavaScript',
          isCorrect: true,
          steps: [
            'HTML 定义网页内容结构',
            'CSS 控制网页样式和布局',
            'JavaScript 控制网页行为和交互',
            '三者配合构成完整网页',
          ],
        },
        {
          text: 'HTML、Python、JavaScript',
          isCorrect: false,
          steps: [
            'Python 是后端语言，不是前端三大技术',
            '样式由 CSS 负责',
            '正确答案是 HTML、CSS、JavaScript',
          ],
        },
        {
          text: 'Vue、React、Angular',
          isCorrect: false,
          steps: [
            'Vue/React/Angular 是框架',
            '基础三技术是 HTML、CSS、JavaScript',
            '框架建立在 JS 之上',
          ],
        },
      ],
    },
  },
  {
    id: 'js-output',
    category: 'js',
    title: 'JavaScript 输出',
    example: {
      description: 'innerHTML 写入页面、console.log 控制台输出、alert 弹窗。',
      html: `<p id="output">等待输出...</p>
<button onclick="showAlert()">Alert 弹窗</button>
<button onclick="updatePage()">更新页面</button>`,
      js: `function updatePage() {
  document.getElementById('output').innerHTML =
    '<strong>当前时间：</strong>' + new Date().toLocaleTimeString();
  console.log('页面已更新');
}

function showAlert() {
  alert('这是一个 alert 弹窗！');
  console.log('alert 已显示');
}`,
    },
    quiz: {
      question: '将内容写入 HTML 元素，应使用哪个属性？',
      options: [
        {
          text: 'innerHTML',
          isCorrect: true,
          steps: [
            'element.innerHTML = "内容"',
            '可写入 HTML 标签',
            '示例：document.getElementById("p").innerHTML = "Hello"',
            '纯文本也可用 textContent',
          ],
        },
        {
          text: 'writeHTML',
          isCorrect: false,
          steps: [
            '没有 writeHTML 属性',
            '写入 HTML 用 innerHTML',
            '控制台输出用 console.log',
          ],
        },
        {
          text: 'document.write',
          isCorrect: false,
          steps: [
            'document.write 已不推荐用于动态更新',
            '修改已有元素用 innerHTML',
            'document.write 会覆盖整个页面',
          ],
        },
      ],
    },
  },
  {
    id: 'js-variables',
    category: 'js',
    title: '变量与数据类型',
    example: {
      description: 'let、const 声明变量，以及 String、Number、Boolean 等基本类型。',
      html: `<pre id="result"></pre>
<button id="run">运行示例</button>`,
      js: `document.getElementById('run').addEventListener('click', () => {
  const name = '张三';
  let age = 25;
  const isStudent = true;
  const hobbies = ['读书', '游泳'];
  const info = { city: '北京', job: '工程师' };

  let output = '';
  output += 'name (string): ' + name + '\\n';
  output += 'age (number): ' + age + '\\n';
  output += 'isStudent (boolean): ' + isStudent + '\\n';
  output += 'hobbies (array): ' + hobbies.join(', ') + '\\n';
  output += 'info.city (object): ' + info.city;

  document.getElementById('result').textContent = output;
});`,
    },
    quiz: {
      question: '声明一个不可重新赋值的常量，应使用？',
      options: [
        {
          text: 'const',
          isCorrect: true,
          steps: [
            'const PI = 3.14; 声明后不能重新赋值',
            '常量必须在声明时初始化',
            '对象和数组的内容仍可修改',
            '需要重新赋值时用 let',
          ],
        },
        {
          text: 'var',
          isCorrect: false,
          steps: [
            'var 可以重新赋值，不是常量',
            '不可重新赋值用 const',
            'var 有作用域问题，现代代码优先 let/const',
          ],
        },
        {
          text: 'final',
          isCorrect: false,
          steps: [
            'final 是 Java 关键字，不是 JavaScript',
            'JS 中用 const 声明常量',
            'let 用于可变变量',
          ],
        },
      ],
    },
  },
  {
    id: 'js-operators',
    category: 'js',
    title: '运算符',
    example: {
      description: '算术、比较、逻辑运算符的基本用法。',
      html: `<div id="calc"></div>`,
      js: `const a = 10, b = 3;
const results = [
  'a + b = ' + (a + b),
  'a - b = ' + (a - b),
  'a * b = ' + (a * b),
  'a / b = ' + (a / b),
  'a % b = ' + (a % b),
  'a > b: ' + (a > b),
  'a === b: ' + (a === b),
  '!(a === b): ' + !(a === b),
];

document.getElementById('calc').innerHTML =
  results.map(r => '<p>' + r + '</p>').join('');`,
    },
    quiz: {
      question: '严格相等（值和类型都比较）应使用哪个运算符？',
      options: [
        {
          text: '===',
          isCorrect: true,
          steps: [
            '=== 严格相等，不自动类型转换',
            '示例：5 === "5" 结果为 false',
            '== 会类型转换，5 == "5" 为 true',
            '推荐使用 === 避免隐式转换陷阱',
          ],
        },
        {
          text: '==',
          isCorrect: false,
          steps: [
            '== 是宽松相等，会做类型转换',
            '严格比较用 ===',
            'null 和 undefined 用 === 也不相等',
          ],
        },
        {
          text: '=',
          isCorrect: false,
          steps: [
            '= 是赋值运算符，不是比较',
            '比较相等用 == 或 ===',
            '严格相等推荐 ===',
          ],
        },
      ],
    },
  },
  {
    id: 'js-condition',
    category: 'js',
    title: '条件语句',
    example: {
      description: 'if...else 和 switch 根据条件执行不同代码。',
      html: `<input type="number" id="score" value="85" min="0" max="100">
<button id="check">判断等级</button>
<p id="grade"></p>`,
      js: `document.getElementById('check').addEventListener('click', () => {
  const score = Number(document.getElementById('score').value);
  let grade;

  if (score >= 90) {
    grade = '优秀';
  } else if (score >= 60) {
    grade = '及格';
  } else {
    grade = '不及格';
  }

  document.getElementById('grade').textContent = '分数 ' + score + '，等级：' + grade;
});`,
    },
    quiz: {
      question: '根据分数判断等级，最适合使用哪种语句？',
      options: [
        {
          text: 'if...else if...else',
          isCorrect: true,
          steps: [
            'if (条件) { } else if (条件) { } else { }',
            '适合区间判断，如 score >= 90',
            '条件从上到下依次判断',
            'switch 更适合固定值匹配',
          ],
        },
        {
          text: 'for 循环',
          isCorrect: false,
          steps: [
            'for 用于重复执行，不是条件分支',
            '条件判断用 if...else',
            '循环和条件用途不同',
          ],
        },
        {
          text: 'try...catch',
          isCorrect: false,
          steps: [
            'try...catch 用于错误处理',
            '等级判断用 if...else',
            '不是条件分支的常规选择',
          ],
        },
      ],
    },
  },
  {
    id: 'js-loop',
    category: 'js',
    title: '循环',
    example: {
      description: 'for 循环和 while 循环遍历数据。',
      html: `<button id="forBtn">For 循环</button>
<button id="whileBtn">While 循环</button>
<ul id="list"></ul>`,
      js: `document.getElementById('forBtn').addEventListener('click', () => {
  const list = document.getElementById('list');
  list.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    list.innerHTML += '<li>for 第 ' + i + ' 次</li>';
  }
});

document.getElementById('whileBtn').addEventListener('click', () => {
  const list = document.getElementById('list');
  list.innerHTML = '';
  let n = 1;
  while (n <= 3) {
    list.innerHTML += '<li>while 第 ' + n + ' 次</li>';
    n++;
  }
});`,
    },
    quiz: {
      question: '已知循环次数，优先使用哪种循环？',
      options: [
        {
          text: 'for 循环',
          isCorrect: true,
          steps: [
            'for (let i = 0; i < n; i++) { }',
            '初始化、条件、递增写在一行',
            '适合已知次数的遍历',
            '遍历数组常用 for...of',
          ],
        },
        {
          text: 'while 循环',
          isCorrect: false,
          steps: [
            'while 适合不确定次数的循环',
            '已知次数优先 for',
            'while 需手动管理计数器',
          ],
        },
        {
          text: 'do...while',
          isCorrect: false,
          steps: [
            'do...while 至少执行一次',
            '已知次数 for 更简洁',
            '根据场景选择循环类型',
          ],
        },
      ],
    },
  },
  {
    id: 'js-function',
    category: 'js',
    title: '函数',
    example: {
      description: '函数定义、参数传递和返回值。',
      html: `<input type="number" id="a" value="3">
<input type="number" id="b" value="5">
<button id="add">相加</button>
<p id="result"></p>`,
      js: `function add(x, y) {
  return x + y;
}

const multiply = (x, y) => x * y;

document.getElementById('add').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent =
    a + ' + ' + b + ' = ' + add(a, b) +
    '，相乘 = ' + multiply(a, b);
});`,
    },
    quiz: {
      question: '函数中用于返回结果的关键字是？',
      options: [
        {
          text: 'return',
          isCorrect: true,
          steps: [
            'return 值; 返回结果并结束函数',
            '示例：function add(a,b) { return a + b; }',
            '无 return 则返回 undefined',
            'return 后的代码不会执行',
          ],
        },
        {
          text: 'output',
          isCorrect: false,
          steps: [
            'JavaScript 没有 output 关键字',
            '返回值用 return',
            '打印用 console.log',
          ],
        },
        {
          text: 'break',
          isCorrect: false,
          steps: [
            'break 用于跳出循环或 switch',
            '函数返回值用 return',
            '两者用途不同',
          ],
        },
      ],
    },
  },
  {
    id: 'js-array',
    category: 'js',
    title: '数组',
    example: {
      description: '数组创建、遍历和常用方法 push、map、filter。',
      html: `<button id="demo">运行数组示例</button>
<pre id="out"></pre>`,
      js: `document.getElementById('demo').addEventListener('click', () => {
  const fruits = ['苹果', '香蕉'];
  fruits.push('橙子');

  const nums = [1, 2, 3, 4, 5];
  const doubled = nums.map(n => n * 2);
  const evens = nums.filter(n => n % 2 === 0);

  let text = 'fruits: ' + fruits.join(', ') + '\\n';
  text += 'doubled: ' + doubled.join(', ') + '\\n';
  text += 'evens: ' + evens.join(', ') + '\\n';
  text += 'length: ' + fruits.length;

  document.getElementById('out').textContent = text;
});`,
    },
    quiz: {
      question: '在数组末尾添加元素应使用哪个方法？',
      options: [
        {
          text: 'push()',
          isCorrect: true,
          steps: [
            'arr.push(元素) 在末尾添加',
            '示例：fruits.push("橙子")',
            '返回新数组长度',
            '开头添加用 unshift()',
          ],
        },
        {
          text: 'append()',
          isCorrect: false,
          steps: [
            '数组没有 append 方法',
            '末尾添加用 push()',
            '拼接数组可用 concat()',
          ],
        },
        {
          text: 'add()',
          isCorrect: false,
          steps: [
            '数组没有 add 方法',
            '用 push() 添加元素',
            'Set 数据结构才有 add',
          ],
        },
      ],
    },
  },
  {
    id: 'js-object',
    category: 'js',
    title: '对象',
    example: {
      description: '对象属性、方法，以及解构赋值。',
      html: `<button id="show">显示用户信息</button>
<pre id="info"></pre>`,
      js: `const user = {
  name: '李四',
  age: 28,
  greet() {
    return '你好，我是 ' + this.name;
  }
};

document.getElementById('show').addEventListener('click', () => {
  const { name, age } = user;
  const text =
    'name: ' + name + '\\n' +
    'age: ' + age + '\\n' +
    'greet(): ' + user.greet() + '\\n' +
    'keys: ' + Object.keys(user).join(', ');
  document.getElementById('info').textContent = text;
});`,
    },
    quiz: {
      question: '访问对象 obj 的 name 属性，正确写法是？',
      options: [
        {
          text: 'obj.name 或 obj["name"]',
          isCorrect: true,
          steps: [
            '点语法：obj.name',
            '方括号语法：obj["name"]',
            '属性名是变量时用方括号：obj[key]',
            '两种写法等价（合法标识符时）',
          ],
        },
        {
          text: 'obj->name',
          isCorrect: false,
          steps: [
            'JavaScript 没有 -> 语法',
            '用 obj.name 访问属性',
            '这是其他语言的指针语法',
          ],
        },
        {
          text: 'get obj.name',
          isCorrect: false,
          steps: [
            '没有 get 关键字访问属性',
            '直接 obj.name 即可',
            'getter 用 get 关键字定义',
          ],
        },
      ],
    },
  },
  {
    id: 'js-string',
    category: 'js',
    title: '字符串',
    example: {
      description: '模板字符串、常用字符串方法和拼接。',
      html: `<input id="name" value="小明" placeholder="输入名字">
<button id="greet">生成问候</button>
<p id="msg"></p>`,
      js: `document.getElementById('greet').addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const msg = \`你好，\${name}！欢迎学习 JavaScript。\`;
  const upper = name.toUpperCase();
  const len = name.length;

  document.getElementById('msg').innerHTML =
    msg + '<br>大写：' + upper + '，长度：' + len;
});`,
    },
    quiz: {
      question: '模板字符串（可嵌入变量）使用什么符号包裹？',
      options: [
        {
          text: '反引号 `',
          isCorrect: true,
          steps: [
            '反引号包裹：\\`你好，\\${name}\\`',
            '${变量} 插入表达式',
            '可换行，比 + 拼接更简洁',
            '普通字符串用单引号或双引号',
          ],
        },
        {
          text: '单引号 \'',
          isCorrect: false,
          steps: [
            '单引号是普通字符串',
            '模板字符串用反引号',
            '反引号在键盘 ESC 下方',
          ],
        },
        {
          text: '双引号 "',
          isCorrect: false,
          steps: [
            '双引号也是普通字符串',
            '嵌入变量需要反引号模板字符串',
            '示例：\\`Hello \\${name}\\`',
          ],
        },
      ],
    },
  },
  {
    id: 'js-dom',
    category: 'js',
    title: 'DOM 操作',
    example: {
      description: '获取元素、修改内容和样式，动态创建节点。',
      html: `<ul id="todo"></ul>
<input id="input" placeholder="添加待办">
<button id="add">添加</button>`,
      js: `const list = document.getElementById('todo');
const input = document.getElementById('input');

document.getElementById('add').addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.textContent = text;
  li.style.padding = '6px 0';
  list.appendChild(li);
  input.value = '';
});`,
    },
    quiz: {
      question: '通过 id 获取 DOM 元素应使用？',
      options: [
        {
          text: 'document.getElementById("id")',
          isCorrect: true,
          steps: [
            'document.getElementById("myId")',
            '返回单个元素或 null',
            'id 在页面中应唯一',
            '也可用 querySelector("#myId")',
          ],
        },
        {
          text: 'document.getElement("id")',
          isCorrect: false,
          steps: [
            '没有 getElement 方法',
            '正确是 getElementById',
            '类选择用 getElementsByClassName',
          ],
        },
        {
          text: 'document.find("#id")',
          isCorrect: false,
          steps: [
            '没有 document.find 方法',
            '用 getElementById 或 querySelector',
            'jQuery 才有 $ 选择器',
          ],
        },
      ],
    },
  },
  {
    id: 'js-event',
    category: 'js',
    title: '事件',
    example: {
      description: 'addEventListener 监听点击、输入等用户事件。',
      html: `<button id="counter">点击次数：0</button>
<input id="search" placeholder="输入搜索...">
<p id="log"></p>`,
      js: `let count = 0;
const log = document.getElementById('log');

document.getElementById('counter').addEventListener('click', (e) => {
  count++;
  e.target.textContent = '点击次数：' + count;
  log.textContent = '按钮被点击了';
});

document.getElementById('search').addEventListener('input', (e) => {
  log.textContent = '正在搜索：' + e.target.value;
});`,
    },
    quiz: {
      question: '给元素绑定点击事件，推荐方式是？',
      options: [
        {
          text: 'element.addEventListener("click", handler)',
          isCorrect: true,
          steps: [
            'addEventListener("click", function() { })',
            '可绑定多个处理函数',
            '第三个参数可控制冒泡/捕获',
            '比 onclick 属性更灵活',
          ],
        },
        {
          text: 'element.on_click = handler',
          isCorrect: false,
          steps: [
            '没有 on_click 属性',
            '旧式写法是 onclick（会覆盖）',
            '推荐 addEventListener',
          ],
        },
        {
          text: 'element.bind("click")',
          isCorrect: false,
          steps: [
            'DOM 元素没有 bind 方法',
            'bind 是 Function 的方法',
            '事件绑定用 addEventListener',
          ],
        },
      ],
    },
  },
  {
    id: 'js-json',
    category: 'js',
    title: 'JSON',
    example: {
      description: 'JSON.stringify 和 JSON.parse 用于数据序列化与解析。',
      html: `<button id="toJson">对象转 JSON</button>
<button id="fromJson">JSON 转对象</button>
<pre id="json-out"></pre>`,
      js: `const user = { name: '王五', age: 30, skills: ['JS', 'Vue'] };

document.getElementById('toJson').addEventListener('click', () => {
  const json = JSON.stringify(user, null, 2);
  document.getElementById('json-out').textContent = json;
});

document.getElementById('fromJson').addEventListener('click', () => {
  const json = '{"name":"赵六","age":22}';
  const obj = JSON.parse(json);
  document.getElementById('json-out').textContent =
    '解析结果：' + obj.name + '，' + obj.age + '岁';
});`,
    },
    quiz: {
      question: '将 JavaScript 对象转为 JSON 字符串应使用？',
      options: [
        {
          text: 'JSON.stringify(obj)',
          isCorrect: true,
          steps: [
            'JSON.stringify(对象) 转为字符串',
            '示例：JSON.stringify({a:1}) 得 "{\\"a\\":1}"',
            '常用于接口请求和本地存储',
            '解析用 JSON.parse()',
          ],
        },
        {
          text: 'obj.toJSON()',
          isCorrect: false,
          steps: [
            '普通对象没有 toJSON 方法',
            '标准方法 JSON.stringify()',
            'Date 对象有 toJSON 但是特殊情况',
          ],
        },
        {
          text: 'JSON.convert(obj)',
          isCorrect: false,
          steps: [
            '没有 JSON.convert 方法',
            '序列化用 JSON.stringify',
            '反序列化用 JSON.parse',
          ],
        },
      ],
    },
  },
  {
    id: 'js-async',
    category: 'js',
    title: '异步编程',
    example: {
      description: 'Promise 和 async/await 处理异步操作。',
      html: `<button id="promiseBtn">Promise 示例</button>
<button id="asyncBtn">Async/Await 示例</button>
<p id="status">就绪</p>`,
      js: `function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('promiseBtn').addEventListener('click', () => {
  const status = document.getElementById('status');
  status.textContent = '加载中...';
  delay(1000).then(() => {
    status.textContent = 'Promise 完成！';
  });
});

document.getElementById('asyncBtn').addEventListener('click', async () => {
  const status = document.getElementById('status');
  status.textContent = '加载中...';
  await delay(1000);
  status.textContent = 'Async/Await 完成！';
});`,
    },
    quiz: {
      question: '用同步写法处理 Promise，应使用哪个关键字？',
      options: [
        {
          text: 'await',
          isCorrect: true,
          steps: [
            '在 async 函数内使用 await',
            '示例：const data = await fetchData();',
            'await 会暂停直到 Promise 完成',
            '函数必须声明为 async',
          ],
        },
        {
          text: 'wait',
          isCorrect: false,
          steps: [
            'JavaScript 没有 wait 关键字',
            '异步等待用 await',
            '需在 async 函数中使用',
          ],
        },
        {
          text: 'sync',
          isCorrect: false,
          steps: [
            '没有 sync 关键字',
            '用 async/await 组合',
            '或 Promise.then() 链式调用',
          ],
        },
      ],
    },
  },
  {
    id: 'js-es6',
    category: 'js',
    title: 'ES6+ 新特性',
    example: {
      description: '箭头函数、解构、展开运算符等现代 JS 语法。',
      html: `<button id="run">运行 ES6 示例</button>
<pre id="es6-out"></pre>`,
      js: `document.getElementById('run').addEventListener('click', () => {
  const nums = [1, 2, 3];
  const doubled = nums.map(n => n * 2);

  const person = { name: '小红', role: '前端' };
  const { name, role } = person;

  const arr1 = [1, 2];
  const arr2 = [...arr1, 3, 4];

  const text =
    '箭头函数: ' + doubled.join(', ') + '\\n' +
    '解构: ' + name + ' - ' + role + '\\n' +
    '展开: ' + arr2.join(', ');

  document.getElementById('es6-out').textContent = text;
});`,
    },
    quiz: {
      question: '合并两个数组，ES6 推荐方式是？',
      options: [
        {
          text: '展开运算符 [...arr1, ...arr2]',
          isCorrect: true,
          steps: [
            'const merged = [...arr1, ...arr2]',
            '不修改原数组，返回新数组',
            '也可 [...arr1, 新元素]',
            '等效于 concat 但更简洁',
          ],
        },
        {
          text: 'arr1 + arr2',
          isCorrect: false,
          steps: [
            '数组 + 数组会变成字符串拼接',
            '合并数组用展开运算符',
            '或 arr1.concat(arr2)',
          ],
        },
        {
          text: 'merge(arr1, arr2)',
          isCorrect: false,
          steps: [
            'JavaScript 没有内置 merge 函数',
            '用 [...arr1, ...arr2]',
            '或 arr1.concat(arr2)',
          ],
        },
      ],
    },
  },
]
