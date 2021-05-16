<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 ">              
                <h3 class="text-center"><b>Total usuarios registrados</b></h3>
                <table class="container-fluid">
                    <tr class="estiloTable1">
                        <th>Username</th>
                        <th>Contraseña</th>
                        <th>Foto</th>           
                    </tr>

                    <tr v-for="(cadaUsuario, index) in array" :key="index" class="estiloTable2">
                        <td v-if="cadaUsuario.disabled === 1"><b>{{cadaUsuario.username}}</b></td>
                        <td v-if="cadaUsuario.disabled === 1"><p>{{cadaUsuario.password}}</p></td>
                        <td v-if="cadaUsuario.disabled === 1">
                            <img src="../imagenes/usuario2.jpg" height="40" width="" alt="">
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
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

    methods:{
        sacarUsuarios(){
            axios.get("http://localhost:8080/jardinrobledo/v1/usuarios")
            .then( response => {
                this.array = response.data;
                this.array.sort(((a,b) => b.username - a.username));
                console.log(this.array);
            })
            .catch(response => alert("Error petición obtener: " + response.status));
        },

    }
}
</script>

<style scoped>
.container{
    background-color: rgb(211, 208, 55);
    color: black;
    height: 1000px;

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
</style>