<template>
    <div class="container">
        <div class="row">
       
            <div class="col-lg-12 col-md-12 col-sm-12 ">
                <h3 class="text-center"><b>Servicios</b></h3>
                <table class="table">
                    <thead class="thead-light">
                        <tr class="estiloTable1">
                        <th scope="col">Descripción del servicio</th>
                        <th scope="col">Precio m/€</th>
                        <th scope="col">Modificaciones de precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(cadaServicio, index) in arrayServicios" :key="index" >
                            <td><b>{{cadaServicio.descripcionServicio}}</b></td>
                            <td>{{cadaServicio.precioMetro}}</td>
                            <td>
                                <img src="../imagenes/herra1.jpg" height="40" class="imagen">
                                <button type="button" class="btn btn-primary" @click="pasarDato(id = cadaServicio.idServicios, nombre = cadaServicio.descripcionServicio)">Modificar</button>
                            </td>
                        </tr>
                    </tbody>
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
            this.mostrarFormulario = true
        }
    },

    created(){
          
        axios.get('http://localhost:8080/jardinrobledo/v1/servicios')
        .then( response => {
            this.arrayServicios = response.data;
            this.arrayServicios.sort(((a,b) => b.precioMetro - a.precioMetro));
        })
        .catch(response => alert("Error petición obtener: " + response.status));
    },

   
    updated(){
        axios.get('http://localhost:8080/jardinrobledo/v1/servicios')
        .then( response => {
            this.arrayServicios = response.data;
            this.arrayServicios.sort(((a,b) => b.precioMetro - a.precioMetro));
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
.imagen{
    margin-right: 15px;
}

.estiloTable1{
    border: solid white 1px;
    background-color: black;
    color: white;
}

</style>