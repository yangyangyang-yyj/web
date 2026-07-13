<script setup>
defineProps({
  knowledge: { type: Object, required: true },
})

const defaultHeaders = ['组合式 API', '选项式 API', '触发时机', '常见用途']
</script>

<template>
  <section class="knowledge-section">
    <div class="section-header">
      <div class="section-icon">📖</div>
      <div>
        <h2>{{ knowledge.title || '知识点' }}</h2>
        <p v-if="knowledge.intro">{{ knowledge.intro }}</p>
      </div>
    </div>

    <div v-if="knowledge.flow" class="flow-card">
      <div class="flow-label">{{ knowledge.flowLabel || '流程' }}</div>
      <p class="flow-text">{{ knowledge.flow }}</p>
    </div>

    <div
      v-for="(phase, index) in knowledge.phases"
      :key="index"
      class="phase-block"
    >
      <h3 class="phase-title">{{ phase.name }}</h3>
      <p v-if="phase.desc" class="phase-desc">{{ phase.desc }}</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th v-for="(h, hi) in (knowledge.tableHeaders || defaultHeaders)" :key="hi">{{ h }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(hook, i) in phase.hooks" :key="i">
              <td><code>{{ hook.composition }}</code></td>
              <td><code>{{ hook.options || '—' }}</code></td>
              <td>{{ hook.when }}</td>
              <td>{{ hook.use }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="knowledge.syntax" class="syntax-section">
      <h3 class="syntax-heading">{{ knowledge.syntax.title }}</h3>
      <p v-if="knowledge.syntax.intro" class="syntax-intro">{{ knowledge.syntax.intro }}</p>
      <div
        v-for="(block, index) in knowledge.syntax.blocks"
        :key="index"
        class="syntax-block"
      >
        <div class="syntax-block-title">{{ block.title }}</div>
        <pre class="syntax-code"><code>{{ block.code }}</code></pre>
      </div>
    </div>

    <ul v-if="knowledge.tips?.length" class="tips-list">
      <li v-for="(tip, i) in knowledge.tips" :key="i">{{ tip }}</li>
    </ul>
  </section>
</template>

<style scoped>
.knowledge-section {
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
  background: #d1fae5;
  font-size: 1rem;
  flex-shrink: 0;
}

.section-header h2 {
  margin: 0;
  font-size: 1.12rem;
  font-weight: 700;
  color: var(--text-primary);
}

.section-header p {
  margin: 8px 0 0;
  color: var(--text-secondary);
  font-size: 0.92rem;
  line-height: 1.7;
  max-width: 72ch;
}

.flow-card {
  margin-bottom: 22px;
  padding: 16px 18px;
  background: linear-gradient(135deg, #ecfdf5, #f0f9ff);
  border: 1px solid #bbf7d0;
  border-radius: var(--radius-md);
}

.flow-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #047857;
  margin-bottom: 8px;
}

.flow-text {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  line-height: 1.8;
  color: #334155;
  word-break: break-word;
}

.phase-block {
  margin-bottom: 22px;
}

.phase-block:last-of-type {
  margin-bottom: 0;
}

.phase-title {
  margin: 0 0 6px;
  font-size: 0.98rem;
  font-weight: 700;
  color: var(--text-primary);
}

.phase-desc {
  margin: 0 0 12px;
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.table-wrap {
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.84rem;
}

th {
  padding: 11px 14px;
  text-align: left;
  background: var(--bg-muted);
  color: var(--text-secondary);
  font-weight: 600;
  border-bottom: 1px solid var(--border);
  white-space: nowrap;
}

td {
  padding: 11px 14px;
  border-bottom: 1px solid var(--border);
  color: var(--text-primary);
  line-height: 1.55;
  vertical-align: top;
}

tr:last-child td {
  border-bottom: none;
}

code {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: #047857;
  background: #ecfdf5;
  padding: 2px 6px;
  border-radius: 4px;
}

.syntax-section {
  margin-top: 24px;
  padding-top: 22px;
  border-top: 1px solid var(--border);
}

.tips-list {
  margin: 22px 0 0;
  padding: 16px 18px 16px 36px;
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: var(--radius-md);
  color: #92400e;
  font-size: 0.88rem;
  line-height: 1.7;
}

.tips-list li + li {
  margin-top: 6px;
}

.syntax-heading {
  margin: 0 0 8px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
}

.syntax-intro {
  margin: 0 0 16px;
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.65;
}

.syntax-block {
  margin-bottom: 16px;
}

.syntax-block:last-child {
  margin-bottom: 0;
}

.syntax-block-title {
  margin-bottom: 8px;
  font-size: 0.86rem;
  font-weight: 600;
  color: #047857;
}

.syntax-code {
  margin: 0;
  padding: 16px 18px;
  background: var(--bg-code);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  overflow-x: auto;
  max-height: 360px;
}

.syntax-code code {
  display: block;
  padding: 0;
  background: none;
  color: #dbe4f5;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  line-height: 1.7;
  white-space: pre;
}

@media (max-width: 768px) {
  .knowledge-section {
    padding: 18px;
  }

  th, td {
    padding: 9px 10px;
    font-size: 0.78rem;
  }
}
</style>
