<template>
  <div class="container">
   
     
  </div>

  
</template>


<script>

export default {
    data(){
        return{
          errors: [],
                name: null,
                email: null,
                movie: null

        }
    },

    methods:{

       checkForm: function (e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("El nombre es obligatorio.");
      }
      if (!this.email) {
        this.errors.push('El correo electrónico es obligatorio.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('El correo electrónico debe ser válido.');
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },



    }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/** verde:  color: #42b956; */
.navnav{
  background-color: #080808;
}
.container{

  margin-bottom: 5px;
  color: white;
}

#nav {
  padding: 30px;
  width: 80%;
  height: 120px;
}

#nav a {
  font-weight: bold;
  color: rgb(245, 245, 245);
}
/** verde:  color: #42b983; */
#nav a.router-link-exact-active {
  color: #42b983;
  
}


.cabeza{
    background-color: rgb(87, 90, 90);
}
.menu1{
    background-color: rgb(60, 189, 118);
}
.menu2{
    background-color: rgb(0, 189, 85);
}
.menu3{
    background-color: rgb(0, 189, 85);
}
.menu{
  background-color: #080808;
}
</style>