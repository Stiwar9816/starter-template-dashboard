import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ' login',
      component: LoginView,
      meta: {
        layout: 'Default'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'Dashboard',
        requireAuth: true
      },
    }
  ]
})

export default router
