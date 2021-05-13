import { createRouter, createWebHistory } from 'vue-router'

import Principal from '../views/Principal.vue'
import Servicio from '../views/Servicio.vue'
import Presupuesto from '../views/Presupuesto.vue'
import Contacto from '../views/Contacto.vue'
import Administrador from '../views/Administrador.vue'
import Usuarios from '../views/Usuarios.vue'
import InsertarUsuario from '../components/InsertarUsuario.vue'
import EliminacionUsuario from '../components/EliminacionUsuario.vue'
import ModificarUsuario from '../components/ModificarUsuario.vue'
import ServiciosList from '../components/ServiciosList.vue'
import ModificarServicio from '../components/ModificarServicio.vue'
import PresupuestosList from '../components/PresupuestosList.vue' 
import EliminarPresupuesto from '../components/EliminarPresupuesto.vue' 
import Login from '../views/Login.vue'
import Formulario from '../components/Formulario.vue'
import Pruebas from '../components/Pruebas.vue'

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: Principal
  },
  {
    path: '/servicio/:usuario',
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
    path: '/administrador',
    component: Administrador
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
  },
  // Usuarios
  {
    path: '/usuarios',
    component: Usuarios
  },
  {
    path: '/insertarUsuario',
    component: InsertarUsuario
  },
  
  {
    path: '/modificarUsuario',
    component: ModificarUsuario
  },
  {
    path: '/eliminacionUsuario',
    component: EliminacionUsuario
  },
  // Servicios
  {
    path: '/serviciosList',
    component: ServiciosList
  },
  {
    path: '/modificarServicio',
    component: ModificarServicio
  },
  
  // Presupuestos
  {
    path: '/listPresupuestos',
    component: PresupuestosList
  } ,
  {
    path: '/eliminarPresupuesto',
    component: EliminarPresupuesto
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
