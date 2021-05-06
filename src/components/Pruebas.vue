<template>
    <h3>Pruebas:</h3>
    <button type="button" class="btn btn-primary" @click="añadir()">Cambiar condición avisado</button>
    <button type="button" class="btn btn-primary" @click="modificar()">Cambiar condición modificado</button>
    <button type="button" class="btn btn-primary" @click="borrar()">Cambiar condición borrar</button>


    <div class="alert alert-success" role="alert" v-if="aviso === true">
        <h4 class="alert-heading" >Insertado correctamente</h4>
    </div>
    <div class="alert alert-success" role="alert" v-if="modificado === true">
        <h4 class="alert-heading" >Modificado correctamente</h4>
    </div>
    <div class="alert alert-danger" role="alert" v-if="borrado === true">
        <h4 class="alert-heading" >Borrado correctamente</h4>
    </div>
</template>

<script>
export default {
    data(){
        return{
            aviso: false,
            modificado: false,
            borrado:false

        }
    },

    methods:{
        añadir(){
            
            this.aviso = true;
            setTimeout(()=>{
                this.aviso = false;
            }, 3500);
        },

        modificar(){
            this.modificado = true;
            setTimeout(()=>{
                this.modificado = false;
            }, 3500);
        },

        borrar(){
            this.borrado = true;
            setTimeout(()=>{
                this.borrado = false;
            }, 3500);
        },
    }
}
</script>