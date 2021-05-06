<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                                <table class="container-fluid">
                    <tr class="estiloTable1">
                        <th>Username</th>
                        <th>Password</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Calle</th>
                        <th>Modificar</th>
                        <th>Eliminar</th>
                            
                    </tr>

                    <tr v-for="(cadaUsuario, index) in array" :key="index" class="estiloTable2">
                        <td>{{cadaUsuario.username}}</td>
                        <td>{{cadaUsuario.password}}</td>
                        <td>{{cadaUsuario.nombre}}</td>
                        <td>{{cadaUsuario.apellido}}</td>
                        <td>{{cadaUsuario.direccion}}</td>
                        <td>
                            <button type="button" class="btn btn-success" @click="modificarUsuario(cadaUsuario.username)">modificar usuarios</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-danger" @click="eliminarUsuario(cadaUsuario.username)">eliminar</button>
                        </td>
                    
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
                username: '',
                password: '',
                nombre:'',
                enabled: 0,
                apellido:'',
                direccion:'',
            array: [],
            /*
            Revisar, fallo username
                users: {
                username,
                password,
                nombre,
                enabled,
                apellido,
                direccion
            }, */
            usuarioModifciado: {
                username: 'Ingelmo_Avenida',
                password: 'qweasdsf123',
                enabled: 0,
                nombre:'Marcos',
                apellido:'Ingelmo',
                direccion:'Calle la coja'
            }
            
        }
    },

        methods:{
        sacarUsuarios(){
            axios.get("http://localhost:8080/jardinrobledo/v1/usuarios")
            .then( response => {
                this.array = response.data;
                this.array.sort(((a,b) => b.nombre - a.nombre));
                console.log(this.array);
            })
            .catch(response => alert("Error petición obtener: " + response.status));
        },

        insertarUsuario(){
            axios.post('http://localhost:8080/jardinrobledo/v1/usuarios/', this.users)
            .then( response =>{
                console.log(response);
            })
            .catch(response => console.log("Error petición insertar: " + response.status));
            console.log("Jugador añadido: " + this.users);

        },
        // Puedo pensar que saque una tabla con los id ya fijados e inputs a rellenar
        modificarUsuario(){
            axios.put('http://localhost:8080/jardinrobledo/v1/usuarios/', this.users)
            .then( response =>{
                console.log(response);
            })
            .catch(response => console.log("Error petición modificar: " + response.status));
            console.log();
        },
        // error a tratar
        eliminarUsuario(username){
            console.log("El id a borrar es: " + username);
            axios.delete('http://localhost:8080/jardinrobledo/v1/usuarios/' + username)

        }
    }
}
</script>

<style scoped>
.estiloTable1{
   
   
}
/**background-color: antiquewhite; */
.estiloTable2{
    border: solid black 1px;
    
}
</style>