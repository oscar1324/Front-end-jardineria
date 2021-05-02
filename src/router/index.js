import { createRouter, createWebHistory } from 'vue-router'

import Principal from '../views/Principal.vue'
import Servicio from '../views/Servicio.vue'
import Presupuesto from '../views/Presupuesto.vue'
import Contacto from '../views/Contacto.vue'
import Administrador from '../views/Administrador.vue'

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: Principal
  },
  {
    path: '/servicio',
    component: Servicio
  },
  {
    path:'/Presupuesto',
    component: Presupuesto
  },
  {
    path:'/Contacto',
    component:Contacto
  },
  {
    path: '/administrador',
    component: Administrador
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
