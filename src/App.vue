<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 cabeza text-center">
        <h1>JARDINERIA ROBLEDO S.L</h1>
        <img src="./imagenes/flor.jpg" width="80">
        <img src="./imagenes/flor.jpg" width="80">
        <img src="./imagenes/flor.jpg" width="80">
        <img src="./imagenes/flor.jpg" width="80">
        <img src="./imagenes/flor.jpg" width="80">
        <img src="./imagenes/flor.jpg" width="80">
      </div>
      <div class="col-lg-2 col-md-2 col-md-2 col-xs-2 menu text-center">
          <a href="/Principal" class="navbar-brand ">
            <img src="./imagenes/flor.jpg" width="170" height="70" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 imagen">
          </a><br>
          <div class=" nav text-center">
            <router-link to="/Principal" class="paraUsu">Inicio</router-link> <br>     
            <p>.</p>
            <!-- <router-link :to="{ path: 'servicio', params: { usuario: $route.params.usuario }}" class="paraUsu">Servicios</router-link><br> -->
            <router-link to="/servicio/:usuario" class="paraUsu">Servicios</router-link> <br> 
            <router-link to="/Contacto" class="paraUsu">Contacto</router-link>           <br> 
            <router-link to="/login" class="paraUsu">Login</router-link>  
          </div>  
          <hr v-if="$route.params.usuario === '@Administrador'">
          <div class="apartado col-lg-12 col-md-12 col-sm-12" v-if="$route.params.usuario === '@Administrador'">
            <h5 class="enunciado" v-if="$route.params.usuario === '@Administrador'" >Usuarios</h5>
            <router-link v-if="$route.params.usuario === '@Administrador'" to="/usuarios/@Administrador" class="enlace">Listar </router-link> <br> 
            <router-link v-if="$route.params.usuario === '@Administrador'" to="/modificarUsuario/@Administrador" class="enlace">Modificar </router-link> <br> 
            <router-link v-if="$route.params.usuario === '@Administrador'" to="/eliminacionUsuario/@Administrador" class="enlace">Eliminar </router-link> <br> 
          </div>
         
          <hr v-if="$route.params.usuario === '@Administrador'">

          
          <div class=" apartado col-lg-12 col-md-12 col-sm-12" v-if="$route.params.usuario === '@Administrador'">
            <h5 class="enunciado" v-if="$route.params.usuario === '@Administrador'" >Servicios</h5>
            <router-link v-if="$route.params.usuario === '@Administrador'" to="/serviciosList/@Administrador" class="enlace" >Listar </router-link> <br> 
            <router-link v-if="$route.params.usuario === '@Administrador'" to="/modificarServicio/@Administrador" class="enlace">Modificar </router-link> <br> 
          </div>
          
          <hr v-if="$route.params.usuario === '@Administrador'">
          <div class="apartado" v-if="$route.params.usuario === '@Administrador'">
            <h5 class="enunciado" v-if="$route.params.usuario === '@Administrador'">Presupuestos</h5>
            <router-link v-if="$route.params.usuario === '@Administrador'" to="/listPresupuestos/@Administrador" class="enlace">Listar </router-link> <br> 
            <router-link v-if="$route.params.usuario === '@Administrador'" to="/eliminarPresupuesto/@Administrador" class="enlace">Eliminar </router-link>
          </div>
      </div>
      <div class="centro col-lg-10 col-md-10 col-sm-10 col-xs-10 ">
        <router-view></router-view>
      </div>
      <Footer/>
    </div>
  </div>
  
</template>

<script>
import Footer from './views/Footer.vue';
export default {
  data(){
    return{
    
    }
  },
  components: {Footer},
  emits: 'nombreUsuario'
  
}
</script>

<style lang="css" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
.enlace{
  font-size: 5mm;
  color: white;
  text-decoration:none;
}
.enunciado{
   font-family: fantasy;
}
.cabeza{
  margin-top: 10px;
    background-color: #313131;
    color: white;
     border-radius: 20px;
}
.menu{
  margin-top: 10px;
  background-color: #313131;
  margin-bottom: 10px;
   border-radius: 20px;
}
.centro{
   margin-top: 10px;
   margin-bottom: 10px;
  border-radius: 20px;
  
}
.apartado{
  font-size: 170%;
  color: antiquewhite;
    padding: 3px 10px;
  border: PowderBlue 5px solid;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  
}
.imagen{
  margin-right: 5px;
   margin-top: 10px;
}
.paraUsu {
  cursor: pointer;
  color: white;
  font-size: 7mm;
  text-decoration:none;
}
.nav a{
    font-size: 7mm;

  color: white;
}
.nav a.router-link-exact-active {
    font-size: 7mm;
  color: #42b983;
}
</style>


