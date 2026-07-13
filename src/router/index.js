import { createRouter, createWebHistory } from 'vue-router'
import { lessons } from '../data/lessons.js'
import LessonView from '../views/LessonView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: () => `/lesson/${lessons[0].id}`,
    },
    {
      path: '/lesson/:id',
      name: 'lesson',
      component: LessonView,
      props: true,
      beforeEnter: (to) => {
        const exists = lessons.some((l) => l.id === to.params.id)
        if (!exists) {
          return `/lesson/${lessons[0].id}`
        }
      },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => `/lesson/${lessons[0].id}`,
    },
  ],
})

export default router
