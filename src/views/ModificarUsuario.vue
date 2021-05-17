<template>
    <div class="container">
        <div class="row">
            <h3 class="text-center"><b>Usuarios</b></h3>
            <table class="container-fluid">
                <tr class="estiloTable1">
                    <th>Username</th>
                    <th>Password</th>  
                    <th>Modificar</th>         
                </tr>

                <tr v-for="(cadaUsuario, index) in array" :key="index" class="estiloTable2">
                    <td v-if="cadaUsuario.disabled === 1"><b>{{cadaUsuario.username}}</b></td>
                    <td v-if="cadaUsuario.disabled === 1"><p>{{cadaUsuario.password}}</p></td>
                    <td v-if="cadaUsuario.disabled === 1">
                        <button type="button" class="btn btn-primary boton" @click="modificarU(nombre = cadaUsuario.username)">Modificar</button>
                        <img src="../imagenes/usuario2.jpg" height="40" width="" alt="">
                    </td>
                </tr>
            </table>
            <tabla v-if="mostrarFormulario === true" :nombreRecibido="nombre"></tabla>

        </div>
    </div>
</template>

<script>
import tabla from '../components/TablaModificarUsuarios';
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
    components:  {
        tabla
       
    },
    methods:{
        modificarU(nombre){
            console.log("Usuario: " + nombre);
            this.mostrarFormulario = true
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

}
</script>

<style scoped>
.container{
    background-color: rgb(211, 208, 55);
    color: black;
    height: 1000px;
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
.formulario{
    margin-bottom: 15px;
    border:3px solid black;
    border-radius:22px;
    padding: 10px;
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
.boton{
    margin-right: 15px;
}
</style>