<template>
    <div class="container">
        <div class="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Administrador</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Usuarios
                        </a>
                        <!-- Preguntar -->
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/usuarios">Listar usuarios</a>
                            <a class="dropdown-item" href="/insertarUsuario">Insertar usuarios </a>
                            <a class="dropdown-item" href="/modificarUsuario">Modificar usuarios</a>
                            <a class="dropdown-item" href="/eliminacionUsuario">Eliminar usuarios  </a>
                        </div>
                        
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Servicios
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/serviciosList">Listar servicios</a>
                            <a class="dropdown-item" href="/modificarServicio">Modificar servicios</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Presupuestos
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/listPresupuestos">Listar presupuestos</a>
                            <a class="dropdown-item" href="/eliminarPresupuesto">Eliminar presupuestos</a>
                        </div>
                    </li>
                    </ul>
                </div>
            </nav>
            <div class="col-lg-12  col-md-12  col-sm-12 formulario">
                <h1 class="text-center">Administrador: </h1>
            </div>
        
            <div class="col-lg-12 col-md-12 col-sm-12 pegado" >
                <h3 class="text-center"><b>Inserción de Usuario:</b></h3>
            </div>
            <div class="col-lg-10 col-md-10 col-sm-10 formulario">
                <label>Username:</label>
                <input type="text" class="form-control col-lg-7" placeholder="Usuario..." v-model="user.username">
                <label>Contraseña:</label>
                <input type="text" class="form-control col-lg-7" placeholder="contraseña..." v-model="user.password">
                <button type="button" class="btn btn-success" @click="insertarUsuario()">Agregar nuevo usuario</button>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-2 formulario margen">
                <img src="../imagenes/usuario1.jpg"  width="150" height="150">
                 <p>{{username}}</p>
            </div>
            <div class="alert alert-success" role="alert" v-if="inserccionUsuario === true">
                <h4 class="alert-heading" >Insertado correctamente</h4>
            </div>


            <!-- SERVICIOS --------------------------------------------------------------------------------->
            <div class="col-lg-12 col-md-12 col-sm-12 formulario">
                <h3 class="text-center"><b>Servicios</b></h3>
                <table class="container-fluid">
                    <tr class="estiloTable1">
                        <th>ID</th>
                        <th>Descripción del servicio</th>
                        <th>Precio m/€</th>
                        <th>Modificar</th>
                            
                    </tr>

                    <tr v-for="(cadaServicio, index) in arrayServicios" :key="index" class="estiloTable2">
                        <td>{{cadaServicio.id_servicios}}</td>
                        <td>{{cadaServicio.descripcion_servicio}}</td>
                        <td>{{cadaServicio.precio_metro}}</td>
                        <td>
                            <button type="button" class="btn btn-success" @click="modificarServicio(cadaServicio.id_servicios)">modificar servicio</button>
                        </td>
                    </tr>
                </table>
            </div>


            <div class="col-lg-12 col-md-12 col-sm-12 pegado" >
                <h3 class="text-center"><b>Inserción de Servicio</b></h3>
            </div>
            <div class="col-lg-10 col-md-10 col-sm-10 formulario">
                <label>Descripción servicio:</label>
                <input type="text" class="form-control col-lg-7" placeholder="descripción del nuevo servicio..." v-model="servicio.descripcion_servicio">
                <label>Precio:</label>
                <input type="text" class="form-control col-lg-7" placeholder="precio metro" v-model="servicio.precio_metro">
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
                        <th>Disabled </th>
                        <th>Comentario</th>
                        <th>Eliminar</th>
                            
                    </tr>

                    <tr v-for="(cadaPresupuesto, index) in arrayPresupuestos" :key="index" class="estiloTable2">
                        <td>{{cadaPresupuesto.id_presupuestos}}</td>
                        <td>{{cadaPresupuesto.cantidad_terreno}}</td>
                        <td>{{cadaPresupuesto.fecha_presupuesto}}</td>
                        <td>{{cadaPresupuesto.username}}</td>
                        <td>{{cadaPresupuesto.disabled}}</td>
                        <td>{{cadaPresupuesto.comentario}}</td>
                        <td>

                            <button type="button" class="btn btn-danger" @click="eliminarPresupuesto(cadaPresupuesto.id_presupuestos,cadaPresupuesto.cantidad_terreno,cadaPresupuesto.fecha_presupuesto,cadaPresupuesto.comentario,cadaPresupuesto.username)">
                                eliminar
                            </button>
                        </td>
                    
                    </tr>
                </table>
               
            </div>
            <div class="alert alert-danger" role="alert" v-if="borradoPresupuesto === true">
                <h4 class="alert-heading" >Borrado correctamente</h4>
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
            // Variables usuario 
            username: '',
            password: '',
            array: [],

            user: {
                username: '',
                password: '',
                disabled: 1
            },
            inserccionUsuario: false,

            servicio: {
                descripcion_servicio :'', 
                precio_metro: '',
            },

            // Variables avisos a mostrar
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


        axios.get('http://localhost:8080/jardinrobledo/v1/servicios')
        .then( response => {
            this.arrayServicios = response.data;
            this.arrayServicios.sort(((a,b) => b.precio_metro - a.precio_metro));
        })
        .catch(response => alert("Error petición obtener: " + response.status));

        axios.get('http://localhost:8080/jardinrobledo/v1/presupuestos')
        .then( response => {
            this.arrayPresupuestos = response.data;
            console.log(this.arrayPresupuestos);
        })
        .catch(response => alert("Error petición obtener: " + response.status));
    },

    methods:{

        // PETICIONES USUARIO
        insertarUsuario(){
            console.log("Objeto usuario: " , this.user)
            axios.post('http://localhost:8080/jardinrobledo/v1/usuarios/', this.user)
            .then( response =>{
                console.log(response);
            })
            .catch(response => console.log("Error petición insertar: " + response.status));

            this.inserccionUsuario =  true;
            setTimeout(()=>{
                this.inserccionUsuario =  false;
            }, 3500);
        },

        
        modificarUsuario(){
            axios.put('http://localhost:8080/jardinrobledo/v1/usuarios/', this.user)
            .then( response =>{
                console.log(response);
            })
            .catch(response => console.log("Error petición modificar: " + response.status));
         
        },
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

        },

        // PETICIONES SERVICIO
        nuevoServicio(){

            this.aviso = true;
            setTimeout(()=>{
                this.aviso = false;
            }, 3500);
            console.log("Servicio: " , this.servicio);
            axios.post('http://localhost:8080/jardinrobledo/v1/servicios/', this.servicio)
            .then( response =>{
                console.log(response);
            })
            .catch(response => console.log("Error petición insertar: " + response.status));
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

        // PRESUPUESTOS --------------------------------------------------------------------------
        eliminarPresupuesto(id_presupuestos, cantidad_terreno, fecha_presupuesto, comentario, username){
            let presupuesto = {
                id_presupuestos,
                cantidad_terreno,
                fecha_presupuesto,
                comentario,
                username,
                disabled:0
            }
            console.log("objeto presupuesto: " , presupuesto);
            axios.put('http://localhost:8080/jardinrobledo/v1/presupuestos/' , presupuesto  )
            .catch(response => console.log("Error petición: " + response.status));
                this.borradoPresupuesto = true;
            setTimeout(()=>{
                this.borradoPresupuesto = false;
            }, 3500);

        },

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

