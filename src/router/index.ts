import { createRouter, createWebHistory } from 'vue-router'
import PrincipalView from '../views/PrincipalView/PrincipalView.vue'
import PerfilViewVue from '@/views/PerfilView/PerfilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'principal',
      component: PrincipalView
    },
    {
      path: '/perfil',
      component: PerfilViewVue
    }
  ]
})

export default router
