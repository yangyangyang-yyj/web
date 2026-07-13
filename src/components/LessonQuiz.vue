<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  quiz: { type: Object, required: true },
})

const selectedIndex = ref(null)

watch(
  () => props.quiz,
  () => {
    selectedIndex.value = null
  },
)
</script>

<template>
  <section class="quiz-section">
    <div class="section-header">
      <div class="section-icon">02</div>
      <div>
        <h2>小测验</h2>
        <p>点击选项查看写出答案的具体步骤</p>
      </div>
    </div>

    <div class="question-card">
      <p class="question">{{ quiz.question }}</p>
    </div>

    <div class="options">
      <button
        v-for="(option, index) in quiz.options"
        :key="index"
        class="option-btn"
        :class="{
          selected: selectedIndex === index,
          correct: selectedIndex === index && option.isCorrect,
          wrong: selectedIndex === index && !option.isCorrect,
        }"
        @click="selectedIndex = index"
      >
        <span class="option-label">{{ String.fromCharCode(65 + index) }}</span>
        <span class="option-text">{{ option.text }}</span>
      </button>
    </div>

    <Transition name="steps">
      <div v-if="selectedIndex !== null" class="steps-panel">
        <div class="steps-header">
          <span
            class="result-badge"
            :class="quiz.options[selectedIndex].isCorrect ? 'badge-correct' : 'badge-wrong'"
          >
            {{ quiz.options[selectedIndex].isCorrect ? '回答正确' : '回答错误' }}
          </span>
          <span class="steps-title">写出答案的具体步骤</span>
        </div>
        <ol class="steps-list">
          <li v-for="(step, i) in quiz.options[selectedIndex].steps" :key="i">
            <span class="step-num">{{ i + 1 }}</span>
            <span>{{ step }}</span>
          </li>
        </ol>
        <p v-if="!quiz.options[selectedIndex].isCorrect" class="hint">
          提示：点击其他选项也可以查看对应步骤，找到正确答案。
        </p>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.quiz-section {
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
  margin-bottom: 20px;
}

.section-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  background: var(--accent-css-soft);
  color: var(--accent-css);
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

.question-card {
  padding: 18px 20px;
  margin-bottom: 18px;
  background: var(--bg-muted);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
}

.question {
  margin: 0;
  font-size: 1.02rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.65;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.option-btn {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 15px 18px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--bg-surface);
  cursor: pointer;
  text-align: left;
  transition:
    border-color var(--transition),
    background var(--transition),
    box-shadow var(--transition),
    transform var(--transition);
}

.option-btn:hover {
  border-color: #b8c8ee;
  background: #f7f9fd;
  box-shadow: var(--shadow-sm);
}

.option-btn:active {
  transform: scale(0.995);
}

.option-btn.selected {
  border-color: var(--accent-html);
  background: var(--accent-html-soft);
  box-shadow: 0 0 0 3px rgb(59 108 244 / 0.1);
}

.option-btn.correct {
  border-color: var(--success);
  background: var(--success-soft);
  box-shadow: 0 0 0 3px rgb(22 163 74 / 0.1);
}

.option-btn.wrong {
  border-color: var(--error);
  background: var(--error-soft);
  box-shadow: 0 0 0 3px rgb(220 38 38 / 0.08);
}

.option-label {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  background: var(--bg-muted);
  color: var(--text-secondary);
  font-weight: 700;
  font-size: 0.82rem;
}

.option-btn.selected .option-label {
  background: var(--accent-html);
  color: #fff;
}

.option-btn.correct .option-label {
  background: var(--success);
  color: #fff;
}

.option-btn.wrong .option-label {
  background: var(--error);
  color: #fff;
}

.option-text {
  font-family: var(--font-mono);
  font-size: 0.88rem;
  color: var(--text-primary);
  line-height: 1.5;
}

.steps-panel {
  margin-top: 20px;
  padding: 20px 22px;
  background: var(--bg-muted);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
}

.steps-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.result-badge {
  padding: 5px 12px;
  border-radius: var(--radius-full);
  font-size: 0.78rem;
  font-weight: 700;
}

.badge-correct {
  background: var(--success-soft);
  color: var(--success);
}

.badge-wrong {
  background: var(--error-soft);
  color: var(--error);
}

.steps-title {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.steps-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.steps-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: var(--text-secondary);
  line-height: 1.65;
}

.step-num {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  background: var(--bg-surface);
  border: 1px solid var(--border);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--text-muted);
}

.hint {
  margin: 16px 0 0;
  padding-top: 14px;
  border-top: 1px dashed var(--border-strong);
  font-size: 0.86rem;
  color: var(--text-muted);
}

.steps-enter-active,
.steps-leave-active {
  transition: opacity 0.25s var(--ease-out), transform 0.25s var(--ease-out);
}

.steps-enter-from,
.steps-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
