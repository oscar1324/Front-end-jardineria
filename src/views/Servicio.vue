<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12  col-sm-12">
                <section id="Servicios">
                    <div class="titulo">
                        <h2>Nuestra empresa ofrece estos servicios:</h2>
                    </div>
                
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title" style="color: black;">Sistema riego</h5>
                                    <img src="../imagenes/riego2.jpg"  width="300" height="150">
                                    <p class="card-text" style="color: black;">El riego es fundamental, por ello instalamos sistemas de riego eficientes además de repararlos. </p>
                                    <button type="button" class="btn btn-primary" @click="direccionarconID1()">Calcular presupuesto</button>                                            
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title" style="color: black;">Podas</h5>
                                    <img src="../imagenes/podar.jpg"  width="300" height="150">
                                    <p class="card-text" style="color: black;">Somos especialistas en trabajos de poda de todo tipo, tanto en altura como para arbustos y rosales.</p>
                                    <button type="button" class="btn btn-primary" @click="direccionarconID2()">Calcular presupuesto</button>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title" style="color: black;">Cesped artificial</h5>
                                    <img src="../imagenes/cespedPrimerPlano.jpg"  width="300" height="150">
                                    <p class="card-text" style="color: black;">Reduce costes de mantenimiento instalando césped artificial de calidad al mejor precio y trato excelente.</p>
                                    <button type="button" class="btn btn-primary" @click="direccionarconID3()">Calcular presupuesto</button>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4 caja">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title" style="color: black;">mantenimiento de jardines</h5>
                                    <img src="../imagenes/mantenimiento.jpg"  width="300" height="150">
                                    <p class="card-text" style="color: black;">Ahorra tiempo y dinero en herramientas y maquinaria contratando un servicio profesional de mantenimiento.</p>
                                    <button type="button" class="btn btn-primary" @click="direccionarconID4()">Calcular presupuesto</button>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4  col-sm-4caja">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title" style="color: black;">Desbrozar</h5>
                                    <img src="../imagenes/desbro.jpg"  width="300" height="150">
                                    <p class="card-text" style="color: black;">Nos ocupamos de limpiar tu parcela, ya sea por la obligatoriedad municipal o para tu propio disfrute.</p>
                                    <button type="button" class="btn btn-primary" @click="direccionarconID5()">Calcular presupuesto</button>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4 caja">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title" style="color: black;">Plantaciones</h5>
                                    <img src="../imagenes/plantar.jpg"  width="300" height="150">
                                    <p class="card-text" style="color: black;">Los árboles son vida para su jardín y proporcionan un entorno exclusivo. Le asesoramos en su elección.</p>
                                    <button type="button" class="btn btn-primary" @click="direccionarconID6()">Calcular presupuesto</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                

                    <!-- Preguntar -->
                    <ul v-for="cadaItem, index in foto" :key="index">
                        <img src="cadaItem.enlace"> / <a href="{{cadaItem.enlace}}">enlace</a>
                    </ul>
                    
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
            foto: [
                {enlace: "https://www.google.com/search?q=sistema+de+riego+foto+4k&rlz=1C1GCEA_enES888ES888&sxsrf=ALeKk01GzFXniUUO19s7t_KAMeoto9L1Bg:1620311031972&source=lnms&tbm=isch&sa=X&ved=2ahUKEwigx_H7oLXwAhVk8-AKHdhCCWAQ_AUoAXoECAEQAw&biw=1280&bih=577#imgrc=Ga9KlppxGyfTbM"},
                {enlace: "https://www.google.com/search?q=sistema+de+riego+foto+4k&rlz=1C1GCEA_enES888ES888&sxsrf=ALeKk01GzFXniUUO19s7t_KAMeoto9L1Bg:1620311031972&source=lnms&tbm=isch&sa=X&ved=2ahUKEwigx_H7oLXwAhVk8-AKHdhCCWAQ_AUoAXoECAEQAw&biw=1280&bih=577#imgrc=Ga9KlppxGyfTbM"},
                {enlace: "https://www.google.com/search?q=sistema+de+riego+foto+4k&rlz=1C1GCEA_enES888ES888&sxsrf=ALeKk01GzFXniUUO19s7t_KAMeoto9L1Bg:1620311031972&source=lnms&tbm=isch&sa=X&ved=2ahUKEwigx_H7oLXwAhVk8-AKHdhCCWAQ_AUoAXoECAEQAw&biw=1280&bih=577#imgrc=Ga9KlppxGyfTbM"},
                {enlace: "https://www.google.com/search?q=sistema+de+riego+foto+4k&rlz=1C1GCEA_enES888ES888&sxsrf=ALeKk01GzFXniUUO19s7t_KAMeoto9L1Bg:1620311031972&source=lnms&tbm=isch&sa=X&ved=2ahUKEwigx_H7oLXwAhVk8-AKHdhCCWAQ_AUoAXoECAEQAw&biw=1280&bih=577#imgrc=Ga9KlppxGyfTbM"},
                {enlace: "https://www.google.com/search?q=sistema+de+riego+foto+4k&rlz=1C1GCEA_enES888ES888&sxsrf=ALeKk01GzFXniUUO19s7t_KAMeoto9L1Bg:1620311031972&source=lnms&tbm=isch&sa=X&ved=2ahUKEwigx_H7oLXwAhVk8-AKHdhCCWAQ_AUoAXoECAEQAw&biw=1280&bih=577#imgrc=Ga9KlppxGyfTbM"},
            ]
        }
    },
    components:{
        Presupuestos
    },
    
    methods:{
        direccionarconID1(){
            let servicioID = 1
            console.log("Direccionar hacía presupuesto con ID: " + servicioID);
            this.$router.replace(`/Presupuesto/${servicioID}`)
        },
        direccionarconID2(){
            let servicioID = 2
            console.log("Direccionar hacía presupuesto con ID: " + servicioID);
            this.$router.replace(`/Presupuesto/${servicioID}`)
        },

        direccionarconID3(){
            let servicioID = 3
            console.log("Direccionar hacía presupuesto con ID: " + servicioID);
            this.$router.replace(`/Presupuesto/${servicioID}`)
        },

        direccionarconID4(){
            let servicioID = 4
            console.log("Direccionar hacía presupuesto con ID: " + servicioID);
            this.$router.replace(`/Presupuesto/${servicioID}`)
        },

        direccionarconID5(){
            let servicioID = 5
            console.log("Direccionar hacía presupuesto con ID: " + servicioID);
            this.$router.replace(`/Presupuesto/${servicioID}`)
        },

        direccionarconID6(){
            let servicioID = 6
            console.log("Direccionar hacía presupuesto con ID: " + servicioID);
            this.$router.replace(`/Presupuesto/${servicioID}`)
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
}
.card{
    margin-bottom: 30px;
}

</style>