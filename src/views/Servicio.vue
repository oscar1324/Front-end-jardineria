<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12  col-sm-12">
                <section id="Servicios">
                    <div class="titulo text-center">
                        <h1 style="color: white">SERVICIOS DISPONIBLES</h1>
                    </div>
                
                    <div class="row">
                        <div class="col-lg-4 col-md-12 col-sm-12 ">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h4 class="card-title" style="color: black;">Sistema riego</h4>
                                    <img src="../imagenes/riego2.jpg"  width="300" height="150" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                    <p class="card-text" style="color: black;">El riego es fundamental, por ello instalamos sistemas de riego eficientes además de repararlos. </p>
                                    <button type="button" class="btn btn-primary" @click="direccionarconID1($route.params.usuario)">Calcular presupuesto</button>                                            
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-12 col-sm-12 ">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h4 class="card-title" style="color: black;">Podas</h4>
                                    <img src="../imagenes/podar.jpg"  width="300" height="150" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                    <p class="card-text" style="color: black;">Somos especialistas en trabajos de poda de todo tipo, tanto en altura como para arbustos.</p>
                                    <button type="button" class="btn btn-primary" @click="direccionarconID2($route.params.usuario)">Calcular presupuesto</button>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-12 col-sm-12 ">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h4 class="card-title" style="color: black;">Cesped artificial</h4>
                                    <img src="../imagenes/cespedPrimerPlano.jpg"  width="300" height="150" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                    <p class="card-text" style="color: black;">Reduce costes de mantenimiento instalando césped artificial de calidad al mejor precio y calidad.</p>
                                    <button type="button" class="btn btn-primary" @click="direccionarconID3($route.params.usuario)">Calcular presupuesto</button>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-12 col-sm-12  caja">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h4 class="card-title" style="color: black;">Mantenimiento </h4>
                                    <img src="../imagenes/mantenimiento.jpg"  width="300" height="150" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                    <p class="card-text" style="color: black;">Ahorra tiempo y dinero en herramientas y maquinaria profesional.</p>
                                    <button type="button" class="btn btn-primary" @click="direccionarconID4($route.params.usuario)">Calcular presupuesto</button>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-12 col-sm-12 caja">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h3 class="card-title" style="color: black;">Desbrozar</h3>
                                    <img src="../imagenes/desbro.jpg"  width="300" height="150" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                    <p class="card-text" style="color: black;">Nos ocupamos los bordes inalcanzables que tantos problemas dan.</p>
                                    <button type="button" class="btn btn-primary" @click="direccionarconID5($route.params.usuario)">Calcular presupuesto</button>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-12 col-sm-12 caja">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h3 class="card-title" style="color: black;">Plantaciones</h3>
                                    <img src="../imagenes/plantar.jpg"  width="300" height="150" class="col-lg-12 col-md-12 col-sm-5 col-xs-5 ">
                                    <p class="card-text" style="color: black;">Los árboles son vida para su jardín y proporcionan un entorno exclusivo.</p>
                                    <button type="button" class="btn btn-primary" @click="direccionarconID6($route.params.usuario)">Calcular presupuesto</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>    
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
import Presupuestos from '../views/Presupuesto.vue';
export default {
    data(){
        return{
            mostrar: false,
            arrayServicios: [],
        }
    },
    components:{
        Presupuestos
    },
    
    methods:{
        direccionarconID1(usuario){
            let servicioID = 1
            this.$router.replace(`/Presupuesto/${servicioID}/${usuario}`)
        },
        direccionarconID2(usuario){
            let servicioID = 2
            this.$router.replace(`/Presupuesto/${servicioID}/${usuario}`)
        },

        direccionarconID3(usuario){
            let servicioID = 3
            this.$router.replace(`/Presupuesto/${servicioID}/${usuario}`)
        },

        direccionarconID4(usuario){
            let servicioID = 4
            this.$router.replace(`/Presupuesto/${servicioID}/${usuario}`)
        },

        direccionarconID5(usuario){
            let servicioID = 5
            this.$router.replace(`/Presupuesto/${servicioID}/${usuario}`)
        },

        direccionarconID6(usuario){
            let servicioID = 6
            this.$router.replace(`/Presupuesto/${servicioID}/${usuario}`)
        }
    },
    created(){
        axios.get('http://localhost:8080/jardinrobledo/v1/servicios')
        .then( response => {
            this.arrayServicios = response.data;
        })
        .catch(response => alert("Error petición obtener: " + response.status));
    }
}
</script>

<style scoped>
.container{
    color: antiquewhite;
    background-image: url(https://i.pinimg.com/originals/32/59/b4/3259b419f4e8f069b2fd6aefb9f15ae0.jpg);
    border-radius: 20px;
}
.card{
    margin-bottom: 30px;
    border-radius: 20px;
}

</style>