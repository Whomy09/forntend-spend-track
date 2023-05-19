import { createRouter, createWebHistory } from 'vue-router'
import PrincipalView from '../views/PrincipalView/PrincipalView.vue'
import PerfilViewVue from '@/views/PerfilView/PerfilView.vue'
import RegistrarGastosView from '@/views/RegistrarGastosView/RegistrarGastosView.vue'

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
    },
    {
      path: '/registro-gastos',
      component: RegistrarGastosView
    }
  ]
})

export default router
