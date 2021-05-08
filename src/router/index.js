import { createRouter, createWebHistory } from 'vue-router'

import Principal from '../views/Principal.vue'
import Servicio from '../views/Servicio.vue'
import Presupuesto from '../views/Presupuesto.vue'
import Contacto from '../views/Contacto.vue'
import Administrador from '../views/Administrador.vue'
import Usuarios from '../components/Usuarios.vue'
import Login from '../components/Login.vue'
import Formulario from '../components/Formulario.vue'
import Pruebas from '../components/Pruebas.vue'

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
    path:'/Presupuesto/:id',
    component: Presupuesto
  },
  {
    path:'/Contacto',
    component:Contacto
  },
  {
    path: '/administrador',
    component: Administrador
  },
  {
    path: '/usuarios',
    component: Usuarios
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/formulario',
    component: Formulario
  },
  {
    path: '/pruebas',
    component: Pruebas
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
