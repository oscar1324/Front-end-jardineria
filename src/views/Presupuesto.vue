<template>
    <div class="container" >
     <h2><b>Realice su presupuesto</b></h2>
        <div class="row">   
            <div class="col-lg-4 col-md-4 col-sm-4" >   
                <div class=" form-group">
                    <div>
                        <label> 1)Cantidad del terreno para trabajar:</label><br>
                        <input type="radio" v-model="a"> menos de 50 m2 <br>   <!-- realizar 5% rebaja -->
                        <input type="radio" v-model="b"> entre 50 y 150 m2<br> <!-- realizar 10% rebaja -->
                        <input type="radio" v-model="c"> entre 150 y 300 m2<br><!-- realizar 12% rebaja -->
                        <input type="radio" v-model="d"> más de 300 m2<br>     <!-- realizar 17% rebaja -->
                    </div>
                    <button type="button" class="btn btn-danger" @click="envioPresupuesto($route.params.id)">Calcular presupuesto</button>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 form-group" >
                <div class=" form-group" >
                    <label>Comentarios sobre su presupuesto:</label>
                    <textarea cols="30" rows="5" placeholder="Escriba..." v-model="comentario"></textarea>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 ">
                <p>Se calcula el presupuesto</p>
                <p>El presupuesto es de ... 80 euros</p>
            </div>
        </div>

        <p>ID de servicio recibido: {{$route.params.id}}</p>
   </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            a: '5%',
            b: '15%',
            c: '',
            d: '',
            comentario: ''
         
        }
    },

    methods:{
        envioPresupuesto(id){
            let fecha = new Date()
            console.log("Envio presupuesto: " + fecha);
            
            let objeto =  {
                id_presupuestos: id,
                cantidad_terreno: this.a,
                fecha_presupuesto: fecha,
                comentario: this.comentario,
                username: 'oscar_bichito',
                disabled: 1
            }
            console.log("Objeto: " , objeto); 
            axios.post('http://localhost:8080/jardinrobledo/v1/presupuestos/' , objeto)
            .catch(response => console.log("Error petición insertar: " + response.status));


        }
    }

}
</script>
<style scoped>
.container{
    color: black;
    background-image: url(https://i.pinimg.com/originals/32/59/b4/3259b419f4e8f069b2fd6aefb9f15ae0.jpg);

    /*https://i0.wp.com/data2.1freewallpapers.com/download/singapore-botanic-gardens-walking-paths.jpg, esta foto de gana de moomento*/
    /* https://i.pinimg.com/originals/32/59/b4/3259b419f4e8f069b2fd6aefb9f15ae0.jpg   - foto flor*/
    
}
</style>