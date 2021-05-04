<template>
    <h1>Administrador: </h1>
    <p>Probando sacando datos:</p>
    <p><b>1) Para insertar Usuario insertar formulario en template.</b></p>
    
    <button type="button" class="btn btn-primary" @click="sacarUsuarios()">Sacar usuarios</button>
      <button type="button" class="btn btn-success" @click="insertarUsuario()">insertar usuarios</button>
        <button type="button" class="btn btn-success" @click="modificarUsuario()">modificar usuarios</button>
          <button type="button" class="btn btn-danger" @click="eliminarUsuario()">eliminar usuarios</button>
    <hr>

    <table class="container-fluid">
        <tr class="estiloTable1">
            <th>Username</th>
            <th>Password</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Calle</th>
            
        </tr>

        <tr v-for="(cadaUsuario, index) in array" :key="index" class="estiloTable2">
            <td>{{cadaUsuario.username}}</td>
            <td>{{cadaUsuario.password}}</td>
            <td>{{cadaUsuario.nombre}}</td>
            <td>{{cadaUsuario.nombre}}</td>
            <td>{{cadaUsuario.direccion}}</td>
      
        </tr>
    </table>
    
  



    

</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            array: [],
            usuario: {
                id:'',
                nombreUsuario: 'Rafa_09',
                contraseña: 'qweasd123',
                nombre:'Rafa',
                apellido:'Benitez',
                dirección:'Calle la corneja'
            },
            usuarioModifciado: {
                id:'',
                nombreUsuario: 'Moscar_45',
                contraseña: 'qweasdsf123',
                nombre:'Moscar',
                apellido:'Benitez',
                dirección:'Calle la coja'
            }
            
        }
    },

    methods:{
        sacarUsuarios(){
            axios.get("http://localhost:8080/jardinrobledo/v1/usuarios")
            .then( response => {
                this.array = response.data;
                console.log(this.array);
            })
            .catch(response => alert("Errores: " + response.status));
        },

        insertarUsuario(){
            axios.post('http://localhost:8080/jardinrobledo/v1/usuarios/', this.usuario)
            .then( response =>{
                console.log(response);
            })
            .catch(response => console.log("Error petición: " + response.status));

        },

        modificarUsuario(){
            axios.put('http://localhost:8080/jardinrobledo/v1/usuarios/', this.usuarioModifciado)
            .then( response =>{
                console.log(response);
            })
            .catch(response => console.log("Error petición: " + response.status));
        },

        eliminarUsuario(){

        }
    }
}
</script>

<style lang="css" scoped>
.estiloTable1{
    border: solid black 1px;
    background-color: antiquewhite;
}
.estiloTable2{
    border: solid black 1px;
}
</style>

