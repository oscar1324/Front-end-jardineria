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
        </div>
          <div id="nav">
            <router-link to="/usuarios">usuarios</router-link> |
            <router-link to="/insertarUsuario">Inertar usuarios</router-link> |
            <router-link to="/modificarUsuario">Modificar usuarios</router-link> |
            <router-link to="/eliminacionUsuario">eliminar usuario</router-link>|
        </div>
            <router-view/>
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

