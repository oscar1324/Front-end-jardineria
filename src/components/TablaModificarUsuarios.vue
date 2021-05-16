<template>
                <form v-on:submit.prevent="modificarUsuario">
                    <h3 class="text-center"><b>Modifiación de Usuario:</b></h3>
                    <div class="col-lg-12 col-md-12 col-sm-12 formulario text-center">
                        <label>Username:</label>
                        <input type="text" class="form-control col-lg-7 text-center" pattern="@.{3,}" required placeholder="@Usuario" v-model="user.username">
                        <label>Contraseña:</label>
                        <input type="text" class="form-control col-lg-7 text-center" placeholder="contraseña..." v-model="user.password" required><br>
                        
                        <input type="submit" class="fadeIn fourth" value="Modificar contraseña ">
                    </div>
                    <div class="alert alert-success" role="alert" v-if="inserccionUsuario === true">
                        <h4 class="alert-heading" >Insertado correctamente</h4>
                    </div> 
                </form>
    
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            inserccionUsuario:false,
            array: [],

            user: {
                username: this.nombreRecibido,
                password: '',
                disabled: 1
            },
        }
    },
    props:['nombreRecibido'],
    methods:{
        modificarUsuario(){
            console.log("datos a cambiar: " + this.user.username + " / " + this.user.password);
            axios.put('http://localhost:8080/jardinrobledo/v1/usuarios/', this.user)
            .then( response =>{
                console.log(response);
            })
            .catch(response => console.log("Error petición modificar: " + response.status));
            this.inserccionUsuario = true;
            setTimeout(()=>{
                this.inserccionUsuario = false;
            }, 3500);
        },

    }
}
</script>
<style scoped>

</style>