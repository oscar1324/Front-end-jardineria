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
        <h3 style="color:white" class="text-center">MENU LATERAL</h3>
          <a href="/Principal" class="navbar-brand ">
            <img src="./imagenes/flor.jpg" width="170" height="70" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
          </a><br>
          <router-link to="/Principal" class="enlace">Inicio</router-link>            <br> 
          <router-link to="/servicio/:usuario" class="enlace">Servicios</router-link> <br> 
          <router-link to="/Presupuesto" class="enlace">Presupuesto</router-link>     <br> 
          <router-link to="/Contacto" class="enlace">Contacto</router-link>           <br> 
          <router-link to="/login" class="enlace">Login</router-link>                 <br> 
          <router-link v-if="$route.params.usuario === '@Administrador'" to="/administrador" class="enlace">Administrador</router-link> 
          <hr>
          <h5 v-if="$route.params.usuario === '@Administrador'" class="apartado">Usuarios:</h5><br>
          <router-link v-if="$route.params.usuario === '@Administrador'" to="/usuarios/@Administrador" class="enlace">Listar </router-link> <br> 
          <router-link v-if="$route.params.usuario === '@Administrador'" to="/modificarUsuario/@Administrador" class="enlace">Modificar </router-link> <br> 
          <router-link v-if="$route.params.usuario === '@Administrador'" to="/eliminacionUsuario/@Administrador" class="enlace">Eliminar </router-link> <br> 
          <hr>
          <h5 class="apartado" v-if="$route.params.usuario === '@Administrador'">Servicios:</h5><br>
          <router-link v-if="$route.params.usuario === '@Administrador'" to="/serviciosList/@Administrador" class="enlace" >Listar </router-link> <br> 
          <router-link v-if="$route.params.usuario === '@Administrador'" to="/modificarServicio/@Administrador" class="enlace">Modificar </router-link> <br> 
          <hr>
          <h5 class="apartado" v-if="$route.params.usuario === '@Administrador'">Presupuestos:</h5><br>
          <router-link v-if="$route.params.usuario === '@Administrador'" to="/listPresupuestos/@Administrador" class="enlace">Listar </router-link> <br> 
          <router-link v-if="$route.params.usuario === '@Administrador'" to="/eliminarPresupuesto/@Administrador" class="enlace">Eliminar </router-link>
      </div>
      <div class=" col-lg-10 col-md-10 col-sm-10 col-xs-10 centro">
        <router-view></router-view>
      </div>
      <Footer/>
    </div>
  </div>
  
</template>

<script>
import Footer from '../src/components/Footer.vue';
export default {
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
  font-size: 150%;
  color: white;
}
.cabeza{
    background-color: rgb(11, 15, 15);
    color: white;
}
.menu{
  margin-top: 10px;
  background-color: #080808;
  margin-bottom: 10px;
}
.centro{
   margin-top: 10px;
   margin-bottom: 10px;
  
}
.apartado{
  font-size: 170%;
  color: antiquewhite;
}
</style>


