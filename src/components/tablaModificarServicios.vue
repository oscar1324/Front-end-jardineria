<template >

    <div class="col-lg-12 text-center">
        <div class="col-lg-12 col-md-12 col-sm-12 pegado" >
            <h3 class="text-center"><b>Modificación de precio:</b></h3>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 formulario">
            <label>Descripción servicio:</label>
            <input type="text" class="form-control col-lg-7 text-center" placeholder="descripción del nuevo servicio..." v-model="servicio.descripcion_servicio">
            <label>Precio:</label>
            <input type="text" class="form-control col-lg-7 text-center" placeholder="precio metro" v-model="servicio.precio_metro">
            <button type="button" class="btn btn-success" @click="modificarServicio()">Modificar precio</button>
        </div>
        <p>aqui: {{idRecibido}} - {{nombreRecibido}}</p>
        <div class="alert alert-success" role="alert" v-if="aviso === true">
            <h4 class="alert-heading" >Modificado correctamente</h4>
         </div>
        </div>
 
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            
            aviso:false,
            servicio: {
                id: this.idRecibido,
                descripcion_servicio : this.nombreRecibido, 
                precio_metro: '',
            },
        }
    },
    props:['idRecibido', 'nombreRecibido'],
    methods:{
        modificarServicio(){
            axios.put('http://localhost:8080/jardinrobledo/v1/servicios/', this.servicio)
            .then( response =>{
                console.log(response);
            })
            .catch(response => console.log("Error petición modificar: " + response.status));
            console.log("Objeto: " , this.servicio);
            this.aviso = true;
            setTimeout(()=>{
                this.aviso = false;
            }, 3500);
         
        },
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
.formulario{
    margin-bottom: 15px;
    border:3px solid black;
    border-radius:22px;
    padding: 10px;
}
</style>
