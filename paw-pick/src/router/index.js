import { createRouter, createWebHashHistory  } from 'vue-router'

import MainPage from '@/components/MainPage.vue'
import CategoriesPage from '@/components/CategoriesPage.vue'
import DetailedPage from '@/components/DetailedPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/categories',
    name: 'CategoriesPage',
    component: CategoriesPage
  },
  {
    path: '/detailed',
    name: 'DetailedPage',
    component: DetailedPage
  },
]

const router = createRouter({
//   history: createWebHistory(),
  history: createWebHashHistory('/paw-pick/'),
  routes
})

export default router