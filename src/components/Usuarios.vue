<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h2 style="color:black">jojoo</h2>
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
            array: [],

            user: {
                username: '',
                password: '',
                disabled: 1
            },
            
        }
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

/**background-color: antiquewhite; */
.estiloTable2{
    border: solid black 1px;
    
}
</style>