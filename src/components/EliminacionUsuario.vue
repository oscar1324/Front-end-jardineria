<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <h3 class="text-center"><b>Eliminar Usuarios</b></h3>
                <table class="container-fluid">
                    <tr class="estiloTable1">
                        <th>Username</th>
                        <th>Password</th>
                        <th>Disabled</th> 
                        <th>Eliminación de usuario</th>         
                    </tr>

                    <tr v-for="(cadaUsuario, index) in array" :key="index" class="estiloTable2">
                        <td v-if="cadaUsuario.disabled === 1"><p>{{cadaUsuario.username}}</p></td>
                        <td v-if="cadaUsuario.disabled === 1"><p>{{cadaUsuario.password}}</p></td>
                        <td v-if="cadaUsuario.disabled === 1"><p>{{cadaUsuario.disabled}}</p></td>
                        <td  v-if="cadaUsuario.disabled === 1">
                            <img src="../imagenes/usuario2.jpg" height="40" width="" alt="">
                            <button type="button" class="btn btn-danger" @click="eliminarUsuario(cadaUsuario.username, cadaUsuario.password, cadaUsuario.disabled)" v-if="cadaUsuario.disabled === 1">
                                eliminar
                            </button>
                            
                        </td>
                    </tr>
                </table>
                <div class="alert alert-danger aviso" role="alert" v-if="borrado === true">
                    <h4 class="alert-heading" >Borrado correctamente</h4>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            borrado: false,
            array:[]
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
        eliminarUsuario(username, password, disabled){
            console.log("El usuario a borrar es: " + username +  "/" + password +  "/" + disabled);
            let usuario = {
                username,
                password,
                disabled: 0
            
            }
            console.log("objeto usuario: " , usuario);
            axios.put('http://localhost:8080/jardinrobledo/v1/usuarios/' ,usuario  )
            .catch(response => console.log("Error petición: " + response.status));
            this.borrado = true;
            setTimeout(()=>{
                this.borrado = false;
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
.aviso{margin-top: 10px;}
</style>