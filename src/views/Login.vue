<template >
<div class="container">
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 wrapper fadeInDown" >
      <div id="formContent">
        <div class="fadeIn first">
          <img src="../imagenes/usuario2.jpg" id="icon" alt="User Icon" width="100" height="150"/>
        </div>

        <form  action="form" v-on:submit.prevent="login" method="post" id="formularioLogin" role="form">
          <div class="form-group has-success">
            <label class="form-label" for="username">Nombre usuario: </label>
            <input 
            type="text" 
            id="username" 
            class="form-input col-lg-7" 
            placeholder="@Usuario" 
            v-model="user.username" 
            pattern="@.{3,}"
            title="Introduzca presentando el siguiente formato: @Nombre"
            required
          >
          <label class="form-label" for="username">Contraseña:</label>
            <input 
            type="text" 
            id="password" 
            class="form-input col-lg-7" 
            placeholder="Contraseña..." 
            v-model="user.password" 
            required
          >
          </div>
          <div class="alert alert-danger" role="alert" v-if="mostrar === true">
            <h4 class="alert-heading" >Usuario existente, pruebe con otro diferente</h4>
          </div>
          <input type="submit" class="fadeIn fourth" value="Log In">
         <!--  <button type="button" class="btn btn-danger" @click="comprobacion()">comprobar</button> -->
        </form>

      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Login',
  data(){
    return{
      UsuarioRegistrado:false,
      array:[],
      username: '',
      editedPassword: null,
      mostrar:false,
      user: {
        username: '',
        password: null,
        disabled: 1
        },
      }
    },

    created(){
      axios.get("http://localhost:8080/jardinrobledo/v1/usuarios")
      .then( response => {
        this.array = response.data;
        this.array.sort(((a,b) => b.nombre - a.nombre));
      })
      .catch(response => alert("Error petición obtener: " + response.status));
    },
    methods:{
    login(){
      axios.post('http://localhost:8080/jardinrobledo/v1/usuarios/', this.user)
      .then( response =>{
        this.$router.replace(`/${this.user.username}`) // Preguntar miercoles
      })
      .catch(response => console.log("Error petición insertar: " + response.status));
      this.$router.push({
      params:{
        usuario: this.user.username,
        }
      });
      }
    } 
}
</script>

<style scoped>
html {
  background-color: #56baed;
}

body {
  font-family: "Poppins", sans-serif;
  height: 100vh;
}

a {
  color: #92badd;
  display:inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display:inline-block;
  margin: 40px 8px 10px 8px; 
  color: #cccccc;
}

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  height: 800px;
  min-height: 100%;
  padding: 20px;
  background-image: url(https://i.pinimg.com/originals/32/59/b4/3259b419f4e8f069b2fd6aefb9f15ae0.jpg);
  margin-bottom: 10px;
   border-radius: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}
input[type=button], input[type=submit], input[type=reset]  {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
  background-color: #39ace7;
}

input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type=text] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type=text]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type=text]:placeholder {
  color: #cccccc;
}
/* ANIMACIONES */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

.fadeIn {
  opacity:0;
  -webkit-animation:fadeIn ease-in 1;
  -moz-animation:fadeIn ease-in 1;
  animation:fadeIn ease-in 1;

  -webkit-animation-fill-mode:forwards;
  -moz-animation-fill-mode:forwards;
  animation-fill-mode:forwards;

  -webkit-animation-duration:1s;
  -moz-animation-duration:1s;
  animation-duration:1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}
.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}
/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after{
  width: 100%;
}

*:focus {
    outline: none;
} 

#icon {
  width:60%;
}

</style>

