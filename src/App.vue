<script setup>
import Sidebar from './components/Sidebar.vue'
import { lessons } from './data/lessons.js'
</script>

<template>
  <div class="app">
    <Sidebar :lessons="lessons" />
    <RouterView />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  height: 100%;
  overflow: hidden;
}

@media (max-width: 768px) {
  .app {
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }
}
</style>
