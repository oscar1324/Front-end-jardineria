<template>
    <div class="container">

                <h3 class="text-center"><b>Presupuestos</b></h3>
                <table class="container-fluid">
                    <tr class="estiloTable1">
                        <th>Cantidad terreno</th>
                        <th>Fecha</th>
                        <th>Perteneciente a</th>
                        <th>Comentario</th>
                        <th>disabled</th>
                        <th>Precio/€</th>
                      
                        <th></th>
                            
                    </tr>

                    <tr v-for="(cadaPresupuesto, index) in arrayPresupuestos" :key="index" class="estiloTable2">
                        <td v-if="cadaPresupuesto.disabled === 1">{{cadaPresupuesto.cantidadTerreno}}</td>
                        <td v-if="cadaPresupuesto.disabled === 1">{{cadaPresupuesto.fechaPresupuesto}}</td>
                        <td v-if="cadaPresupuesto.disabled === 1">{{cadaPresupuesto.username}}</td>
                        <td v-if="cadaPresupuesto.disabled === 1">{{cadaPresupuesto.comentario}}</td>
                        <td v-if="cadaPresupuesto.disabled === 1">{{cadaPresupuesto.disabled}}</td>
                        <td v-if="cadaPresupuesto.disabled === 1">{{cadaPresupuesto.precio}}</td>
                        <td>
                            <img src="../imagenes/presu.jpg" width="40">
                        </td>
                    
                    </tr>
                </table>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            arrayPresupuestos:[],
        }
    },

    created(){
        axios.get('http://localhost:8080/jardinrobledo/v1/presupuestos')
        .then( response => {
            this.arrayPresupuestos = response.data;
            console.log(this.arrayPresupuestos);
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