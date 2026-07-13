<script setup>
import { ref } from 'vue'

defineProps({
  tags: { type: Array, default: () => [] },
  question: { type: String, required: true },
  answer: { type: Array, required: true },
})

const showAnswer = ref(false)
</script>

<template>
  <section class="interview-section">
    <div class="section-header">
      <div class="section-icon">01</div>
      <div>
        <h2>面试题</h2>
        <p>先自己组织答案，再展开查看参考要点</p>
      </div>
    </div>

    <div class="tags" v-if="tags.length">
      <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
    </div>

    <div class="question-card">
      <p class="question">{{ question }}</p>
    </div>

    <button class="toggle-btn" @click="showAnswer = !showAnswer">
      {{ showAnswer ? '收起参考答案' : '查看参考答案' }}
    </button>

    <Transition name="answer">
      <div v-if="showAnswer" class="answer-panel">
        <h3>参考回答要点</h3>
        <ol class="answer-list">
          <li v-for="(point, i) in answer" :key="i">{{ point }}</li>
        </ol>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.interview-section {
  background: var(--bg-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-md);
  padding: 24px 28px 28px;
}

.section-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 16px;
}

.section-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  background: #fef3c7;
  color: #b45309;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  flex-shrink: 0;
}

.section-header h2 {
  margin: 0;
  font-size: 1.12rem;
  font-weight: 700;
  color: var(--text-primary);
}

.section-header p {
  margin: 6px 0 0;
  color: var(--text-secondary);
  font-size: 0.92rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 14px;
}

.tag {
  padding: 4px 10px;
  border-radius: var(--radius-full);
  background: #fff7ed;
  border: 1px solid #fed7aa;
  color: #c2410c;
  font-size: 0.72rem;
  font-weight: 600;
}

.question-card {
  padding: 18px 20px;
  background: var(--bg-muted);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
}

.question {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.7;
}

.toggle-btn {
  margin-top: 16px;
  padding: 10px 18px;
  border: 1.5px solid #f59e0b;
  border-radius: var(--radius-md);
  background: #fffbeb;
  color: #b45309;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background var(--transition), box-shadow var(--transition);
}

.toggle-btn:hover {
  background: #fef3c7;
  box-shadow: var(--shadow-sm);
}

.answer-panel {
  margin-top: 18px;
  padding: 20px 22px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: var(--radius-md);
}

.answer-panel h3 {
  margin: 0 0 14px;
  font-size: 0.95rem;
  font-weight: 700;
  color: #166534;
}

.answer-list {
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.answer-list li {
  color: #334155;
  line-height: 1.7;
  font-size: 0.92rem;
}

.answer-enter-active,
.answer-leave-active {
  transition: opacity 0.25s var(--ease-out), transform 0.25s var(--ease-out);
}

.answer-enter-from,
.answer-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
