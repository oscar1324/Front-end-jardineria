<template>
    <div class="container">
        <div class="row">
       
            <div class="col-lg-12 col-md-12 col-sm-12 formulario">
                <h3 class="text-center"><b>Servicios</b></h3>
                <table class="container-fluid">
                    <tr class="estiloTable1">
                        <th>ID</th>
                        <th>Tipo del servicio</th>
                        <th>Precio m/€</th>
                        <th>Servicios</th>
                        <th>Modificar</th>
                    </tr>

                    <tr v-for="(cadaServicio, index) in arrayServicios" :key="index" class="estiloTable2">
                        <td>{{cadaServicio.id_servicios}}</td>
                        <td>{{cadaServicio.descripcion_servicio}}</td>
                        <td>{{cadaServicio.precio_metro}}</td>
                        <td>
                            <img src="../imagenes/herra1.jpg" height="20">
                        </td>
                        <td>
                            <button type="button" class="btn btn-success" @click="pasarDato(id = cadaServicio.id_servicios, nombre = cadaServicio.descripcion_servicio)">Modificar</button>
                        </td>
                    </tr>
                </table>
                <tabla v-if="mostrarFormulario === true" :idRecibido="id" :nombreRecibido="nombre"></tabla>
            </div>

        </div>
    </div>
</template>

<script>
import tabla from '../components/tablaModificarServicios';
import axios from 'axios';
export default {
    data(){
        return{
            id: '',
            arrayServicios:[],
            mostrarFormulario: false

        }
    },
    components:{
        tabla
    },
    methods:{
        pasarDato(id, nombre){
            console.log("Paso id: " + id + " / " + nombre);
            this.mostrarFormulario = true
        }
    },

    created(){
          
        axios.get('http://localhost:8080/jardinrobledo/v1/servicios')
        .then( response => {
            this.arrayServicios = response.data;
            this.arrayServicios.sort(((a,b) => b.precio_metro - a.precio_metro));
        })
        .catch(response => alert("Error petición obtener: " + response.status));
    },

   
    updated(){
        axios.get('http://localhost:8080/jardinrobledo/v1/servicios')
        .then( response => {
            this.arrayServicios = response.data;
            this.arrayServicios.sort(((a,b) => b.precio_metro - a.precio_metro));
        })
        .catch(response => alert("Error petición obtener: " + response.status));
    },
  


    
}
</script>
<style scoped>
.container{
    color: black;
}
.estiloTable2{
    border: solid black 1px;
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