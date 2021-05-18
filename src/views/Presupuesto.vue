<template>
    <div class="container" >
     <h1 class="text-center"><b>Realice su presupuesto</b></h1>
        <div class="row">   
            <div class="col-lg-6 col-md-6 col-sm-6" >   
                <div class=" form-group">
                    <h4>¿Qué servicio necesita?</h4>
                    <select v-model="selected" class="col-lg-11 col-md-11 col-sm-11 col-xs-11">
                        <option disabled value="Seleccione un elemento">Seleccione un elemento</option>
                        <option  v-for="(cadaServicio, index) in arrayServicios" :key="index" >
                            {{ cadaServicio.idServicios}} <!-- - {{cadaServicio.descripcionServicio}}  -->
                        </option>
                    </select><br><span>Seleccionado: {{ selected }}</span><br>
                    <h4>¿Cual es tu terreno?</h4>
                    <label for="enviarFormulario">
                        <input type="radio" id="1" value="50" v-model="tipo">
                        <span>Menos de 50 m2 </span>
                    </label> <br><br>
                    <label for="enviarFormulario">
                        <input  type="radio" id="2" value="100"  v-model="tipo">
                        <span>Entre 50 y 150 m2</span>
                    </label> <br><br>
                    <label for="enviarFormulario">
                        <input  type="radio" id="2" value="200"  v-model="tipo">
                        <span>Entre 150 y 300 m2</span>
                    </label> <br><br>
                    <label for="enviarFormulario" class="labelito">
                        <input  type="radio" id="2" value="500"  v-model="tipo">
                        <span>Más de 300 m2</span>
                    </label> <br>

                </div>
               
            </div>
            <div class="form-group col-lg-6 col-md-6 col-sm-6">
                <h4>Comentarios sobre su terreno:</h4>
                <textarea cols="30" rows="5" placeholder="Escriba..." class="form-control" v-model="comentario"></textarea>
            </div>

            <button type="button" class="btn btn-danger" @click="envioPresupuesto($route.params.id,$route.params.usuario )">Calcular presupuesto</button>

     
            <div class="col-lg-12 col-md-3 col-sm-3 text-center">
                 <br>
                <h4>Presupuesto de:</h4>
                <p>El presupuesto es de ... 80 euros</p>
            </div>
        </div>

        
   </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
           
            comentario: '',
            enviarFormulario:[],
            tipo: '',
            arrayPresupuestos:[],
            arrayServicios:[],
            selected:''
        }
    },

    methods:{
        envioPresupuesto(id, usuario){
            console.log(id);
            let objeto =  {
                username: usuario,
                cantidadTerreno: this.tipo,
                comentario: this.comentario,
                servicio:this.selected, // haciendo referencia a idServicio apodado servicio
                disabled: 1
            }
            console.log("Objeto: " , objeto); 
            // Nueva UTL:  http://localhost:8080/jardinrobledo/v1/solicitudpresupuesto
           // axios.post('http://localhost:8080/jardinrobledo/v1/presupuestos/' , objeto)
            //.catch(response => console.log("Error petición insertar: " + response.status));


        }
    },

    created(){
        axios.get('http://localhost:8080/jardinrobledo/v1/servicios')
        .then( response => {
            this.arrayServicios = response.data;
            this.arrayServicios.sort(((b,a) => b.idServicios - a.idServicios));
        })
        .catch(response => alert("Error petición obtener: " + response.status));
    }

}
</script>
<style scoped>
.container{
    color: white;
    background-image: url(https://i.pinimg.com/originals/32/59/b4/3259b419f4e8f069b2fd6aefb9f15ae0.jpg);
    border-radius: 20px;
    height: 800px;
}
.labelito{
    margin-bottom: 30px;
}
</style>