import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorView from '../views/ErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {title: 'Marvel App'},
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/detail/DetailView.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/history/History.vue')
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorView
    }
  ]
})

export default router
