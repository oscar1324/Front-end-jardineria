<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="col-lg-12 col-md-12 col-sm-12 formulario">
                <h3 class="text-center"><b>Servicios disponibles:</b></h3>
                <table class="container-fluid">
                    <tr class="estiloTable1">
                        <th>Descripción del servicio</th>
                        <th>Precio m/€</th>
                        <th>Servicios</th>
                    </tr>

                    <tr v-for="(cadaServicio, index) in arrayServicios" :key="index" class="estiloTable2">
                        <td>{{cadaServicio.descripcionServicio}}</td>
                        <td>{{cadaServicio.precioMetro}}</td>
                        <td>
                            <img src="../imagenes/herra1.jpg" height="40">
                        </td>
                    </tr>
                </table>
            </div>
            
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            arrayServicios:[]
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

    methods:{

    }
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
.estiloTable2{
    border: solid black 1px;
}
</style>