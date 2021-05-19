<template>
    <div class="container">
        <div class="row align-item-start">

            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 class="display-2 text-center"> Diseño de jardines</h1> <!-- Poner en el centro con la tipografia-->
                <h2 class="text-center">Jardinería y paisajismo para embellecer tu hogar</h2>
                <hr>
            
                <!-- información de serviciocol-->
                <section class="row widgtes justify-content-around">
                    <div class=" col-lg-4 col-md-4 col-sm-12 col-xs-12 bg-image card shadow-1-strong card3" style="background-image: url(imagenes/riego.jpg);" >
                        <div class="card-body text-center">
                            <h4 class="card-title"><b>Mantenimiento</b></h4>
                            <img src="../imagenes/corta.jpg"  width="200" height="100" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p class="card-text " >
                                Nuestros paisajistas realizan una proyección en 3D para optimizar el sitio al máximo. Si su jardín es pequeño y desea hacer reforma,
                            </p>
                            <button type="button" class="btn btn-primary" @click="goServicios($route.params.usuario)">Servicios</button>
                            <!-- estilos de enlace  class="btn btn-outline-light"-->
                        </div>
                    </div>
                    <div class=" col-lg-4 col-md-4 col-sm-12 col-xs-12 bg-image card shadow-1-strong card3" style="background-image: url(imagenes/fondo2.jpg);" >
                        <div class="card-body text-center">
                            <h4 class="card-title"><b>Sistema de riego</b></h4>
                            <img src="../imagenes/riego2.jpg"  width="200" height="100" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p class="card-text" >
                                Nuestros paisajistas realizan una proyección en 3D para optimizar el sitio al máximo. Si su jardín es pequeño y desea hacer reforma,
                            </p>
                            <button type="button" class="btn btn-primary" @click="goServicios($route.params.usuario)">Servicios</button>
                        </div>
                    </div>
                    <div class=" col-lg-4 col-md-4 col-sm-12 col-xs-12 bg-image card shadow-1-strong card3" style="background-image: url(imagenes/cesped2.jpg)" >
                        <div class="card-body text-center">
                             
                            <h4 class="card-title"><b>Cesped artificial</b></h4>
                            <img src="../imagenes/cespedMG.jpg"  width="200" height="100" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p class="card-text " >
                                Nuestros paisajistas realizan una proyección en 3D para optimizar el sitio al máximo. Si su jardín es pequeño y desea hacer reforma,
                            </p>
                            <button type="button" class="btn btn-primary " @click="goServicios($route.params.usuario)">Servicios</button>
                        
                        </div>
                    </div>
                </section>
            </div>

        </div>
        <hr>
        
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h3 class="text-center">Siguenos en  </h3>
            <iframe class="iframe1 col-lg-5 col-md-12 col-sm-12"  src="https://www.instagram.com/p/CMKC934FmLN/embed/" width="50%" height="300px" frameborder="0"
            scrolling="no" allowtransparency="true"></iframe>

            <a class="twitter-timeline ifram2" href="https://twitter.com/JardinesRobledo?ref_src=twsrc%5Etfw" width="50%" height="300px"></a>
            <div  class="col-lg-6 col-md-12 col-sm-12 descripcion ">
                <p>
                    Jardines de Kalmia es su empresa de la sierra de Francia.<br> 
                    Entre los servicios que ofrecemos está el mantenimiento <br> 
                    del jardín, diseño y ejecución de jardines nuevos, trabajos de<br> 
                    poda e instalaciones de césped o riegos.
                </p>
                <p>Trabajamos con:</p>
                <img src="../imagenes/logo1.jpg" width="100" height="80" class="col-lg-5 col-md-5 col-sm-5 col-xs-5"> 
                <img src="../imagenes/logo2.jpg" width="100" height="80" class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
            </div>
        </div>
        
    </div>


</template>

<script>
export default {
    data(){
        return{

        }
    },

    methods:{
        goServicios(usuario){
            this.$router.replace(`/servicio/${usuario}`);
        }
    }
}
</script>

<style scoped>
.container{
    color: white;
    background-image: url(https://i.pinimg.com/originals/32/59/b4/3259b419f4e8f069b2fd6aefb9f15ae0.jpg);
    border-radius: 20px;
    height: 100%;
}
.card3{
    margin-top: 10px;
    background-color: rgb(252, 192, 30);
    border-radius: 20px;
    color: black;
    
}
.a{
    color: black;
}
.descripcion{
    float: right;
    font-size: 16px;
    
}

</style>
