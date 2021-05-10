<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 pegado" >
                <h3 class="text-center"><b>Inserción de Usuario:</b></h3>
                </div>
                <div class="col-lg-10 col-md-10 col-sm-10 formulario">
                    <label>Username:</label>
                    <input type="text" class="form-control col-lg-7" placeholder="Usuario..." v-model="user.username">
                    <label>Contraseña:</label>
                    <input type="text" class="form-control col-lg-7" placeholder="contraseña..." v-model="user.password">
                    <button type="button" class="btn btn-success" @click="insertarUsuario()">Agregar nuevo usuario</button>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 formulario margen">
                    <img src="../imagenes/usuario1.jpg"  width="150" height="150">
                    <p>{{username}}</p>
                </div>
                <div class="alert alert-success" role="alert" v-if="inserccionUsuario === true">
                    <h4 class="alert-heading" >Insertado correctamente</h4>
                </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            inserccionUsuario: false,
            username: '',
            password: '',
            array: [],

            user: {
                username: '',
                password: '',
                disabled: 1
            },
        }
    },
    methods:{
        insertarUsuario(){
            console.log("Objeto usuario: " , this.user)
            axios.post('http://localhost:8080/jardinrobledo/v1/usuarios/', this.user)
            .then( response =>{
                console.log(response);
            })
            .catch(response => console.log("Error petición insertar: " + response.status));

            this.inserccionUsuario =  true;
            setTimeout(()=>{
                this.inserccionUsuario =  false;
            }, 3500);
        },
    }
}
</script>
<style scoped>
.container{
    color: black;
}
.formulario{
    margin-bottom: 15px;
    background-color:rgb(245, 194, 127);
    padding-bottom: 10px;
}

.margenP{
    background-color:rgb(245, 194, 127);
    margin-bottom: 15px;
   
}
.pegado{
    background-color:rgb(245, 194, 127);
}
.botones{
    padding-top: 100px;
    margin-bottom: 15px;
    background-color:rgb(245, 194, 127);
   
}
</style>