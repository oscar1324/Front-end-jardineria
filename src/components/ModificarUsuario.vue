<template>
    <div class="container">
        <div class="row">
            <h3 class="text-center"><b>Usuarios</b></h3>
            <table class="container-fluid">
                <tr class="estiloTable1">
                    <th>Username</th>
                    <th>Password</th>
                    <th>Disabled</th>  
                    <th>Foto</th>
                    <th>Modificar</th>         
                </tr>

                <tr v-for="(cadaUsuario, index) in array" :key="index" class="estiloTable2">
                    <td v-if="cadaUsuario.disabled === 1"><p>{{cadaUsuario.username}}</p></td>
                    <td v-if="cadaUsuario.disabled === 1"><p>{{cadaUsuario.password}}</p></td>
                    <td v-if="cadaUsuario.disabled === 1"><p >{{cadaUsuario.disabled}}</p></td>
                    <td v-if="cadaUsuario.disabled === 1">
                        <img src="../imagenes/usuario2.jpg" height="40" width="" alt="">
                    </td>
                    <td v-if="cadaUsuario.disabled === 1">
                        <button type="button" class="btn btn-success" @click=" mostrarFormulario = true">Modificar</button>
                    </td>
                </tr>
            </table>
    
            <div v-if="mostrarFormulario === true" class="col-lg-12">
                <form>
                    <h3 class="text-center"><b>Modifiación de Usuario:</b></h3>
                    <div class="col-lg-12 col-md-12 col-sm-12 formulario">
                        <label>Username:</label>
                        <input type="text" class="form-control col-lg-7" placeholder="Usuario..." v-model="user.username">
                        <label>Contraseña:</label>
                        <input type="text" class="form-control col-lg-7" placeholder="contraseña..." v-model="user.password">
                        <button type="button" class="btn btn-success" @click="modificarUsuario()">Agregar nuevo usuario</button>
                    </div>
                    <div class="alert alert-success" role="alert" v-if="inserccionUsuario === true">
                        <h4 class="alert-heading" >Insertado correctamente</h4>
                    </div> 
 
                </form>
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
            mostrarFormulario: false,
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
    created(){
        axios.get("http://localhost:8080/jardinrobledo/v1/usuarios")
        .then( response => {
            this.array = response.data;
            this.array.sort(((a,b) => b.nombre - a.nombre));
        })
        .catch(response => alert("Error petición obtener: " + response.status));
    },

    updated(){
        axios.get("http://localhost:8080/jardinrobledo/v1/usuarios")
        .then( response => {
            this.array = response.data;
            this.array.sort(((a,b) => b.nombre - a.nombre));
        })
        .catch(response => alert("Error petición obtener: " + response.status));
    },

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
.container{

    color: black;

}
.estiloTable1{
    border: solid white 1px;
    background-color: black;
    color: white;
}
/**background-color: antiquewhite; */
.estiloTable2{
    border: solid black 1px;
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