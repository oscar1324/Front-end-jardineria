<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="col-lg-12 col-md-12 col-sm-12 formulario">
                <h3 class="text-center"><b>Servicios</b></h3>
                <table class="container-fluid">
                    <tr class="estiloTable1">
                        <th>ID</th>
                        <th>Descripción del servicio</th>
                        <th>Precio m/€</th>
                        <th>Servicios</th>
                    </tr>

                    <tr v-for="(cadaServicio, index) in arrayServicios" :key="index" class="estiloTable2">
                        <td>{{cadaServicio.id_servicios}}</td>
                        <td>{{cadaServicio.descripcion_servicio}}</td>
                        <td>{{cadaServicio.precio_metro}}</td>
                        <td>
                            <img src="../imagenes/herra1.jpg" height="20">
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
            this.arrayServicios.sort(((a,b) => b.precio_metro - a.precio_metro));
        })
        .catch(response => alert("Error petición obtener: " + response.status));
    },

    methods:{

    }
}
</script>
<style scoped>
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
</style>