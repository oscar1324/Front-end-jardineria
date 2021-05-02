<template>
    <div class="container">
        <div class="row align-item-start">

            <div class="col-lg-12">
                <h1 class="display-2 text-center"> Diseño de jardines</h1> <!-- Poner en el centro con la tipografia-->
                <h2 class="text-center">Jardinería y paisajismo para embellecer tu hogar</h2>
                <hr>
            
                <!-- información de serviciocol-->
                <section class="row widgtes justify-content-around">
                    <div class=" col-lg-3 bg-image card shadow-1-strong cardOne" style="background-image: url(imagenes/riego.jpg);" >
                        <div class="card-body ">
                            <h4 class="card-title"><b>Mantenimiento</b></h4>
                            <img src="../imagenes/corta.jpg"  width="200" height="100">
                            <p class="card-text " >
                                Nuestros paisajistas realizan una proyección en 3D para optimizar el sitio al máximo. Si su jardín es pequeño y desea hacer reforma,
                            </p>
                            <a href="/servicio" >Servicios</a>
                            <!-- estilos de enlace  class="btn btn-outline-light"-->
                        </div>
                    </div>
                    <div class=" col-lg-3 bg-image card shadow-1-strong cardSecond" style="background-image: url(imagenes/fondo2.jpg);" >
                        <div class="card-body ">
                            <h4 class="card-title"><b>Sistema de riego</b></h4>
                            <img src="../imagenes/riego2.jpg"  width="200" height="100">
                            <p class="card-text" >
                                Nuestros paisajistas realizan una proyección en 3D para optimizar el sitio al máximo. Si su jardín es pequeño y desea hacer reforma,
                            </p>
                            <a href="/servicio" >Servicios</a>
                        </div>
                    </div>
                    <div class=" col-lg-3 bg-image card shadow-1-strong card3" style="background-image: url(imagenes/fondo2.jpg)" >
                        <div class="card-body ">
                             
                            <h4 class="card-title"><b>Cesped artificial</b></h4>
                            <img src="../imagenes/cespedMG.jpg"  width="200" height="100">
                            <p class="card-text" >
                                Nuestros paisajistas realizan una proyección en 3D para optimizar el sitio al máximo. Si su jardín es pequeño y desea hacer reforma,
                            </p>
                            <a href="/servicio" >Servicios</a>
                        </div>
                    </div>
                </section>
            </div>

        </div>
        <hr>
        <h3 class="text-center">Siguenos en  </h3>
        <div class="col-md-12">
            <iframe class="iframe1"  src="https://www.instagram.com/p/CMKC934FmLN/embed/" width="50%" height="300px" frameborder="0"
            scrolling="no" allowtransparency="true"></iframe>

            
            <a class="twitter-timeline ifram2" href="https://twitter.com/JardinesRobledo?ref_src=twsrc%5Etfw" width="50%" height="300px"></a>
            <!-- <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->
            
        </div>
    </div>


</template>

<script>
export default {
    
}
</script>

<style scoped>
.container{
    color: black;
    background-image: url(https://i.pinimg.com/originals/32/59/b4/3259b419f4e8f069b2fd6aefb9f15ae0.jpg);
}

.cardOne{ 
    background-color: rgb(252, 192, 30);
}
.cardSecond{
    background-color: rgb(252, 192, 30);
}
.card3{
    background-color: rgb(252, 192, 30);
}
.a{
    color: black;
}
</style>
