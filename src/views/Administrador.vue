<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12  col-md-12  col-sm-12 formulario">
                <h1 class="text-center">Administrador: </h1>
                <h3>Tareas:</h3>
                <p><b>1) Sacar modal para modificaciones o Login nada más iniciar</b></p>
                <p><b>2) Revisar inserción peticiones de usuario/servicios inserción y eliminar</b></p>
                <p><b>3) Sacar ventana o panel con setTime de eliminación o inserción</b></p>
            </div>
            <div class="col-lg-10 col-md-10 col-sm-10 formulario">
                                    
                <h3 class="text-center"><b>Usuarios</b></h3>
                <table class="container-fluid">
                    <tr class="estiloTable1">
                        <th>Username</th>
                        <th>Password</th>
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
            <div class="col-lg-2 col-md-2 col-sm-2 botones" >
                <button type="button" class="btn btn-primary">Añadir usuario</button>
            </div>
            
            
            <!-- SERVICIOS --------------------------------------------------------------------------------->
            <div class="col-lg-12 col-md-12 col-sm-12 formulario">
                <h3 class="text-center"><b>Servicios</b></h3>
                <button type="button" class="btn btn-danger" @click="insertarServicio()">Insertar servicio</button>
                <table class="container-fluid">
                    <tr class="estiloTable1">
                        <th>ID</th>
                        <th>Descripción del servicio</th>
                        <th>Precio m/€</th>
                        <th>Modificar</th>
                        <th>Eliminar</th>
                            
                    </tr>

                    <tr v-for="(cadaServicio, index) in arrayServicios" :key="index" class="estiloTable2">
                        <td>{{cadaServicio.id_servicios}}</td>
                        <td>{{cadaServicio.descripcion_servicio}}</td>
                        <td>{{cadaServicio.precio_metro}}</td>
                        <td>
                            <button type="button" class="btn btn-success" @click="modificarServicio(cadaServicio.id_servicios)">modificar servicio</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-danger" @click="eliminarServicio(cadaServicio.id_servicios)">eliminar</button>
                        </td>
                    
                    </tr>
                </table>
            </div>
            <div class="alert alert-danger" role="alert" v-if="borrado === true">
                <h4 class="alert-heading" >Borrado correctamente</h4>
            </div>

            <div class="col-lg-12 col-md-12 col-sm-12 pegado" >
                <h3 class="text-center"><b>Inserción de Servicio</b></h3>
            </div>
            <div class="col-lg-10 col-md-10 col-sm-10 formulario">
                <label>Descripción servicio:</label>
                <input type="text" class="form-control col-lg-7" placeholder="descripción del nuevo servicio..." v-model="descripcionIntroducida">
                <label>Precio:</label>
                <input type="text" class="form-control col-lg-7" placeholder="precio metro" v-model="precioIntroducido">
                <button type="button" class="btn btn-success" @click="nuevoServicio()">Agregar nuevo servicio</button>
            </div>
            
            <div class="col-lg-2 col-md-2 col-sm-2 formulario margen">
               
                <img src="../imagenes/desbro.jpg"  width="150" height="150">
                 <p>{{username}}</p>
            </div>

            <div class="alert alert-success" role="alert" v-if="aviso === true">
                <h4 class="alert-heading" >Insertado correctamente</h4>
            </div>
            <div class="alert alert-success" role="alert" v-if="modificado === true">
                <h4 class="alert-heading" >Modificado correctamente</h4>
            </div>
            <div class="alert alert-danger" role="alert" v-if="borrado === true">
                <h4 class="alert-heading" >Borrado correctamente</h4>
            </div>

            <!-- Presupuestos  ----------------------------------------------------------------------->
            <div class="col-lg-12 col-md-12 col-sm-12 margenP">
                <h3 class="text-center"><b>Presupuestos</b></h3>
                <table class="container-fluid">
                    <tr class="estiloTable1">
                        <th>ID</th>
                        <th>Cantidad terreno</th>
                        <th>Fecha</th>
                        <th>Perteneciente a</th>
                        <th>Comentario</th>
                        <th>Eliminar</th>
                            
                    </tr>

                    <tr v-for="(cadaPresupuesto, index) in arrayPresupuestos" :key="index" class="estiloTable2">
                        <td>{{cadaPresupuesto.id_presupuestos}}</td>
                        <td>{{cadaPresupuesto.cantidad_terreno}}</td>
                        <td>{{cadaPresupuesto.fecha_presupuesto}}</td>
                        <td>{{cadaPresupuesto.username}}</td>
                        <td>{{cadaPresupuesto.comentario}}</td>
                        <td>
                            <button type="button" class="btn btn-danger" @click="eliminarPresupuesto()">eliminar</button>
                        </td>
                    
                    </tr>
                </table>
               
            </div>
            <div class="alert alert-danger" role="alert" v-if="borradoPresupuesto === true">
                <h4 class="alert-heading" >Borrado correctamente</h4>
            </div>

            <!-- Pedidos -------------------------------------------------------------------------------------->
            <div class="col-lg-12 col-md-12 col-sm-12 formulario">
                <h3 class="text-center"><b>Pedidos</b></h3>
                <button type="button" class="btn btn-danger">Insertar Pedido</button>
                <table class="container-fluid">
                    <tr class="estiloTable1">
                        <th>ID</th>
                        <th>Fecha</th>
                        <th>Perteneciente a</th>
                        <th>Eliminar</th>
                            
                    </tr>

                    <tr v-for="(cadaPedidos, index) in arrayPedidos" :key="index" class="estiloTable2">
                        <td>{{cadaPedidos.id_pedidos}}</td>
                        <td>{{cadaPedidos.fecha_pedido}}</td>
                        <td>{{cadaPedidos.username}}</td>
                        <td>
                            <button type="button" class="btn btn-danger" >eliminar</button>
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
            isOpen: false,
            // Variables usuario -----------------------------------------------------------------------------
            username: '',
            password: '',
            array: [],

            /*
            Revisar, fallo username
                users: {
                username,
                password,
            }, */
            usuarioModifciado: {
                username: 'Ingelmo_Avenida',
                password: 'qweasdsf123',
            },

            // Variables Servicio Introducidas ------------------------------------------------------------------
            descripcionIntroducida: String ,
            precioIntroducido: Number,

            // Almacenadas para envio
            /*           
                descripcion_servicio: descripcionIntroducida,
                precio_metro: precioIntroducido,
             */
            servicio: {
                descripcion_servicio: this.descripcionIntroducida,
                precio_metro: this.precioIntroducido,
            },

            // Variables alertas a mostrar
            aviso: false,
            modificado: false,
            borrado:false,
            borradoPresupuesto:false,
            
            arrayServicios: [],
            arrayPresupuestos:[],
            arrayPedidos:[]
        }
    },

    created(){
            // usuarios
            axios.get("http://localhost:8080/jardinrobledo/v1/usuarios")
            .then( response => {
                this.array = response.data;
                this.array.sort(((a,b) => b.nombre - a.nombre));
            })
            .catch(response => alert("Error petición obtener: " + response.status));

            // servicios
            axios.get('http://localhost:8080/jardinrobledo/v1/servicios')
            .then( response => {
                this.arrayServicios = response.data;
                this.arrayServicios.sort(((a,b) => b.precio_metro - a.precio_metro));
            })
            .catch(response => alert("Error petición obtener: " + response.status));

            // presupuestos
            axios.get('http://localhost:8080/jardinrobledo/v1/presupuestos')
            .then( response => {
                this.arrayPresupuestos = response.data;
            })
            .catch(response => alert("Error petición obtener: " + response.status));

            // pedidos
            axios.get('http://localhost:8080/jardinrobledo/v1/pedidos')
            .then( response => {
                this.arrayPedidos = response.data;
            })
            .catch(response => alert("Error petición obtener: " + response.status));
        

    },

    methods:{


        // PETICIONES USUARIO

        insertarUsuario(){
            axios.post('http://localhost:8080/jardinrobledo/v1/usuarios/', this.users)
            .then( response =>{
                console.log(response);
            })
            .catch(response => console.log("Error petición insertar: " + response.status));
            console.log("Usuario: " + this.users);

        },
        // formulario modal
        modificarUsuario(){
            axios.put('http://localhost:8080/jardinrobledo/v1/usuarios/', this.users)
            .then( response =>{
                console.log(response);
            })
            .catch(response => console.log("Error petición modificar: " + response.status));
            console.log();
        },
        eliminarUsuario(username){
            console.log("El id a borrar es: " + username);
            axios.delete('http://localhost:8080/jardinrobledo/v1/usuarios/' + username)
            .catch(response => console.log("No puedes eliminarlo, tiene presupuestos activos"));
            console.log();

        },

        // PETICIONES SERVICIO
        nuevoServicio(){

            console.log("datos: " + this.descripcionIntroducida + " / "  +this.precioIntroducido);
            let guardaD = this.descripcionIntroducida;
            let guardaPrecio = this.precioIntroducido
            const servicio = {guardaD,guardaPrecio}


            console.log("Datos a guardaR: " + servicio.guardaD + " / " + servicio.guardaPrecio);
            this.aviso = true;
            setTimeout(()=>{
                this.aviso = false;
            }, 3500);
            axios.post('http://localhost:8080/jardinrobledo/v1/servicios/', servicio)
            .then( response =>{
                console.log(response);
            })
            .catch(response => console.log("Error petición insertar: " + response.status));
            console.log("Servicio: " + this.servicio);

        },
        //revisar
        modificarServicio(){
            console.log("datos: " + this.descripcionIntroducida + " / "  +this.precioIntroducido);
            guardaD = this.descripcionIntroducida;
            guardaPrecio = this.precioIntroducido
            const servicio = {guardaD,guardaPrecio}
            console.log("Datos a guardaR: " + servicio.guardaD + " / " + servicio.guardaPrecio);
            axios.put('http://localhost:8080/jardinrobledo/v1/servicios/', + servicio)
            .then( response =>{
                console.log(response);
            })
            .catch(response => console.log("Error petición modificar: " + response.status));
        },
        eliminarServicio(id_servicios){
            console.log("El id a borrar es: " + id_servicios);
            axios.delete('http://localhost:8080/jardinrobledo/v1/servicios/' + id_servicios)
            this.borrado = true;
            setTimeout(()=>{
                this.borrado = false;
            }, 3500);
            // Para eliminar y que se vea puedo pensar en refrescar pagina o algo
        },

        // PRESUPUESTOS --------------------------------------------------------------------------
        eliminarPresupuesto(id){
            console.log("El id a borrar es: " + id);
            axios.delete('http://localhost:8080/jardinrobledo/v1/presupuestos/' + id)
            this.borradoPresupuesto = true;
            setTimeout(()=>{
                this.borradoPresupuesto = false;
            }, 3500);
            // Para eliminar y que se vea puedo pensar en refrescar pagina o algo
        },

        // Pedidos --------------------------------------------------------------------------
    }
}
</script>

<style lang="css" scoped>
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
.navbar{
    background-color: red;
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

