export const vueLessons = [
  {
    id: 'vue-intro',
    category: 'vue',
    title: 'Vue 简介',
    example: {
      description: "Vue 3 项目入口：main.js 创建应用，App.vue 写组件逻辑与模板。",
      files: [
        {
          name: "index.html",
          content: `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <title>Vue App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>`,
        },
        {
          name: "src/main.js",
          content: `import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')`,
        },
        {
          name: "src/App.vue",
          content: `<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>`,
        },
      ],
    },
    quiz: {
      "question": "创建一个 Vue 应用并挂载到 #app，正确的步骤是？",
      "options": [
        {
          "text": "main.js 中 createApp(App).mount(\"#app\")",
          "isCorrect": true,
          "steps": [
            "1. index.html 提供 <div id=\"app\"></div>",
            "2. main.js：import { createApp } from \"vue\"",
            "3. import App from \"./App.vue\"",
            "4. createApp(App).mount(\"#app\")"
          ]
        },
        {
          "text": "new Vue({ el: \"#app\" })",
          "isCorrect": false,
          "steps": [
            "这是 Vue 2 的写法",
            "Vue 3 在 main.js 用 createApp().mount()",
            "组件逻辑写在 App.vue"
          ]
        },
        {
          "text": "在 App.vue 里直接 mount",
          "isCorrect": false,
          "steps": [
            "挂载操作在 main.js 完成",
            "App.vue 只负责组件内容",
            "入口文件是 main.js"
          ]
        }
      ]
    },
  },
  {
    id: 'vue-scaffold',
    category: 'vue',
    title: '从零创建 Vue 项目',
    example: {
      description: "使用 Vite 官方模板创建 Vue 3 项目（本项目同样方式搭建）。",
      previewHtml: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <style>
    body { margin: 0; font-family: ui-monospace, monospace; background: #1e1e2e; color: #cdd6f4; padding: 20px; }
    .term { background: #11111b; border-radius: 10px; padding: 16px; font-size: 13px; line-height: 1.8; }
    .prompt { color: #a6e3a1; }
    .cmd { color: #89b4fa; }
    .out { color: #94a3b8; }
  </style>
</head>
<body>
  <div class="term">
    <div><span class="prompt">$</span> <span class="cmd">npm create vite@latest my-vue-app -- --template vue</span></div>
    <div class="out">✔ Project created successfully</div>
    <div><span class="prompt">$</span> <span class="cmd">cd my-vue-app && npm install</span></div>
    <div class="out">added 34 packages</div>
    <div><span class="prompt">$</span> <span class="cmd">npm run dev</span></div>
    <div class="out">VITE ready ➜ Local: http://localhost:5173/</div>
  </div>
</body>
</html>`,
      files: [
        {
          name: "终端命令",
          content: `# 1. 创建项目
npm create vite@latest my-vue-app -- --template vue

# 2. 进入目录
cd my-vue-app

# 3. 安装依赖
npm install

# 4. 启动开发服务器
npm run dev`,
        },
        {
          name: "package.json",
          content: `{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.5.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^6.0.0",
    "vite": "^8.0.0"
  }
}`,
        },
      ],
    },
    quiz: {
      "question": "从零创建 Vue 3 + Vite 项目的正确命令顺序是？",
      "options": [
        {
          "text": "create vite → cd → install → run dev",
          "isCorrect": true,
          "steps": [
            "1. npm create vite@latest 项目名 -- --template vue",
            "2. cd 进入项目目录",
            "3. npm install",
            "4. npm run dev"
          ]
        },
        {
          "text": "vue create 项目名",
          "isCorrect": false,
          "steps": [
            "vue create 是旧版 Vue CLI",
            "Vue 3 推荐 npm create vite"
          ]
        },
        {
          "text": "npm init vue 后直接部署",
          "isCorrect": false,
          "steps": [
            "还需 npm install",
            "开发用 npm run dev",
            "构建用 npm run build"
          ]
        }
      ]
    },
  },
  {
    id: 'vue-project-structure',
    category: 'vue',
    title: '项目目录结构',
    example: {
      description: "标准 Vue + Vite 项目各目录职责（与本学习手册项目一致）。",
      previewHtml: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <style>
    body { margin: 0; font-family: system-ui, sans-serif; background: #f8fafc; padding: 20px; }
    pre { background: #1e293b; color: #e2e8f0; padding: 16px; border-radius: 10px; font-size: 13px; line-height: 1.7; }
  </style>
</head>
<body>
  <pre>my-vue-app/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.js         ← 入口
    ├── App.vue         ← 根组件
    ├── components/
    ├── views/
    ├── router/
    └── data/</pre>
</body>
</html>`,
      files: [
        {
          name: "项目结构",
          content: `my-vue-app/
├── index.html          # 入口 HTML
├── package.json        # 依赖与脚本
├── vite.config.js      # Vite 配置
└── src/
    ├── main.js         # 应用入口
    ├── App.vue         # 根组件
    ├── components/     # 可复用组件
    ├── views/          # 页面级组件
    ├── router/         # 路由配置
    └── data/           # 静态数据`,
        },
        {
          name: "src/main.js",
          content: `import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')`,
        },
      ],
    },
    quiz: {
      "question": "Vue 应用的 JS 入口文件是哪个？",
      "options": [
        {
          "text": "src/main.js",
          "isCorrect": true,
          "steps": [
            "1. main.js 创建应用并挂载",
            "2. 注册 router 等插件：.use(router)",
            "3. index.html 通过 script 引入 main.js"
          ]
        },
        {
          "text": "index.html",
          "isCorrect": false,
          "steps": [
            "index.html 是 HTML 入口",
            "JS 入口是 src/main.js"
          ]
        },
        {
          "text": "App.vue",
          "isCorrect": false,
          "steps": [
            "App.vue 是根组件",
            "入口仍是 main.js"
          ]
        }
      ]
    },
  },
  {
    id: 'vue-router-setup',
    category: 'vue',
    title: 'Vue Router 安装与注册',
    example: {
      description: "安装 vue-router，在 main.js 注册，App.vue 放 RouterView。",
      files: [
        {
          name: "终端",
          content: `npm install vue-router`,
        },
        {
          name: "src/main.js",
          content: `import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')`,
        },
        {
          name: "src/App.vue",
          content: `<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="app">
    <Sidebar />
    <RouterView />
  </div>
</template>`,
        },
      ],
    },
    quiz: {
      "question": "main.js 中注册 Router 的正确写法？",
      "options": [
        {
          "text": "createApp(App).use(router).mount(\"#app\")",
          "isCorrect": true,
          "steps": [
            "1. npm install vue-router",
            "2. import router from \"./router\"",
            "3. .use(router) 在 .mount() 之前",
            "4. App.vue 放 <RouterView />"
          ]
        },
        {
          "text": "mount().use(router)",
          "isCorrect": false,
          "steps": [
            "use 必须在 mount 之前"
          ]
        },
        {
          "text": "Vue.use(router)",
          "isCorrect": false,
          "steps": [
            "Vue 3 用 app.use(router)"
          ]
        }
      ]
    },
  },
  {
    id: 'vue-router-routes',
    category: 'vue',
    title: '路由表配置',
    example: {
      description: "router/index.js 定义路径与组件映射。",
      files: [
        {
          name: "src/router/index.js",
          content: `import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/:pathMatch(.*)*', redirect: '/home' },
  ],
})

export default router`,
        },
        {
          name: "src/views/Home.vue",
          content: `<template>
  <h1>首页</h1>
</template>`,
        },
      ],
    },
    quiz: {
      "question": "path: \"/\" 配合 redirect 的作用是？",
      "options": [
        {
          "text": "访问根路径时自动跳转",
          "isCorrect": true,
          "steps": [
            "1. { path: \"/\", redirect: \"/home\" }",
            "2. name 用于 router.push({ name: \"home\" })",
            "3. component 指定页面组件"
          ]
        },
        {
          "text": "隐藏首页",
          "isCorrect": false,
          "steps": [
            "redirect 是跳转不是隐藏"
          ]
        },
        {
          "text": "删除路由",
          "isCorrect": false,
          "steps": [
            "redirect 路由仍存在"
          ]
        }
      ]
    },
  },
  {
    id: 'vue-router-nav',
    category: 'vue',
    title: '路由导航',
    example: {
      description: "useRouter 跳转，useRoute 读取当前路由（与本项目 Sidebar 一致）。",
      files: [
        {
          name: "src/components/Sidebar.vue",
          content: `<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goLesson(id) {
  router.push({ name: 'lesson', params: { id } })
}
</script>

<template>
  <button @click="goLesson('vue-intro')">Vue 简介</button>
  <RouterLink to="/lesson/vue-template">模板语法</RouterLink>
</template>`,
        },
        {
          name: "src/App.vue",
          content: `<template>
  <Sidebar />
  <RouterView />
</template>`,
        },
      ],
    },
    quiz: {
      "question": "组件内跳转到 /about，应使用？",
      "options": [
        {
          "text": "const router = useRouter(); router.push(\"/about\")",
          "isCorrect": true,
          "steps": [
            "1. import { useRouter } from \"vue-router\"",
            "2. const router = useRouter()",
            "3. router.push(\"/about\") 或 router.push({ name: \"about\" })",
            "4. 模板可用 <RouterLink to=\"/about\">"
          ]
        },
        {
          "text": "window.location = \"/about\"",
          "isCorrect": false,
          "steps": [
            "会整页刷新",
            "用 router.push"
          ]
        },
        {
          "text": "useRoute().push(...)",
          "isCorrect": false,
          "steps": [
            "useRoute 只读",
            "跳转用 useRouter"
          ]
        }
      ]
    },
  },
  {
    id: 'vue-router-dynamic',
    category: 'vue',
    title: '动态路由与参数',
    example: {
      description: "本项目实际路由：/lesson/:id，props 传递给 LessonView。",
      files: [
        {
          name: "src/router/index.js",
          content: `import { createRouter, createWebHistory } from 'vue-router'
import { lessons } from '../data/lessons.js'
import LessonView from '../views/LessonView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/lesson/:id',
      name: 'lesson',
      component: LessonView,
      props: true,
      beforeEnter: (to) => {
        const exists = lessons.some((l) => l.id === to.params.id)
        if (!exists) return '/lesson/' + lessons[0].id
      },
    },
  ],
})

export default router`,
        },
        {
          name: "src/views/LessonView.vue",
          content: `<script setup>
import { computed } from 'vue'
import { lessons } from '../data/lessons.js'

const props = defineProps({
  id: { type: String, required: true },
})

const lesson = computed(() =>
  lessons.find((l) => l.id === props.id),
)
</script>

<template>
  <h1>{{ lesson.title }}</h1>
</template>`,
        },
      ],
    },
    quiz: {
      "question": "/lesson/:id 中组件如何接收 id？",
      "options": [
        {
          "text": "props: true + defineProps({ id })",
          "isCorrect": true,
          "steps": [
            "1. 路由：path: \"/lesson/:id\", props: true",
            "2. 组件：defineProps({ id: String })",
            "3. 或 useRoute().params.id",
            "4. beforeEnter 校验 id 合法性"
          ]
        },
        {
          "text": "query 参数 ?id=xxx",
          "isCorrect": false,
          "steps": [
            ":id 是路径参数",
            "在 params 中"
          ]
        },
        {
          "text": "自动注入 data()",
          "isCorrect": false,
          "steps": [
            "用 defineProps 或 useRoute"
          ]
        }
      ]
    },
  },
  {
    id: 'vue-template',
    category: 'vue',
    title: '模板语法',
    example: {
      description: "在 .vue 的 <template> 中使用插值、属性绑定和事件绑定。",
      files: [
        {
          name: "src/App.vue",
          content: `<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue!')
const url = ref('https://cn.vuejs.org/')
const count = ref(0)
</script>

<template>
  <p>{{ message }}</p>
  <a :href="url">Vue 官网</a>
  <button @click="count++">点击 +1 ({{ count }})</button>
</template>`,
        },
      ],
    },
    quiz: {
      "question": "在模板中绑定 href 属性，推荐写法是？",
      "options": [
        {
          "text": ":href=\"url\"",
          "isCorrect": true,
          "steps": [
            "1. script setup 中：const url = ref(\"...\")",
            "2. template 中：:href=\"url\"",
            "3. : 是 v-bind 的简写"
          ]
        },
        {
          "text": "href=\"{{ url }}\"",
          "isCorrect": false,
          "steps": [
            "属性内不能用 {{ }}",
            "用 :href 绑定"
          ]
        },
        {
          "text": "bind-href=\"url\"",
          "isCorrect": false,
          "steps": [
            "没有 bind-href",
            "用 :href 或 v-bind:href"
          ]
        }
      ]
    },
  },
  {
    id: 'vue-reactivity',
    category: 'vue',
    title: '响应式基础',
    example: {
      description: "script setup 中用 ref 定义响应式数据，模板自动更新。",
      files: [
        {
          name: "src/components/Counter.vue",
          content: `<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <p>计数：{{ count }}</p>
  <button @click="count++">+1</button>
  <button @click="count--">-1</button>
  <p>双倍：{{ count * 2 }}</p>
</template>`,
        },
        {
          name: "src/App.vue",
          content: `<script setup>
import Counter from './components/Counter.vue'
</script>

<template>
  <Counter />
</template>`,
        },
      ],
    },
    quiz: {
      "question": "在 script setup 中创建响应式数字，应使用？",
      "options": [
        {
          "text": "const count = ref(0)",
          "isCorrect": true,
          "steps": [
            "1. import { ref } from \"vue\"",
            "2. const count = ref(0)",
            "3. 模板直接用 count，JS 中用 count.value",
            "4. script setup 无需 return"
          ]
        },
        {
          "text": "const count = reactive(0)",
          "isCorrect": false,
          "steps": [
            "reactive 用于对象",
            "基本类型用 ref"
          ]
        },
        {
          "text": "let count = 0",
          "isCorrect": false,
          "steps": [
            "普通变量不响应式",
            "必须用 ref 或 reactive"
          ]
        }
      ]
    },
  },
  {
    id: 'vue-computed',
    category: 'vue',
    title: '计算属性',
    example: {
      description: "computed 派生数据，依赖变化时自动重新计算。",
      files: [
        {
          name: "src/components/FullName.vue",
          content: `<script setup>
import { ref, computed } from 'vue'

const firstName = ref('张')
const lastName = ref('三')

const fullName = computed(() => firstName.value + lastName.value)
</script>

<template>
  <input v-model="firstName" placeholder="名">
  <input v-model="lastName" placeholder="姓">
  <p>全名：{{ fullName }}</p>
</template>`,
        },
      ],
    },
    quiz: {
      "question": "根据 firstName 和 lastName 拼接全名，应使用？",
      "options": [
        {
          "text": "computed(() => firstName.value + lastName.value)",
          "isCorrect": true,
          "steps": [
            "1. import { computed } from \"vue\"",
            "2. const fullName = computed(() => ...)",
            "3. 读取 ref 要加 .value",
            "4. 模板直接用 {{ fullName }}"
          ]
        },
        {
          "text": "function fullName() { ... }",
          "isCorrect": false,
          "steps": [
            "普通函数无缓存",
            "派生数据用 computed"
          ]
        },
        {
          "text": "watch(firstName, ...)",
          "isCorrect": false,
          "steps": [
            "watch 用于副作用",
            "展示用 computed"
          ]
        }
      ]
    },
  },
  {
    id: 'vue-class-style',
    category: 'vue',
    title: '类与样式绑定',
    example: {
      description: ":class 和 :style 动态绑定，样式可写在 <style scoped> 中。",
      files: [
        {
          name: "src/components/StyleDemo.vue",
          content: `<script setup>
import { ref } from 'vue'

const isActive = ref(true)
const textColor = ref('#3b82f6')
const size = ref(18)
</script>

<template>
  <p :class="{ active: isActive }">动态 class</p>
  <p :style="{ color: textColor, fontSize: size + 'px' }">动态 style</p>
  <button @click="isActive = !isActive">切换 active</button>
</template>

<style scoped>
.active {
  color: #16a34a;
  font-weight: bold;
}
</style>`,
        },
      ],
    },
    quiz: {
      "question": "根据 isActive 切换 class，写法是？",
      "options": [
        {
          "text": ":class=\"{ active: isActive }\"",
          "isCorrect": true,
          "steps": [
            "1. const isActive = ref(true)",
            "2. :class=\"{ active: isActive }\"",
            "3. 样式定义在 <style scoped> 中"
          ]
        },
        {
          "text": "class=\"active: isActive\"",
          "isCorrect": false,
          "steps": [
            "静态 class 不支持表达式",
            "动态用 :class"
          ]
        },
        {
          "text": "v-class=\"{ active: isActive }\"",
          "isCorrect": false,
          "steps": [
            "没有 v-class",
            "用 :class"
          ]
        }
      ]
    },
  },
  {
    id: 'vue-conditional',
    category: 'vue',
    title: '条件渲染',
    example: {
      description: "v-if / v-else 与 v-show 在 .vue 模板中使用。",
      files: [
        {
          name: "src/components/ToggleDemo.vue",
          content: `<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <button @click="show = !show">切换显示</button>
  <p v-if="show">v-if：条件为真才渲染</p>
  <p v-else>v-else：条件为假时显示</p>
  <p v-show="show">v-show：切换 display</p>
</template>`,
        },
      ],
    },
    quiz: {
      "question": "频繁切换显示/隐藏，性能更好的是？",
      "options": [
        {
          "text": "v-show",
          "isCorrect": true,
          "steps": [
            "1. v-show 切换 CSS display",
            "2. 元素始终在 DOM 中",
            "3. 频繁切换推荐 v-show"
          ]
        },
        {
          "text": "v-if",
          "isCorrect": false,
          "steps": [
            "v-if 会创建/销毁元素",
            "频繁切换用 v-show"
          ]
        },
        {
          "text": "v-hide",
          "isCorrect": false,
          "steps": [
            "没有 v-hide",
            "用 v-show"
          ]
        }
      ]
    },
  },
  {
    id: 'vue-list',
    category: 'vue',
    title: '列表渲染',
    example: {
      description: "v-for 遍历数组，:key 绑定唯一标识。",
      files: [
        {
          name: "src/components/ProductList.vue",
          content: `<script setup>
import { ref } from 'vue'

const items = ref([
  { id: 1, name: '苹果', price: 5 },
  { id: 2, name: '香蕉', price: 3 },
])
let nextId = 3

function addItem() {
  items.value.push({ id: nextId++, name: '新品', price: 10 })
}
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }} - {{ item.price }}元
    </li>
  </ul>
  <button @click="addItem">添加商品</button>
</template>`,
        },
      ],
    },
    quiz: {
      "question": "v-for 遍历列表时，为什么必须加 :key？",
      "options": [
        {
          "text": "帮助 Vue 高效追踪每个节点",
          "isCorrect": true,
          "steps": [
            "1. v-for=\"item in items\" :key=\"item.id\"",
            "2. key 用唯一稳定值（如 id）",
            "3. 避免用 index 作 key（列表会重排时）"
          ]
        },
        {
          "text": "key 可以省略",
          "isCorrect": false,
          "steps": [
            "强烈建议提供 key",
            "省略可能导致渲染问题"
          ]
        },
        {
          "text": "key 用于 CSS",
          "isCorrect": false,
          "steps": [
            "key 用于虚拟 DOM diff",
            "与样式无关"
          ]
        }
      ]
    },
  },
  {
    id: 'vue-event',
    category: 'vue',
    title: '事件处理',
    example: {
      description: "@click、@submit.prevent 等事件绑定写在模板中。",
      files: [
        {
          name: "src/components/EventDemo.vue",
          content: `<script setup>
import { ref } from 'vue'

const count = ref(0)
const text = ref('')
const msg = ref('')

function onSubmit() {
  msg.value = '提交了：' + text.value
}
</script>

<template>
  <button @click="count++">点击 ({{ count }})</button>
  <form @submit.prevent="onSubmit">
    <input v-model="text" placeholder="输入内容">
    <button type="submit">提交</button>
  </form>
  <p>{{ msg }}</p>
</template>`,
        },
      ],
    },
    quiz: {
      "question": "阻止表单 submit 默认刷新，应使用？",
      "options": [
        {
          "text": "@submit.prevent=\"onSubmit\"",
          "isCorrect": true,
          "steps": [
            "1. form 上写 @submit.prevent",
            "2. script setup 定义 onSubmit 函数",
            "3. .prevent 等同 preventDefault()"
          ]
        },
        {
          "text": "@submit.stop",
          "isCorrect": false,
          "steps": [
            ".stop 阻止冒泡",
            "阻止默认用 .prevent"
          ]
        },
        {
          "text": "v-prevent",
          "isCorrect": false,
          "steps": [
            "没有 v-prevent",
            "用 @submit.prevent"
          ]
        }
      ]
    },
  },
  {
    id: 'vue-vmodel',
    category: 'vue',
    title: '表单输入绑定',
    example: {
      description: "v-model 双向绑定各类表单控件。",
      files: [
        {
          name: "src/components/FormDemo.vue",
          content: `<script setup>
import { ref } from 'vue'

const text = ref('')
const checked = ref(false)
const gender = ref('男')
const city = ref('北京')
</script>

<template>
  <p>文本：<input v-model="text"></p>
  <p>多选：<input type="checkbox" v-model="checked"> {{ checked }}</p>
  <p>
    单选：
    <label><input type="radio" v-model="gender" value="男"> 男</label>
    <label><input type="radio" v-model="gender" value="女"> 女</label>
  </p>
  <select v-model="city">
    <option>北京</option>
    <option>上海</option>
  </select>
  <pre>{{ { text, checked, gender, city } }}</pre>
</template>`,
        },
      ],
    },
    quiz: {
      "question": "input 与变量双向绑定，写法是？",
      "options": [
        {
          "text": "<input v-model=\"text\">",
          "isCorrect": true,
          "steps": [
            "1. const text = ref(\"\")",
            "2. <input v-model=\"text\">",
            "3. 输入自动更新 text"
          ]
        },
        {
          "text": "<input bind=\"text\">",
          "isCorrect": false,
          "steps": [
            "没有 bind 属性",
            "用 v-model"
          ]
        },
        {
          "text": "必须写 :value 和 @input",
          "isCorrect": false,
          "steps": [
            "那是 v-model 底层原理",
            "直接用 v-model 即可"
          ]
        }
      ]
    },
  },
  {
    id: 'vue-props',
    category: 'vue',
    title: '组件 Props',
    example: {
      description: "子组件用 defineProps 接收，父组件传参。",
      files: [
        {
          name: "src/components/UserCard.vue",
          content: `<script setup>
defineProps({
  name: String,
  age: Number,
})
</script>

<template>
  <div class="card">{{ name }}，{{ age }} 岁</div>
</template>

<style scoped>
.card {
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 8px;
}
</style>`,
        },
        {
          name: "src/App.vue",
          content: `<script setup>
import UserCard from './components/UserCard.vue'
</script>

<template>
  <UserCard name="张三" :age="25" />
  <UserCard name="李四" :age="30" />
</template>`,
        },
      ],
    },
    quiz: {
      "question": "子组件接收父组件传来的 age 数字，正确写法是？",
      "options": [
        {
          "text": "defineProps({ age: Number })，父组件 :age=\"25\"",
          "isCorrect": true,
          "steps": [
            "1. 子组件 defineProps({ age: Number })",
            "2. 模板用 {{ age }}",
            "3. 父组件传数字：:age=\"25\"",
            "4. 传字符串直接 name=\"张三\""
          ]
        },
        {
          "text": "子组件 const age = ref(25)",
          "isCorrect": false,
          "steps": [
            "父传子用 props",
            "不是内部 ref"
          ]
        },
        {
          "text": "父组件 age=\"25\" 传数字",
          "isCorrect": false,
          "steps": [
            "不带冒号是字符串",
            "数字用 :age=\"25\""
          ]
        }
      ]
    },
  },
  {
    id: 'vue-emit',
    category: 'vue',
    title: '组件事件',
    example: {
      description: "子组件 defineEmits 声明事件，父组件 @事件名 监听。",
      files: [
        {
          name: "src/components/CounterBtn.vue",
          content: `<script setup>
const emit = defineEmits(['add'])
</script>

<template>
  <button @click="emit('add')">子组件 +1</button>
</template>`,
        },
        {
          name: "src/App.vue",
          content: `<script setup>
import { ref } from 'vue'
import CounterBtn from './components/CounterBtn.vue'

const total = ref(0)
</script>

<template>
  <p>父组件计数：{{ total }}</p>
  <CounterBtn @add="total++" />
</template>`,
        },
      ],
    },
    quiz: {
      "question": "子组件通知父组件，步骤是？",
      "options": [
        {
          "text": "子 emit(\"add\")，父 @add=\"handler\"",
          "isCorrect": true,
          "steps": [
            "1. 子：const emit = defineEmits([\"add\"])",
            "2. 子模板：@click=\"emit('add')\"",
            "3. 父：<CounterBtn @add=\"total++\" />"
          ]
        },
        {
          "text": "子直接改父组件变量",
          "isCorrect": false,
          "steps": [
            "违反单向数据流",
            "用 emit 通知父组件"
          ]
        },
        {
          "text": "父 v-send=\"handler\"",
          "isCorrect": false,
          "steps": [
            "没有 v-send",
            "用 @事件名"
          ]
        }
      ]
    },
  },
  {
    id: 'vue-script-setup',
    category: 'vue',
    title: 'script setup',
    example: {
      description: "<script setup> 是组合式 API 的推荐写法，顶层变量自动暴露给模板。",
      files: [
        {
          name: "src/components/Hello.vue",
          content: `<script setup>
import { ref } from 'vue'

// 顶层变量自动可用于 template，无需 return
const greeting = ref('Hello script setup')
const count = ref(0)
</script>

<template>
  <p>{{ greeting }}</p>
  <button @click="count++">{{ count }}</button>
</template>`,
        },
      ],
    },
    quiz: {
      "question": "script setup 中变量如何暴露给模板？",
      "options": [
        {
          "text": "顶层声明自动暴露，无需 return",
          "isCorrect": true,
          "steps": [
            "1. 使用 <script setup>",
            "2. 顶层 const/function 自动可用",
            "3. import 的组件自动注册"
          ]
        },
        {
          "text": "必须 return { count }",
          "isCorrect": false,
          "steps": [
            "return 是普通 setup() 写法",
            "script setup 不需要"
          ]
        },
        {
          "text": "必须 export 每个变量",
          "isCorrect": false,
          "steps": [
            "顶层声明即自动暴露",
            "无需手动 export"
          ]
        }
      ]
    },
  },
  {
    id: 'vue-lifecycle',
    category: 'vue',
    title: '生命周期',
    knowledge: {
      title: 'Vue 3 生命周期钩子',
      intro:
        '生命周期描述组件从创建、挂载、更新到销毁的完整过程。组合式 API（script setup）用 onXxx 函数注册钩子；选项式 API 用 mounted、created 等选项。setup 本身在 beforeCreate 之前执行，替代了选项式的 beforeCreate / created。',
      flow:
        'setup → onBeforeMount → onMounted → [数据变化] onBeforeUpdate → onUpdated → onBeforeUnmount → onUnmounted',
      phases: [
        {
          name: '1. 创建阶段',
          desc: '组合式 API 没有 onBeforeCreate / onCreated，逻辑直接写在 setup 或 <script setup> 顶层。',
          hooks: [
            {
              composition: 'setup()',
              options: 'beforeCreate / created',
              when: '组件实例初始化时，DOM 尚未创建',
              use: '定义响应式数据、计算属性、注册生命周期；相当于选项式 beforeCreate + created',
            },
          ],
        },
        {
          name: '2. 挂载阶段',
          desc: '模板编译完成，开始把虚拟 DOM 渲染为真实 DOM。',
          hooks: [
            {
              composition: 'onBeforeMount',
              options: 'beforeMount',
              when: '挂载开始前，模板已编译，DOM 还未插入页面',
              use: '极少使用；此时还无法安全操作 DOM',
            },
            {
              composition: 'onMounted',
              options: 'mounted',
              when: '组件挂载完成，DOM 已插入页面',
              use: '请求接口、初始化 ECharts、绑定第三方 DOM 库、访问 ref 元素',
            },
          ],
        },
        {
          name: '3. 更新阶段',
          desc: '响应式数据变化触发重新渲染时执行（每个组件自身更新时触发）。',
          hooks: [
            {
              composition: 'onBeforeUpdate',
              options: 'beforeUpdate',
              when: 'DOM 更新前，能访问更新前的 DOM',
              use: '读取更新前的 DOM 状态；使用较少',
            },
            {
              composition: 'onUpdated',
              options: 'updated',
              when: 'DOM 更新完成后',
              use: '依赖最新 DOM 的操作；避免在其中再改数据导致死循环',
            },
          ],
        },
        {
          name: '4. 卸载阶段',
          desc: '组件从页面移除时执行，是做清理的关键阶段。',
          hooks: [
            {
              composition: 'onBeforeUnmount',
              options: 'beforeUnmount',
              when: '卸载开始前，实例仍完全可用',
              use: '卸载前的最后清理准备',
            },
            {
              composition: 'onUnmounted',
              options: 'unmounted',
              when: '组件卸载完成后',
              use: '清除定时器、取消请求、chart.dispose()、移除事件监听、关闭 WebSocket',
            },
          ],
        },
        {
          name: '5. KeepAlive 缓存组件',
          desc: '组件被 <KeepAlive> 包裹时，切换显示/隐藏不会销毁，而是激活/停用。',
          hooks: [
            {
              composition: 'onActivated',
              options: 'activated',
              when: '被缓存的组件重新显示时',
              use: '刷新过期数据、恢复轮询',
            },
            {
              composition: 'onDeactivated',
              options: 'deactivated',
              when: '被缓存的组件隐藏时',
              use: '暂停定时器、停止动画，避免后台继续消耗资源',
            },
          ],
        },
        {
          name: '6. 错误处理',
          hooks: [
            {
              composition: 'onErrorCaptured',
              options: 'errorCaptured',
              when: '子孙组件抛出错误时',
              use: '统一错误日志、降级 UI；返回 false 可阻止错误继续向上传播',
            },
          ],
        },
        {
          name: '7. 调试（仅开发环境）',
          hooks: [
            {
              composition: 'onRenderTracked',
              options: 'renderTracked',
              when: '渲染依赖被收集时',
              use: '调试响应式依赖追踪',
            },
            {
              composition: 'onRenderTriggered',
              options: 'renderTriggered',
              when: '响应式依赖触发重新渲染时',
              use: '调试是什么数据变化导致了更新',
            },
          ],
        },
      ],
      tips: [
        '大屏 / ECharts：onMounted 里 init，onUnmounted 里 dispose，并移除 resize 监听。',
        '组合式 API 没有 onCreated，初始化逻辑直接写在 setup 顶层即可。',
        'onUpdated 里修改响应式数据可能导致无限更新，需谨慎。',
        '路由切换导致组件销毁时，务必在 onUnmounted 清理副作用，否则内存泄漏。',
      ],
      syntax: {
        title: '具体写法',
        intro: '组合式 API 从 vue 导入 onXxx 函数，在 <script setup> 中直接调用；可写多个钩子，按注册顺序在同一阶段内执行。',
        blocks: [
          {
            title: '创建阶段 — 顶层逻辑（替代 beforeCreate / created）',
            code: `<script setup>
import { ref } from 'vue'

// 直接写在顶层，组件创建时执行
const title = ref('学生画像大屏')
const list = ref([])

async function loadData() {
  const res = await fetch('/api/students')
  list.value = await res.json()
}
// 注意：此时 DOM 还不存在，不能操作 ref 绑定的元素
</script>`,
          },
          {
            title: 'onBeforeMount / onMounted — 挂载前后',
            code: `<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'

const chartRef = ref(null)

onBeforeMount(() => {
  console.log('即将挂载，DOM 还未生成')
})

onMounted(() => {
  // DOM 已就绪，可操作 ref、初始化第三方库
  console.log('已挂载', chartRef.value)
  loadData()
})
</script>

<template>
  <div ref="chartRef"></div>
</template>`,
          },
          {
            title: 'onBeforeUpdate / onUpdated — 数据更新前后',
            code: `<script setup>
import { ref, onBeforeUpdate, onUpdated } from 'vue'

const count = ref(0)

onBeforeUpdate(() => {
  console.log('DOM 更新前，count =', count.value)
})

onUpdated(() => {
  // 可读取更新后的 DOM；避免在这里再次修改 count 导致死循环
  console.log('DOM 更新完成')
})
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>`,
          },
          {
            title: 'onBeforeUnmount / onUnmounted — 卸载清理（必会）',
            code: `<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref(null)
let chart = null
let timer = null

function onResize() {
  chart?.resize()
}

onMounted(() => {
  chart = echarts.init(chartRef.value)
  chart.setOption({ /* ... */ })
  timer = setInterval(() => { /* 轮询 */ }, 30000)
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  console.log('即将卸载，还可访问实例')
})

onUnmounted(() => {
  clearInterval(timer)
  window.removeEventListener('resize', onResize)
  chart?.dispose()
  chart = null
})
</script>`,
          },
          {
            title: 'onActivated / onDeactivated — KeepAlive 缓存组件',
            code: `<script setup>
import { onActivated, onDeactivated, ref } from 'vue'

const polling = ref(null)

onActivated(() => {
  // 组件从缓存中重新显示
  polling.value = setInterval(fetchData, 5000)
})

onDeactivated(() => {
  // 组件被隐藏但未销毁
  clearInterval(polling.value)
})
</script>`,
          },
          {
            title: 'onErrorCaptured — 捕获子组件错误',
            code: `<script setup>
import { onErrorCaptured, ref } from 'vue'

const errMsg = ref('')

onErrorCaptured((err, instance, info) => {
  errMsg.value = err.message
  console.error('子组件错误：', err, info)
  return false // 返回 false 阻止错误继续向上冒泡
})
</script>

<template>
  <p v-if="errMsg">出错了：{{ errMsg }}</p>
  <ChildComponent />
</template>`,
          },
          {
            title: '选项式 API 对照写法',
            code: `<script>
export default {
  data() {
    return { count: 0 }
  },
  created() {
    // 初始化数据，无 DOM
  },
  mounted() {
    // DOM 就绪
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {
    // 清理定时器、图表等
  },
  activated() {},    // KeepAlive
  deactivated() {},
  errorCaptured(err) {
    return false
  },
}
</script>`,
          },
        ],
      },
    },
    example: {
      description:
        '下方示例演示挂载与卸载阶段各钩子的触发顺序。点击按钮卸载/重新挂载组件，观察日志变化。',
      files: [
        {
          name: 'src/App.vue',
          content: `<script setup>
import { ref } from 'vue'
import LifecycleDemo from './components/LifecycleDemo.vue'

const show = ref(true)
</script>

<template>
  <button @click="show = !show">{{ show ? '卸载组件' : '重新挂载' }}</button>
  <LifecycleDemo v-if="show" />
</template>`,
        },
        {
          name: 'src/components/LifecycleDemo.vue',
          content: `<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

const count = ref(0)
const logs = ref([])

function addLog(name) {
  logs.value = [...logs.value, new Date().toLocaleTimeString() + ' — ' + name]
}

onBeforeMount(() => addLog('onBeforeMount'))
onMounted(() => addLog('onMounted'))
onBeforeUpdate(() => addLog('onBeforeUpdate'))
onUpdated(() => addLog('onUpdated'))
onBeforeUnmount(() => addLog('onBeforeUnmount'))
onUnmounted(() => addLog('onUnmounted'))

const increment = () => {
  count.value++
}
</script>

<template>
  <p>计数：{{ count }} <button @click="increment">+1 触发更新</button></p>
  <ul class="logs">
    <li v-for="(log, i) in logs" :key="i">{{ log }}</li>
  </ul>
</template>

<style scoped>
.logs {
  margin: 12px 0 0;
  padding-left: 20px;
  font-family: monospace;
  font-size: 13px;
  color: #475569;
}
</style>`,
        },
      ],
    },
    quiz: {
      question: 'ECharts 大屏组件路由切走时，必须在哪里 dispose 图表实例？',
      options: [
        {
          text: 'onUnmounted',
          isCorrect: true,
          steps: [
            '1. onMounted 中 echarts.init',
            '2. onUnmounted 中 chart.dispose()',
            '3. 同时移除 resize 监听和定时器',
            '4. 防止内存泄漏和重复实例',
          ],
        },
        {
          text: 'onCreated',
          isCorrect: false,
          steps: [
            '组合式 API 没有 onCreated',
            '清理工作在 onUnmounted',
          ],
        },
        {
          text: 'onBeforeMount',
          isCorrect: false,
          steps: [
            'beforeMount 时组件尚未挂载',
            '卸载阶段才做 dispose',
          ],
        },
      ],
    },
  },
  {
    id: 'vue-watch',
    category: 'vue',
    title: '侦听器 watch',
    example: {
      description: "watch 监听 ref 变化，执行搜索等副作用。",
      files: [
        {
          name: "src/components/SearchBox.vue",
          content: `<script setup>
import { ref, watch } from 'vue'

const keyword = ref('')
const searchStatus = ref('等待输入')

watch(keyword, (newVal) => {
  searchStatus.value = newVal
    ? '正在搜索：' + newVal
    : '等待输入'
})
</script>

<template>
  <input v-model="keyword" placeholder="输入关键词">
  <p>{{ searchStatus }}</p>
</template>`,
        },
      ],
    },
    quiz: {
      "question": "监听 keyword 变化执行搜索，应使用？",
      "options": [
        {
          "text": "watch(keyword, (newVal) => { ... })",
          "isCorrect": true,
          "steps": [
            "1. import { watch } from \"vue\"",
            "2. const keyword = ref(\"\")",
            "3. watch(keyword, callback)"
          ]
        },
        {
          "text": "computed(keyword, ...)",
          "isCorrect": false,
          "steps": [
            "computed 用于派生数据",
            "副作用用 watch"
          ]
        },
        {
          "text": "keyword.onChange(...)",
          "isCorrect": false,
          "steps": [
            "ref 没有 onChange",
            "用 watch"
          ]
        }
      ]
    },
  },
]
