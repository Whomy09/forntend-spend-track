import { createRouter, createWebHistory } from 'vue-router'
import PrincipalView from '../views/PrincipalView/PrincipalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'principal',
      component: PrincipalView
    }
  ]
})

export default router
