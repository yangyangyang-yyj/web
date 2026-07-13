import { interviewLessonsPriority } from './interviewLessonsPriority.js'

const interviewLessonsDebug = [
  {
    id: 'interview-echarts-blank',
    category: 'interview',
    title: 'ECharts 图表空白排查',
    tags: ['大屏', 'ECharts', '调试'],
    question:
      '教育数据大屏上线后，某个 ECharts 柱状图区域一片空白，但接口已返回数据。你会按什么顺序排查？',
    answer: [
      '先看容器是否有宽高：大屏里 div 若 height 为 0，init 后图形不可见；检查父级 flex/grid 是否把高度挤没。',
      '确认 init 时机：必须在 DOM 挂载后（Vue 的 onMounted）再 echarts.init，且 ref 不为 null。',
      '核对 setOption 数据结构：series.data、xAxis.data 是否为空；类型 bar/line 是否缺少坐标轴。',
      '看控制台报错：ECharts 版本不匹配、重复 init 同一 DOM、option 字段拼写错误都会中断渲染。',
      '检查是否被遮挡：z-index、overflow:hidden、透明遮罩层盖住图表区域。',
      '容器尺寸变化后调用 chart.resize()；大屏 scale 缩放后也要在 transition 结束后再 resize。',
    ],
    quiz: {
      question: 'ECharts 最常见「有数据但不显示」的首要检查项是？',
      options: [
        {
          text: '图表容器是否有有效宽高',
          isCorrect: true,
          steps: [
            '1. ECharts 需要容器有明确 width/height',
            '2. 大屏 flex 布局下子元素 height:100% 可能失效',
            '3. 用 DevTools 选中容器看 computed 尺寸',
            '4. 修复后再 init / resize',
          ],
        },
        {
          text: '更换 ECharts 主题',
          isCorrect: false,
          steps: [
            '主题只影响配色，不会让图表完全空白',
            '空白优先查容器尺寸和 init 时机',
            '再查 option 与报错信息',
          ],
        },
        {
          text: '把 type 改成 pie',
          isCorrect: false,
          steps: [
            '改类型不能解决容器无尺寸问题',
            '应先确认 DOM 与数据',
            '再针对性修 option',
          ],
        },
      ],
    },
  },
  {
    id: 'interview-screen-adapt',
    category: 'interview',
    title: '大屏适配方案',
    tags: ['大屏', 'CSS'],
    question:
      '要做 1920×1080 设计稿的教育监管大屏，常见适配方案有哪些？各有什么优缺点？',
    answer: [
      'scale 等比缩放：用 transform: scale() 按窗口与设计稿比例缩放整页，开发快、还原度高；缺点是模糊、事件坐标要处理、小屏可能留白。',
      'vw/vh + rem：按视口比例写尺寸，字体用 rem；灵活但对设计还原要求高，极端比例下组件可能变形。',
      'flex + 百分比网格：适合分区布局（左中右），各区块用 % 分配；需配合 min/max 防止内容挤压。',
      '实战常组合：外层 scale 包一整屏，内层 ECharts 用 resize；或 DataV 自带适配方案。',
      '面试可补充：监听 resize / orientationchange，防抖后统一 chart.resize() 与重新计算 scale。',
    ],
    quiz: {
      question: '最快还原设计稿整屏比例的大屏方案通常是？',
      options: [
        {
          text: '外层 scale 等比缩放',
          isCorrect: true,
          steps: [
            '1. 以 1920×1080 为基准画布',
            '2. scaleX = innerWidth/1920, scaleY = innerHeight/1080',
            '3. 取较小比例保持不变形',
            '4. 缩放后触发图表 resize',
          ],
        },
        {
          text: '全部用 px 写死',
          isCorrect: false,
          steps: [
            '固定 px 无法适配不同分辨率',
            '大屏必须做缩放或响应式',
            'scale/vw 是常见方案',
          ],
        },
        {
          text: '只用 media query 换三套布局',
          isCorrect: false,
          steps: [
            '大屏分辨率种类多，三套不够',
            '监管大屏多为固定比例全屏',
            'scale 或 vw 更常见',
          ],
        },
      ],
    },
  },
  {
    id: 'interview-chart-linkage',
    category: 'interview',
    title: '图表联动与钻取',
    tags: ['大屏', 'ECharts', 'BI'],
    question:
      'JD 要求大屏支持「联动」和「钻取」。前端分别怎么实现？以学生画像大屏为例说明。',
    answer: [
      '联动：多个图表共享筛选状态（如选中某学校、年级）；点击图 A 的柱子，更新全局 store 中的 schoolId，图 B/C 监听变化重新请求或 setOption。',
      'ECharts 实现：chart.on("click", params => emit 事件)；或用 dispatchAction 高亮关联系列；geo 地图联动可用 name 映射同一维度。',
      '钻取：从省 → 市 → 校逐级下钻；维护 breadcrumb 栈，点击上一级 pop 状态并刷新当前层图表。',
      '数据层：每层接口不同或同一接口带 level/parentId；前端缓存已加载层级减少重复请求。',
      '教育场景：学生画像从「全区概览」钻到「单校」再看「班级画像」，指标口径要在 UI 上标注清楚。',
    ],
    quiz: {
      question: '多图表「联动」的核心是？',
      options: [
        {
          text: '共享同一筛选状态并驱动各图表更新',
          isCorrect: true,
          steps: [
            '1. 点击/筛选产生统一参数（地区、时间等）',
            '2. 各图表订阅该状态',
            '3. 重新拉数或 setOption',
            '4. ECharts 用 click 事件 + 全局状态管理',
          ],
        },
        {
          text: '把所有图表合并成一个 series',
          isCorrect: false,
          steps: [
            '多指标多图表不会合并成一个 series',
            '联动靠状态与事件',
            '各图保持独立实例',
          ],
        },
        {
          text: '只改图表颜色',
          isCorrect: false,
          steps: [
            '颜色变化不是联动',
            '联动是数据与筛选同步',
            '如选中学科后各图只显示该学科',
          ],
        },
      ],
    },
  },
  {
    id: 'interview-realtime-data',
    category: 'interview',
    title: '实时数据更新',
    tags: ['大屏', '调试'],
    question:
      '教学质量监控大屏要求「实时或准实时」更新，前端轮询和 WebSocket 怎么选？要注意什么？',
    answer: [
      '轮询：实现简单，定时器 + fetch；适合分钟级更新；注意 clearInterval、页面隐藏时暂停、接口失败退避重试。',
      'WebSocket：适合秒级推送；要处理断线重连、心跳、鉴权 token 过期；大屏长时间挂着必须防内存涨。',
      'ECharts 更新：用 setOption(newOption, { notMerge: false }) 做增量；只变 data 时不要 destroy 重建实例。',
      '性能：同时 10+ 图表轮询会打爆接口；可后端聚合一个 dashboard 接口，或 WebSocket 一次推全量摘要。',
      '调试：Network 看轮询频率；WS 在 Application → Frames 看消息；Vue 里用 onUnmounted 清定时器和 close WS。',
    ],
    quiz: {
      question: '大屏长时间运行，定时器最必须做的是？',
      options: [
        {
          text: '组件销毁时 clearInterval / 关闭 WebSocket',
          isCorrect: true,
          steps: [
            '1. onUnmounted 清理定时器',
            '2. ws.close() 并移除监听',
            '3. 否则路由切换后仍在请求',
            '4. 会导致内存泄漏和重复渲染',
          ],
        },
        {
          text: '把间隔设为 0 提高实时性',
          isCorrect: false,
          steps: [
            '0ms 轮询会压垮浏览器和接口',
            '应按业务设合理间隔',
            '秒级用 WS 更合适',
          ],
        },
        {
          text: '每次更新都 dispose 再 init 图表',
          isCorrect: false,
          steps: [
            '频繁销毁重建性能差',
            '用 setOption 更新数据即可',
            'dispose 只在组件卸载时',
          ],
        },
      ],
    },
  },
  {
    id: 'interview-resize-performance',
    category: 'interview',
    title: '大屏性能优化',
    tags: ['大屏', 'ECharts', '调试'],
    question:
      '一个页面有十几个 ECharts 图表，切换 tab 或窗口缩放时明显卡顿，如何优化？',
    answer: [
      '懒加载：非当前 tab 的图表先不 init，切换时再初始化；离开 tab 可 dispose 释放 WebGL/Canvas。',
      'resize 防抖：window resize 时 200ms 防抖后批量 chart.resize()，不要每个图表绑独立无防抖监听。',
      '简化 option：关闭 animation、减少 markPoint/markLine、大数据用 sampling 或 dataZoom。',
      '按需渲染：地图下钻到区级再加载 geo JSON，不要一次加载全国精细边界。',
      'DevTools Performance 录屏看 Layout/Paint 瓶颈；若 CPU 高，查是否同时 十几个 setOption 带全量动画。',
    ],
    quiz: {
      question: '多图表窗口缩放卡顿，首选优化是？',
      options: [
        {
          text: 'resize 事件防抖 + 批量 resize',
          isCorrect: true,
          steps: [
            '1. 一个 debounced handler 统一处理',
            '2. 遍历 chart 实例调用 resize',
            '3. 避免 resize 风暴',
            '4. 配合 tab 懒加载效果更好',
          ],
        },
        {
          text: '把所有图表改成 3D',
          isCorrect: false,
          steps: [
            '3D 更耗性能',
            '应先减 resize 和渲染次数',
            '再考虑简化 option',
          ],
        },
        {
          text: '禁用浏览器硬件加速',
          isCorrect: false,
          steps: [
            '硬件加速通常有助于 Canvas',
            '应减少不必要的重绘',
            '用 Performance 面板定位',
          ],
        },
      ],
    },
  },
  {
    id: 'interview-devtools-network',
    category: 'interview',
    title: 'Network 接口调试',
    tags: ['调试'],
    question:
      '大屏某个指标一直 loading，Network 里接口状态 200 但页面没数据，怎么查？',
    answer: [
      '看 Response：200 也可能 body 是 { code: 500, msg: "..." }，前端要判断业务 code，不能只看 HTTP 状态。',
      '核对字段路径：接口返回 data.list 但前端读 data.records 会得到 undefined；用 console.log 或断点看解构。',
      'Preview 对比：多个环境（测试/生产）字段名不一致很常见，尤其是教育指标口径变更后。',
      '时序问题：图表 init 在请求回来之前 setOption 了空数据，之后没再更新；检查 async/await 与 watch。',
      '缓存：浏览器缓存或 CDN 旧数据；Network 勾选 Disable cache 复测。',
    ],
    quiz: {
      question: 'HTTP 200 但大屏无数据，首先应检查？',
      options: [
        {
          text: '响应体业务 code 与数据字段路径',
          isCorrect: true,
          steps: [
            '1. 打开 Network → 选中请求 → Preview',
            '2. 看 code/success 是否为成功',
            '3. 核对前端取值路径',
            '4. 确认 setOption 在数据到达后执行',
          ],
        },
        {
          text: '重装 node_modules',
          isCorrect: false,
          steps: [
            '这是运行时数据问题',
            '与依赖安装无关',
            '应查接口响应与前端逻辑',
          ],
        },
        {
          text: '换一台显示器',
          isCorrect: false,
          steps: [
            '显示器不影响数据绑定',
            '查 Network 和代码逻辑',
            '关注业务 code 与字段',
          ],
        },
      ],
    },
  },
  {
    id: 'interview-cors',
    category: 'interview',
    title: '跨域问题排查',
    tags: ['调试'],
    question:
      '本地调试大屏时接口报 CORS 错误，控制台提示 Access-Control-Allow-Origin，如何处理和向同事说明？',
    answer: [
      '理解原因：浏览器同源策略阻止了前端域名访问另一域名 API；跟 Postman 能通不矛盾，因为 Postman 不拦 CORS。',
      '正确方案：后端配置 Access-Control-Allow-Origin（生产用具体域名，不用 * 带 cookie）；或通过同源网关/Nginx 反向代理。',
      '开发环境：Vite proxy 把 /api 代理到后端，前端只请求相对路径，浏览器认为同源。',
      '排错：看请求是 simple 还是 preflight（OPTIONS）；缺 Allow-Headers/Methods 也会导致失败。',
      '不要说「让后端关掉 CORS」——实际是加正确的响应头或走代理，生产必须白名单域名。',
    ],
    quiz: {
      question: 'Vite 本地开发解决跨域的常规做法是？',
      options: [
        {
          text: 'server.proxy 代理 API 到后端',
          isCorrect: true,
          steps: [
            '1. vite.config 配置 proxy',
            '2. 前端请求 /api/xxx',
            '3. 开发服务器转发到真实后端',
            '4. 浏览器只看到同源请求',
          ],
        },
        {
          text: '在 index.html 加 meta 标签',
          isCorrect: false,
          steps: [
            'HTML meta 无法绕过 CORS',
            '需代理或后端响应头',
            'Vite proxy 是标准做法',
          ],
        },
        {
          text: '把 axios 的 withCredentials 设为 false',
          isCorrect: false,
          steps: [
            '这不能解决缺少 Allow-Origin',
            'CORS 要服务端或代理处理',
            'withCredentials 还涉及 cookie 策略',
          ],
        },
      ],
    },
  },
  {
    id: 'interview-vue-debug',
    category: 'interview',
    title: 'Vue 数据不更新排查',
    tags: ['调试', 'Vue'],
    question:
      'Vue 3 大屏组件里接口数据已赋值，但模板不刷新，常见原因有哪些？',
    answer: [
      '响应式丢失：用 ref/reactive 包装；直接替换整个对象比改深层非响应式属性更稳；避免把 reactive 对象解构后丢响应性。',
      '改错对象：赋值到局部变量未挂到响应式 state；或 props 只读却试图在子组件直接改 props。',
      '异步时序：await 之后组件已卸载，仍 setState 会警告；用 onUnmounted 标志位或 AbortController。',
      'key 未变导致复用：v-for 列表用唯一 key；路由参数变了但组件复用，需在 watch(route) 里重新拉数。',
      '调试：Vue DevTools 看组件 state；watchEffect 打印；确认模板绑定的变量名与 script 一致。',
    ],
    quiz: {
      question: 'Vue 3 script setup 中，接口返回后界面不更新，优先怀疑？',
      options: [
        {
          text: '数据没有放进 ref/reactive',
          isCorrect: true,
          steps: [
            '1. 普通 let 变量改值不会触发更新',
            '2. 应 const list = ref([])',
            '3. 请求后 list.value = res.data',
            '4. 模板用 list 自动解包',
          ],
        },
        {
          text: '必须改用 Vue 2',
          isCorrect: false,
          steps: [
            'Vue 3 响应式正常够用',
            '先查是否用了 ref/reactive',
            '再查异步与 key',
          ],
        },
        {
          text: '删除 node_modules',
          isCorrect: false,
          steps: [
            '这是响应式使用问题',
            '与依赖无关',
            '用 DevTools 看 state 变化',
          ],
        },
      ],
    },
  },
  {
    id: 'interview-memory-leak',
    category: 'interview',
    title: '内存泄漏排查',
    tags: ['调试', '大屏'],
    question:
      '监管大屏要 7×24 小时展示，运行几小时后浏览器变卡，如何排查内存泄漏？',
    answer: [
      'Chrome Memory：Heap snapshot 对比前后两次快照，看 Detached DOM、闭包、重复的 ECharts 实例。',
      '清理副作用：setInterval、setTimeout、addEventListener、WebSocket、ECharts 实例必须在 onUnmounted dispose。',
      '事件泄漏：chart.on("click") 重复绑定未 off；路由切换后旧页面监听仍在。',
      '数据只增不减：实时推送的数组一直 push 不截断；日志缓冲区要设上限。',
      '大屏实践：单页应用长时间不刷新，更要严格生命周期清理；可定时 location.reload 作为兜底（需与产品确认）。',
    ],
    quiz: {
      question: 'ECharts 大屏路由切走后仍占内存，应？',
      options: [
        {
          text: 'onUnmounted 中 chart.dispose()',
          isCorrect: true,
          steps: [
            '1. 保存 init 返回的实例',
            '2. 卸载时 dispose',
            '3. 移除 resize 监听',
            '4. 置空引用',
          ],
        },
        {
          text: '把图表 display:none 即可',
          isCorrect: false,
          steps: [
            '隐藏不会释放 Canvas 内存',
            '必须 dispose 实例',
            '并清理定时器',
          ],
        },
        {
          text: '每次隐藏页面关闭浏览器',
          isCorrect: false,
          steps: [
            '不是可行方案',
            '代码层要正确清理',
            'Memory 面板可验证',
          ],
        },
      ],
    },
  },
  {
    id: 'interview-production-white',
    category: 'interview',
    title: '生产环境白屏排查',
    tags: ['调试'],
    question:
      '大屏打包部署后打开白屏，本地 npm run dev 正常，排查思路是什么？',
    answer: [
      '先看控制台：JS 报错（路径 404、未定义变量）、资源加载失败；Sources 看是否 source map 定位到源码行。',
      '资源路径：Vite 的 base 配置与 Nginx 子路径不一致会导致 chunk 404；检查 index.html 里 script 路径。',
      '环境变量：import.meta.env 生产值与开发不同，API 地址错误可能导致首屏逻辑 throw。',
      '兼容性：生产构建目标过高，旧版 Chromium（部分大屏盒子）不支持可选链等语法，需配置 build.target。',
      'Network 过滤 JS/CSS 是否全 200；空白页常是入口 bundle 未加载成功。',
    ],
    quiz: {
      question: '部署子路径 /dashboard/ 后白屏，最可能原因是？',
      options: [
        {
          text: 'Vite base 未设为 /dashboard/',
          isCorrect: true,
          steps: [
            '1. 资源仍从根路径 /assets/ 加载',
            '2. 实际应在 /dashboard/assets/',
            '3. vite.config base: "/dashboard/"',
            '4. 或 Nginx 配置对应 alias',
          ],
        },
        {
          text: '显示器分辨率太低',
          isCorrect: false,
          steps: [
            '分辨率不会导致 JS 不执行',
            '白屏先看控制台和资源 404',
            'base 路径是常见坑',
          ],
        },
        {
          text: 'ECharts 主题未注册',
          isCorrect: false,
          steps: [
            '主题问题通常只影响样式',
            '白屏多是入口 JS 加载失败',
            '查 Network 与 base 配置',
          ],
        },
      ],
    },
  },
  {
    id: 'interview-datav-echarts',
    category: 'interview',
    title: 'DataV 与 ECharts 配合',
    tags: ['大屏', 'DataV', 'ECharts'],
    question:
      'JD 提到 DataV 和 ECharts，实际项目里两者如何分工与配合？',
    answer: [
      'DataV：偏大屏装饰与布局（边框、数字翻牌、飞线地图容器）；快速搭视觉框架。',
      'ECharts：偏真实数据图表（柱状、折线、饼图、地图数据层）；交互与配置项更丰富。',
      '配合方式：DataV 做外壳面板，内部 div 挂载 ECharts；统一深色背景与主色，ECharts 配透明背景融入。',
      '注意层级：DataV 装饰 z-index 不要挡住图表 mouse 事件；图表区域 pointer-events 保持 auto。',
      'Vue3 可用 datav-vue3 等库，图表仍建议 ECharts 5，按需引入减小体积。',
    ],
    quiz: {
      question: '复杂数据交互（钻取、legend 切换）更适合用？',
      options: [
        {
          text: 'ECharts',
          isCorrect: true,
          steps: [
            '1. ECharts 事件与 option 生态成熟',
            '2. DataV 偏展示装饰',
            '3. 真实指标图用 ECharts',
            '4. DataV 做边框和动效',
          ],
        },
        {
          text: '纯 CSS 动画',
          isCorrect: false,
          steps: [
            'CSS 无法承载复杂图表交互',
            '数据可视化用 ECharts',
            'CSS 做辅助动效',
          ],
        },
        {
          text: '只用 DataV 数字翻牌',
          isCorrect: false,
          steps: [
            '翻牌适合 KPI 数字',
            '钻取等多维分析靠 ECharts',
            '两者组合使用',
          ],
        },
      ],
    },
  },
  {
    id: 'interview-ui-edu',
    category: 'interview',
    title: '教育大屏 UI 设计',
    tags: ['大屏', 'UI'],
    question:
      '设计「学生画像」「教学质量监测」类教育大屏，UI 和交互上要注意什么？',
    answer: [
      '信息层级：左上或中部放核心 KPI（在校生、升学率、预警数），次要指标放两侧，避免满屏同等权重数字。',
      '配色：深色底 + 1～2 个主色（蓝/青）+ 告警用橙红；教育政务风避免花哨荧光色过多。',
      '指标口径：副标题标注统计范围、学年、数据来源；钻取后 breadcrumb 标明当前层级，防止误读。',
      '动效克制：数字滚动、边框光效点缀即可；过多动画分散领导汇报时的阅读注意力。',
      '可读性：4K 远观时字号不能太小；对比度达标；tooltip 简短，详情放二级页或侧边抽屉。',
    ],
    quiz: {
      question: '教育监管大屏最核心的 UI 原则是？',
      options: [
        {
          text: '核心指标突出、口径清晰、远距可读',
          isCorrect: true,
          steps: [
            '1. KPI 视觉层级最高',
            '2. 标注时间与范围',
            '3. 字号对比度适配远观',
            '4. 动效服务理解不炫技',
          ],
        },
        {
          text: '图表越多越好',
          isCorrect: false,
          steps: [
            '信息过载降低决策效率',
            '精选关键指标',
            '留白也是设计',
          ],
        },
        {
          text: '全部用饼图',
          isCorrect: false,
          steps: [
            '图表类型应匹配数据关系',
            '趋势用折线、对比用柱形',
            '饼图适合占比少的场景',
          ],
        },
      ],
    },
  },
  {
    id: 'interview-sourcemap',
    category: 'interview',
    title: 'Source Map 调试',
    tags: ['调试'],
    question:
      '生产环境报错只显示压缩后的行号，如何用 Source Map 快速定位问题？',
    answer: [
      '构建时生成 source map（Vite build.sourcemap: true 或 hidden）；生产可选择 hidden 不把 map 暴露给公众，仅内网部署。',
      'Chrome Sources：开启后报错栈可映射到 .vue/.ts 源文件；点击链接直达对应行。',
      'Sentry 等平台：上传 map 文件，线上错误自动还原栈；注意 map 含源码需权限控制。',
      '若无 map：根据 chunk 名和 module 哈希猜业务模块；结合最近发版 diff 缩小范围。',
      '面试态度：生产调试要有 map 或完善日志，不能长期靠 console.log 猜。',
    ],
    quiz: {
      question: 'Source Map 的主要作用是？',
      options: [
        {
          text: '把压缩代码的报错映射回源码位置',
          isCorrect: true,
          steps: [
            '1. 构建产物是 bundle.min.js',
            '2. map 记录行列对应关系',
            '3. DevTools 显示 App.vue 行号',
            '4. 加快生产问题定位',
          ],
        },
        {
          text: '加快网页加载速度',
          isCorrect: false,
          steps: [
            'map 文件额外体积',
            '用于调试非加速',
            '可用 hidden 避免公开',
          ],
        },
        {
          text: '加密业务代码',
          isCorrect: false,
          steps: [
            'map 反而暴露源码结构',
            '需控制 map 访问权限',
            '不是加密手段',
          ],
        },
      ],
    },
  },
  {
    id: 'interview-css-layout',
    category: 'interview',
    title: '大屏布局错乱调试',
    tags: ['调试', 'CSS', '大屏'],
    question:
      '大屏某块区域内容溢出、图表被裁切，如何用 DevTools 调试 CSS 布局？',
    answer: [
      'Elements + Computed：看 width/height、flex 子项 flex-shrink、overflow 是否 hidden。',
      'Flex/Grid 高亮：Chrome Layout 面板显示 flex 线与网格轨道，查是否 align 导致高度为 0。',
      '盒模型：padding 把内容区挤没；border-box 与 content-box 混用会造成尺寸意外。',
      '百分比高度陷阱：子元素 height:100% 要求父级有明确高度；大屏容器链上要每层都有高。',
      '临时调试：给可疑容器 outline:1px solid red；修好后用 chart.resize() 验证图表区域。',
    ],
    quiz: {
      question: '子元素 height:100% 不生效，通常因为？',
      options: [
        {
          text: '父元素没有明确高度',
          isCorrect: true,
          steps: [
            '1. 百分比高度相对父级计算',
            '2. 父级 height:auto 则无效',
            '3. 给父级固定高或 flex:1',
            '4. 大屏常见 flex 列布局要设 min-height:0',
          ],
        },
        {
          text: '没写 !important',
          isCorrect: false,
          steps: [
            '!important 不能解决百分比参照问题',
            '关键是父级高度',
            '查 flex 与 overflow',
          ],
        },
        {
          text: 'ECharts 版本太低',
          isCorrect: false,
          steps: [
            '这是 CSS 布局问题',
            '与 ECharts 版本无关',
            '先修容器尺寸',
          ],
        },
      ],
    },
  },
  {
    id: 'interview-setoption',
    category: 'interview',
    title: 'setOption 更新策略',
    tags: ['ECharts', '大屏'],
    question:
      '大屏数据每 30 秒刷新，ECharts 应该用 setOption 的哪些参数？什么情况下要 dispose 重建？',
    answer: [
      '常规刷新：chart.setOption({ series: [{ data: newData }] })，默认 merge 只更新传入部分。',
      '换图表类型或系列数量大变：setOption(option, { notMerge: true }) 或 dispose 后重新 init，避免旧 series 残留。',
      'lazyUpdate: true 可批量更新后统一绘制，适合一次改多个图表。',
      'replaceMerge: ["series"] 可指定替换整个 series 数组，适合系列动态增删。',
      'dispose 重建场景：切换 entirely 不同 chart 类型、实例已损坏、内存紧张且图表长期不用。',
    ],
    quiz: {
      question: '仅更新柱状图 data 数组，推荐做法是？',
      options: [
        {
          text: 'setOption 只传变化的 series.data（默认 merge）',
          isCorrect: true,
          steps: [
            '1. 保留原 option 结构',
            '2. 只传 { series: [{ data: newData }] }',
            '3. 不必 dispose',
            '4. 性能最好',
          ],
        },
        {
          text: '每次 dispose 再 init',
          isCorrect: false,
          steps: [
            '频繁重建浪费性能',
            '仅数据变用 merge 即可',
            'dispose 用于卸载',
          ],
        },
        {
          text: '修改 DOM innerHTML 清空重画',
          isCorrect: false,
          steps: [
            '会破坏 ECharts 实例',
            '应用 setOption API',
            '不要手动清 DOM',
          ],
        },
      ],
    },
  },
]

export const interviewLessons = [
  ...interviewLessonsPriority,
  ...interviewLessonsDebug,
]
