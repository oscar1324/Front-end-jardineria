<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <section id="Servicios">
                    <div class="titulo">
                        <h2>Nuestra empresa ofrece estos servicios:</h2>
                    </div>
                
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title" style="color: black;">Sistema riego</h5>
                                    <img src="../imagenes/riego2.jpg"  width="300" height="150">
                                    <p class="card-text" style="color: black;">El riego es fundamental, por ello instalamos sistemas de riego eficientes además de repararlos. </p>
                                    <button type="button" class="btn btn-primary">Calcular presupuesto</button>
                                    <!-- Se le pasa tipo de servicio y se redireciona hacia presupueso, recibiendo del padre ese sericio -->
                                            
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title" style="color: black;">Podas</h5>
                                    <img src="../imagenes/podar.jpg"  width="300" height="150">
                                    <p class="card-text" style="color: black;">Somos especialistas en trabajos de poda de todo tipo, tanto en altura como para arbustos y rosales.</p>
                                    <button type="button" class="btn btn-primary">Calcular presupuesto</button>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title" style="color: black;">Cesped artificial</h5>
                                    <img src="../imagenes/cespedPrimerPlano.jpg"  width="300" height="150">
                                    <p class="card-text" style="color: black;">Reduce costes de mantenimiento instalando césped artificial de calidad al mejor precio.</p>
                                    <button type="button" class="btn btn-primary">Calcular presupuesto</button>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 caja">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title" style="color: black;">mantenimiento de jardines</h5>
                                    <img src="../imagenes/mantenimiento.jpg"  width="300" height="150">
                                    <p class="card-text" style="color: black;">Ahorra tiempo y dinero en herramientas y maquinaria contratando un servicio profesional de mantenimiento.</p>
                                    <button type="button" class="btn btn-primary">Calcular presupuesto</button>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 caja">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title" style="color: black;">Desbrozar</h5>
                                    <img src="../imagenes/desbro.jpg"  width="300" height="150">
                                    <p class="card-text" style="color: black;">Nos ocupamos de limpiar tu parcela, ya sea por la obligatoriedad municipal o para tu propio disfrute.</p>
                                    <button type="button" class="btn btn-primary">Calcular presupuesto</button>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 caja">
                            <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title" style="color: black;">Plantaciones</h5>
                                    <img src="../imagenes/plantar.jpg"  width="300" height="150">
                                    <p class="card-text" style="color: black;">Los árboles son vida para su jardín y proporcionan un entorno exclusivo. Le asesoramos en su elección.</p>
                                    <button type="button" class="btn btn-primary">Calcular presupuesto</button>
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
export default {
    
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