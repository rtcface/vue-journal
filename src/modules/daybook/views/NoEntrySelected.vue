<template>
<div class="d-flex justify-content-center">
    <h1 class="align-self-center">
        No hay nada seleccionado
    </h1>    
</div>  
<daybook-fab/>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components:{
        DaybookFab: defineAsyncComponent( () => import('../components/DaybookFab.vue'))
        
    }

}
</script>

<style lang="scss" scoped>

    div{
        height: 100%;
    }

</style>