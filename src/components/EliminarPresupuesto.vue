<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h3 class="text-center"><b>Presupuestos</b></h3>
                <table class="container-fluid">
                    <tr class="estiloTable1">
                        <th>Cantidad terreno</th>
                        <th>Fecha</th>
                        <th>Perteneciente a</th>
                        <th>Comentario</th>
                        <th>Eliminar</th>
                            
                    </tr>

                    <tr v-for="(cadaPresupuesto, index) in arrayPresupuestos" :key="index" class="estiloTable2">
                        <td>{{cadaPresupuesto.cantidad_terreno}}</td>
                        <td>{{cadaPresupuesto.fecha_presupuesto}}</td>
                        <td>{{cadaPresupuesto.username}}</td>
                        <td>{{cadaPresupuesto.comentario}}</td>
                        <td>
                            <button type="button" class="btn btn-danger" @click="eliminarPresupuesto(cadaPresupuesto.id_presupuestos,cadaPresupuesto.cantidad_terreno,cadaPresupuesto.fecha_presupuesto,cadaPresupuesto.comentario,cadaPresupuesto.username)">
                                eliminar
                            </button>
                        </td>
                    
                    </tr>
                </table>
                <div class="alert alert-danger" role="alert" v-if="borradoPresupuesto === true">
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
            console.log(this.arrayPresupuestos);
        })
        .catch(response => alert("Error petición obtener: " + response.status));
    },

    updated(){
        axios.get('http://localhost:8080/jardinrobledo/v1/presupuestos')
        .then( response => {
            this.arrayPresupuestos = response.data;
            console.log(this.arrayPresupuestos);
        })
        .catch(response => alert("Error petición obtener: " + response.status));
    },

    methods:{
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
<style scoped>
.container{
    background-color: rgb(211, 208, 55);
    color: black;
    height: 1000px;

}
.estiloTable1{
    border: solid black 1px;
    background-color: black;
    color: white;
}
/**background-color: antiquewhite; */
.estiloTable2{
    border: solid black 1px;
}
</style>