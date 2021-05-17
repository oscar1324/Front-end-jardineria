<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <h3 class="text-center"><b>Eliminar Usuarios</b></h3>
                <table class="container-fluid">
                    <tr class="estiloTable1">
                        <th>Username</th>
                        <th>Password</th>
                        <th>Eliminación de usuario</th>         
                    </tr>

                    <tr v-for="(cadaUsuario, index) in array" :key="index" class="estiloTable2">
                        <td v-if="cadaUsuario.disabled === 1"><p>{{cadaUsuario.username}}</p></td>
                        <td v-if="cadaUsuario.disabled === 1"><p>{{cadaUsuario.password}}</p></td>
                        <td  v-if="cadaUsuario.disabled === 1">
                            <button type="button" class="btn btn-danger boton" @click="eliminarUsuario(cadaUsuario.username, cadaUsuario.password, cadaUsuario.disabled)" v-if="cadaUsuario.disabled === 1">
                                eliminar
                            </button>
                            <img src="../imagenes/usuario2.jpg" height="40" width="" alt="">
                            
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
    background-color: rgb(211, 208, 55);
    color: black;
    height: 100%;
    border-radius: 20px;
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
.boton{
    margin-right: 15px;
}
</style>