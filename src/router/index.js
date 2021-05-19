import { createRouter, createWebHistory } from 'vue-router'

import Principal from '../views/Principal.vue'
import Servicio from '../views/Servicio.vue'
import Presupuesto from '../views/Presupuesto.vue'
import Contacto from '../views/Contacto.vue'
import Usuarios from '../views/Usuarios.vue'
import EliminacionUsuario from '../views/EliminacionUsuario.vue'
import ModificarUsuario from '../views/ModificarUsuario.vue'
import ServiciosList from '../views/ServiciosList.vue'
import ModificarServicio from '../views/ModificarServicio.vue'
import PresupuestosList from '../views/PresupuestosList.vue' 
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/:usuario',
    name: 'Principal',
    component: Principal
  },
  {
    path: '/servicio/:usuario',
    name: 'servicio',
    component: Servicio
  },
  {
    path:'/Presupuesto',
    component: Presupuesto
  },
  {
    path:'/Presupuesto/:id/:usuario',
    component: Presupuesto
  },
  {
    path:'/Contacto',
    component:Contacto
  },
  {
    path:'/Contacto/:usuario',
    name: 'Contacto',
    component:Contacto
  },
  {
    path: '/login',
    component: Login
  },
  // Usuarios
  {
    path: '/usuarios/:usuario',
    component: Usuarios
  },
  
  {
    path: '/modificarUsuario/:usuario',
    component: ModificarUsuario
  },
  {
    path: '/eliminacionUsuario/:usuario',
    component: EliminacionUsuario
  },
  // Servicios
  {
    path: '/serviciosList/:usuario',
    component: ServiciosList
  },
  {
    path: '/modificarServicio/:usuario',
    component: ModificarServicio
  },
  
  // Presupuestos
  {
    path: '/listPresupuestos/:usuario',
    component: PresupuestosList
  } 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
