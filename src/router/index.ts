import { createRouter, createWebHistory } from 'vue-router'
import PrincipalView from '../views/PrincipalView/PrincipalView.vue'
import PerfilViewVue from '@/views/PerfilView/PerfilView.vue'
import RegistrarGastosView from '@/views/RegistrarGastosView/RegistrarGastosView.vue'
import Editarperfil from '@/views/EditarPerfilView/EditarPerfilView.vue'
import PresupuestosView from '@/views/PresupuestosView/PresupuestosView.vue'
import RegistrarPresupuestoView from '@/views/RegistrarPresupuestoView/RegistrarPresupuestoView.vue'
import Login from '@/views/LoginView/LoginView.vue'
import Register from '@/views/RegisterView/RegisterView.vue'

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
    },
    {
      path: '/presupuestos',
      component: PresupuestosView
    },
    {
      path: '/registrar-presupuesto',
      component: RegistrarPresupuestoView
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  const usuario = localStorage.getItem('usuario');
  if (to.path === '/' && !usuario) {
    next('/login')
  } else {
    next()
  }
})

export default router
