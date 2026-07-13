<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  lessons: { type: Array, required: true },
})

const route = useRoute()
const router = useRouter()

const activeId = computed(() => route.params.id)

const groups = [
  { key: 'html', label: 'HTML', dotClass: 'html-dot' },
  { key: 'css', label: 'CSS', dotClass: 'css-dot' },
  { key: 'css3', label: 'CSS3', dotClass: 'css3-dot' },
  { key: 'js', label: 'JavaScript', dotClass: 'js-dot' },
  { key: 'vue', label: 'Vue', dotClass: 'vue-dot' },
  { key: 'echarts', label: 'ECharts', dotClass: 'echarts-dot' },
  { key: 'datav', label: 'DataV', dotClass: 'datav-dot' },
  { key: 'interview', label: '面试题', dotClass: 'interview-dot' },
]

const expanded = ref({
  html: false,
  css: false,
  css3: false,
  js: false,
  vue: false,
  echarts: false,
  datav: false,
  interview: false,
})

const lessonsByCategory = computed(() => {
  const map = {}
  for (const g of groups) {
    map[g.key] = props.lessons.filter((l) => l.category === g.key)
  }
  return map
})

function toggleGroup(key) {
  expanded.value[key] = !expanded.value[key]
}

function selectLesson(id, category) {
  expanded.value[category] = true
  router.push({ name: 'lesson', params: { id } })
}
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-glow" aria-hidden="true" />

    <div class="sidebar-header">
      <div class="logo-mark">&lt;/&gt;</div>
      <div>
        <h1>前端学习手册</h1>
        <p>HTML · CSS · JS · Vue · ECharts · DataV</p>
      </div>
    </div>

    <nav class="sidebar-nav">
      <div
        v-for="(group, index) in groups"
        :key="group.key"
        class="nav-group"
        :class="{ 'has-border': index > 0 }"
      >
        <button
          class="nav-group-title"
          :aria-expanded="expanded[group.key]"
          @click="toggleGroup(group.key)"
        >
          <span class="chevron" :class="{ collapsed: !expanded[group.key] }">›</span>
          <span class="dot" :class="group.dotClass" />
          {{ group.label }}
          <span class="count">{{ lessonsByCategory[group.key].length }}</span>
        </button>

        <div v-show="expanded[group.key]" class="nav-items">
          <button
            v-for="lesson in lessonsByCategory[group.key]"
            :key="lesson.id"
            class="nav-item"
            :class="{ active: lesson.id === activeId }"
            @click="selectLesson(lesson.id, group.key)"
          >
            {{ lesson.title }}
          </button>
        </div>
      </div>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  position: relative;
  width: 272px;
  min-width: 272px;
  height: 100%;
  flex-shrink: 0;
  background: var(--sidebar-bg);
  color: var(--sidebar-text);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-right: 1px solid var(--sidebar-border);
}

.sidebar-glow {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: rgb(196 181 253 / 0.35);
  filter: blur(36px);
  pointer-events: none;
}

.sidebar-header {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 26px 20px 20px;
  border-bottom: 1px solid var(--sidebar-border);
}

.logo-mark {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  background: rgb(255 255 255 / 0.85);
  color: var(--sidebar-accent);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 600;
  flex-shrink: 0;
  border: 1px solid rgb(124 77 255 / 0.15);
  box-shadow: 0 2px 8px rgb(124 77 255 / 0.08);
}

.sidebar-header h1 {
  margin: 0;
  font-size: 1.02rem;
  font-weight: 700;
  color: var(--sidebar-heading);
  letter-spacing: -0.01em;
}

.sidebar-header p {
  margin: 3px 0 0;
  font-size: 0.78rem;
  color: var(--sidebar-muted);
}

.sidebar-nav {
  position: relative;
  z-index: 1;
  flex: 1;
  overflow-y: auto;
  padding: 14px 12px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-group {
  display: flex;
  flex-direction: column;
}

.nav-group.has-border {
  padding-top: 8px;
  border-top: 1px solid var(--sidebar-border);
}

.nav-group-title {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 10px;
  border: none;
  border-radius: var(--radius-sm);
  background: transparent;
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--sidebar-muted);
  cursor: pointer;
  transition: background var(--transition), color var(--transition);
}

.nav-group-title:hover {
  background: var(--sidebar-surface);
  color: var(--sidebar-heading);
}

.chevron {
  display: inline-flex;
  width: 14px;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--sidebar-muted);
  transform: rotate(90deg);
  transition: transform 0.2s var(--ease-out);
  flex-shrink: 0;
}

.chevron.collapsed {
  transform: rotate(0deg);
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.html-dot { background: #3b82f6; }
.css-dot { background: #7c3aed; }
.css3-dot { background: #c084fc; }
.js-dot { background: #f59e0b; }
.vue-dot { background: #42b883; }
.echarts-dot { background: #e4393c; }
.datav-dot { background: #06b6d4; }
.interview-dot { background: #f59e0b; }

.count {
  margin-left: auto;
  padding: 1px 7px;
  border-radius: var(--radius-full);
  background: rgb(255 255 255 / 0.65);
  border: 1px solid var(--sidebar-border);
  font-size: 0.66rem;
  font-weight: 600;
  color: var(--sidebar-muted);
}

.nav-items {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 2px 0 4px 22px;
}

.nav-item {
  display: block;
  width: 100%;
  padding: 9px 12px;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--sidebar-text);
  font-family: var(--font-sans);
  font-size: 0.87rem;
  text-align: left;
  cursor: pointer;
  transition:
    background var(--transition),
    color var(--transition),
    border-color var(--transition);
}

.nav-item:hover {
  background: var(--sidebar-surface);
  color: var(--sidebar-heading);
}

.nav-item.active {
  background: rgb(255 255 255 / 0.88);
  border-color: rgb(124 77 255 / 0.2);
  color: var(--sidebar-accent);
  font-weight: 600;
  box-shadow: 0 2px 10px rgb(124 77 255 / 0.1);
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    min-width: unset;
    height: auto;
    max-height: 38vh;
    border-right: none;
    border-bottom: 1px solid var(--sidebar-border);
  }

  .sidebar-header {
    padding: 14px 16px;
  }
}
</style>
