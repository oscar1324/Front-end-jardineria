<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h3 class="text-center"><b>Presupuestos</b></h3>

                <table class="table">
                    <thead class="thead-light">
                        <tr class="estiloTable1">
                        <th scope="col">Cantidad terreno</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Perteneciente a</th>
                        <th scope="col">Comentario</th>
                        <th scope="col">Precio</th>
                         <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(cadaPresupuesto, index) in arrayPresupuestos" :key="index">
                        <td v-if="cadaPresupuesto.disabled === 1"><b>{{cadaPresupuesto.cantidadTerreno}} m2</b></td>
                        <td v-if="cadaPresupuesto.disabled === 1">{{cadaPresupuesto.fechaPresupuesto}}</td>
                        <td v-if="cadaPresupuesto.disabled === 1"><b>{{cadaPresupuesto.username}}</b></td>
                        <td v-if="cadaPresupuesto.disabled === 1">{{cadaPresupuesto.comentario}}</td>
                        <td v-if="cadaPresupuesto.disabled === 1">{{cadaPresupuesto.precio}}</td>
                        <td>
                            <button type="button" class="btn btn-danger" @click="eliminarPresupuesto(cadaPresupuesto.idPresupuestos,cadaPresupuesto.cantidadTerreno,cadaPresupuesto.fechaPresupuesto,cadaPresupuesto.comentario,cadaPresupuesto.username)">
                                eliminar
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="alert alert-danger alerta" role="alert" v-if="borradoPresupuesto === true">
                    <h4 class="alert-heading" >Borrado correctamente</h4>
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
            borradoPresupuesto: false,
            arrayPresupuestos:[],
        }
    },

    created(){
        axios.get('http://localhost:8080/jardinrobledo/v1/presupuestos')
        .then( response => {
            this.arrayPresupuestos = response.data;
            
        })
        .catch(response => alert("Error petición obtener: " + response.status));
    },

    updated(){
        axios.get('http://localhost:8080/jardinrobledo/v1/presupuestos')
        .then( response => {
            this.arrayPresupuestos = response.data;
        })
        .catch(response => alert("Error petición obtener: " + response.status));
    },

    methods:{
        eliminarPresupuesto(idPresupuestos, cantidadTerreno, fechaPresupuesto, comentario, username){
            let presupuesto = {
                idPresupuestos,
                cantidadTerreno,
                fechaPresupuesto,
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
<style scoped>
.container{
    background-color: rgb(211, 208, 55);
    color: black;
    height: 1000px;
    border-radius: 20px;

}
.estiloTable1{
    border: solid black 1px;
    background-color: black;
    color: white;
}
.estiloTable2{
    border: solid black 1px;
}
.alerta{
    margin-top: 15px;
}
</style>