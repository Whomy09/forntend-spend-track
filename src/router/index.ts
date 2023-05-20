import { createRouter, createWebHistory } from 'vue-router'
import PrincipalView from '../views/PrincipalView/PrincipalView.vue'
import PerfilViewVue from '@/views/PerfilView/PerfilView.vue'
import RegistrarGastosView from '@/views/RegistrarGastosView/RegistrarGastosView.vue'
import Editarperfil from '@/views/EditarPerfilView/EditarPerfilView.vue'

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
    },
    {
      path: '/editar-perfil',
      component: Editarperfil
    }
  ]
})

export default router
