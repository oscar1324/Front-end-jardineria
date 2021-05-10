<template>
    <div class="container">
        <div class="row">
       
                <div class="col-lg-12 col-md-12 col-sm-12 formulario">
                <h3 class="text-center"><b>Servicios</b></h3>
                <table class="container-fluid">
                    <tr class="estiloTable1">
                        <th>ID</th>
                        <th>Descripción del servicio</th>
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
                            <button type="button" class="btn btn-success" @click="mostrarFormulario = true">Modificar</button>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="col-lg-12">
                 <div class="col-lg-12 col-md-12 col-sm-12 pegado" >
                <h3 class="text-center"><b>Modificación de precio:</b></h3>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 formulario">
                <label>Descripción servicio:</label>
                <input type="text" class="form-control col-lg-7" placeholder="descripción del nuevo servicio..." v-model="servicio.descripcion_servicio">
                <label>Precio:</label>
                <input type="text" class="form-control col-lg-7" placeholder="precio metro" v-model="servicio.precio_metro">
                <button type="button" class="btn btn-success" @click="nuevoServicio()">Agregar nuevo servicio</button>
            </div>

            <div class="alert alert-success" role="alert" v-if="aviso === true">
                <h4 class="alert-heading" >Insertado correctamente</h4>
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
            arrayServicios:[],
            
            servicio: {
                descripcion_servicio :'', 
                precio_metro: '',
            },
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
        modificarServicio(){
            axios.put('http://localhost:8080/jardinrobledo/v1/servicios/', this.servicio)
            .then( response =>{
                console.log(response);
            })
            .catch(response => console.log("Error petición modificar: " + response.status));
            console.log("Objeto: " , this.servicio);
         
        },
    }
    
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