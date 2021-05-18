<template>
    <div class="container">

                <h3 class="text-center"><b>Presupuestos</b></h3>
                <table class="table">
                    <thead class="thead-light">
                        <tr class="estiloTable1">
                        <th scope="col">Cantidad terreno</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Perteneciente a</th>
                        <th scope="col">Comentario</th>
                        <th scope="col">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(cadaPresupuesto, index) in arrayPresupuestos" :key="index">
                        <td v-if="cadaPresupuesto.disabled === 1"><b>{{cadaPresupuesto.cantidadTerreno}} m2</b></td>
                        <td v-if="cadaPresupuesto.disabled === 1">{{cadaPresupuesto.fechaPresupuesto}}</td>
                        <td v-if="cadaPresupuesto.disabled === 1">{{cadaPresupuesto.username}}</td>
                        <td v-if="cadaPresupuesto.disabled === 1">{{cadaPresupuesto.comentario}}</td>
                        <td v-if="cadaPresupuesto.disabled === 1">{{cadaPresupuesto.precio}}</td>
                    
                    </tr>
                    </tbody>
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