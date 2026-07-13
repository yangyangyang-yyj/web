<script setup>
import { computed, ref, watch } from 'vue'
import Sidebar from './components/Sidebar.vue'
import LessonExample from './components/LessonExample.vue'
import LessonQuiz from './components/LessonQuiz.vue'
import { lessons } from './data/lessons.js'

const activeId = ref(lessons[0].id)
const mainRef = ref(null)

const activeLesson = computed(() =>
  lessons.find((l) => l.id === activeId.value),
)

const activeIndex = computed(() =>
  lessons.findIndex((l) => l.id === activeId.value) + 1,
)

const categoryLabel = computed(() => {
  const map = { html: 'HTML', css: 'CSS', css3: 'CSS3', js: 'JavaScript' }
  return map[activeLesson.value.category] || 'HTML'
})

watch(activeId, () => {
  mainRef.value?.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>

<template>
  <div class="app">
    <Sidebar
      :lessons="lessons"
      :active-id="activeId"
      @select="activeId = $event"
    />

    <main ref="mainRef" class="main">
      <header class="main-header">
        <div class="header-left">
          <div class="title-row">
            <span class="category-badge" :class="activeLesson.category">
              {{ categoryLabel }}
            </span>
            <h1>{{ activeLesson.title }}</h1>
          </div>
          <p class="lesson-meta">
            第 {{ activeIndex }} / {{ lessons.length }} 课
          </p>
        </div>
        <div class="progress-ring" aria-hidden="true">
          <svg viewBox="0 0 36 36">
            <circle class="ring-bg" cx="18" cy="18" r="15.5" />
            <circle
              class="ring-fill"
              cx="18"
              cy="18"
              r="15.5"
              :style="{ strokeDashoffset: 97.4 - (activeIndex / lessons.length) * 97.4 }"
            />
          </svg>
          <span>{{ Math.round((activeIndex / lessons.length) * 100) }}%</span>
        </div>
      </header>

      <div class="content">
        <LessonExample
          :description="activeLesson.example.description"
          :code="activeLesson.example.code || ''"
          :html="activeLesson.example.html || ''"
          :css="activeLesson.example.css || ''"
          :js="activeLesson.example.js || ''"
          :category="activeLesson.category || 'html'"
        />
        <LessonQuiz :quiz="activeLesson.quiz" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  height: 100%;
  overflow: hidden;
}

.main {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  background:
    radial-gradient(circle at top right, rgb(59 108 244 / 0.06), transparent 28%),
    radial-gradient(circle at 20% 80%, rgb(124 77 255 / 0.05), transparent 24%),
    var(--bg-app);
}

.main-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 28px 40px 20px;
  background: rgb(244 246 250 / 0.88);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgb(227 232 240 / 0.8);
}

.header-left {
  min-width: 0;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.category-badge {
  padding: 5px 11px;
  border-radius: var(--radius-full);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.category-badge.html {
  background: var(--accent-html-soft);
  color: var(--accent-html);
}

.category-badge.css {
  background: var(--accent-css-soft);
  color: var(--accent-css);
}

.category-badge.css3 {
  background: #fae8ff;
  color: #a21caf;
}

.category-badge.js {
  background: #fef3c7;
  color: #b45309;
}

.main-header h1 {
  margin: 0;
  font-size: clamp(1.35rem, 2vw, 1.75rem);
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.lesson-meta {
  margin: 8px 0 0;
  font-size: 0.88rem;
  color: var(--text-muted);
}

.progress-ring {
  position: relative;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
}

.progress-ring svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.ring-bg,
.ring-fill {
  fill: none;
  stroke-width: 3;
}

.ring-bg {
  stroke: var(--border);
}

.ring-fill {
  stroke: var(--accent-html);
  stroke-linecap: round;
  stroke-dasharray: 97.4;
  transition: stroke-dashoffset 0.4s var(--ease-out);
}

.progress-ring span {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--text-secondary);
}

.content {
  padding: 8px 40px 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1120px;
}

@media (max-width: 768px) {
  .app {
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }

  .main {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
  }

  .main-header {
    padding: 18px 18px 14px;
    align-items: flex-start;
  }

  .content {
    padding: 0 18px 24px;
  }

  .progress-ring {
    display: none;
  }
}
</style>
