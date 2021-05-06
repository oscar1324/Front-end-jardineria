<template>
    <div class="container" >
     <h2><b>Realice su presupuesto</b></h2>
        <div class="row">   
            <div class="col-lg-4" >   
                <div class=" form-group">
                    <div>
                        <label> 1)Cantidad del terreno para trabajar:</label><br>
                        <input type="radio"> menos de 50 m2 <br>
                        <input type="radio"> entre 50 y 150 m2<br>
                        <input type="radio"> entre 150 y 300 m2<br>
                        <input type="radio"> más de 300 m2<br>
                    </div>
                    <button type="button" class="btn btn-danger">Calcular presupuesto</button>
                </div>
            </div>
            <div class="col-lg-3 form-group" >
                <div class=" form-group" >
                    <label>Comentarios sobre su presupuesto:</label>
                    <textarea cols="30" rows="5" placeholder="Escriba..."></textarea>
                </div>
            </div>
            <div class="col-lg-3">
                <p>Se calcula el presupuesto</p>
                <p>El presupuesto es de ... 80 euros</p>
            </div>
        </div>

        <p>ID de servicio recibido: </p>
   </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },

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