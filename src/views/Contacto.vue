<template>
    <div class="container">
        <div class="row ">
            <div class="col-lg-5  mapa">
                <h2 class="hhh">Contacte con nosotros:</h2>
                <p>
                    Si tienes alguna duda sobre nuestros servicios o necesitas ayuda con tu jardín 
                    rellena el cajón de texto y te responderemos con la mayor brevedad. <br>
                </p>
                <p><b>Dirección:</b><br> Calle Regato Pinilla, 8, 37188 San Miguel de robledo, Salamanca</p>
                <p><b>Número de teléfono:</b><br>655 36 95 86</p>
                <p><b>Email:</b><br>jardinesRobledo@gmail.com</p>
                <p><b>Horario:</b><br>Lunes-Viernes<br>9:00-14:00/ 16:00-19:30</p>


            </div>

            <div class="col-lg-6 mapa">
                <h2>Como llegar a nuestra oficina:</h2>
                <iframe class="form-control" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205619.21214476723!2d-6.020059950995106!3d40.530991882308435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3ef4eb1affef7f%3A0x7a8a1cac10d1ebf3!2sJardines%20del%20Robledo!5e0!3m2!1ses!2ses!4v1615309593195!5m2!1ses!2ses" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                <hr>
                <b> EN JARDINES DE ROBLEDO ESTAMOS A TU DISPOSICIÓN PARA OFRECER TODO 
                        TIPO DE SERVICIOS DE JARDINERÍA TANTO A PARTICULARES COMO A EMPRESAS.
                </b>
                <p> Trabajamos en San Miguel de robledo, comunidad de castilla y leon y zonas limítrofes ofreciendo un servicio especializado y siempre 
                    teniendo presente el medio ambiente. Entre los servicios que ofrecemos está el mantenimiento del jardín,
                    ejecución de jardines nuevos, trabajos de poda e instalaciones de césped o riegos. 
                </p>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    
}
</script>
<style scoped>
.container{
    color: antiquewhite;
    background-image: url(https://i.pinimg.com/originals/32/59/b4/3259b419f4e8f069b2fd6aefb9f15ae0.jpg);
}
/*CABECERA*/
.cabeza{
    background-color: rgb(28, 29, 29);
}
.menu1{
    background-color: rgb(60, 189, 118);
}
.menu2{
    background-color: rgb(0, 189, 85);
}
.menu3{
    background-color: rgb(0, 189, 85);
}
/*CUERPO*/
.hhh{
    margin-bottom: 40px;
}
.contacto{
    background-color: red;
}
.iframe1{
    float: left;
}
.iframe2{
    float: right;
}

/*mapa*/
.mapa{
    color: black;
}


/*Estilos de servicios que esta enlazado con concacto*/

 #Servicios{

     padding: 10px;

 }
 #Servicios h1 {
     font-weight: 900;
     font-size: 34px;
     padding-bottom: 5px;
 }
 .title{
     text-align: center;
     padding: 25px;
 }
 .title p{
     font-size: 18px;
 }
 .card-body{
     box-shadow: 0 0 20 7px black;
 }
 .card-body a {
     color:  rgb(37, 145, 233);
     text-decoration: none;
     font-size: 15px;
     margin-top: auto;
     font-weight: 600;
 }
 .caja{
     margin-top: 20px;
 }

</style>