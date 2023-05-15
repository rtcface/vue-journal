<template>  
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2023, viernes</span>
    </div>
    <div>
        <button class="btn btn-danger mx-2">
          Borrar
          <i class="fa fa-trash-alt"></i>
        </button>
         <button class="btn btn-primary">
          Subir foto
          <i class="fa fa-upload"></i>
        </button>
    </div>
  </div>

  <hr>

  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Qué sucedio hoy?"></textarea>
  </div>

  <daybook-fab icon="fa-save"/>

  <img 
    src="https://media.gq.com.mx/photos/60cf8f0a33c54bdef67610ee/16:9/w_2560%2Cc_limit/paisaje.jpg" 
    alt="entry img"
    class="img-thumbnail"
    >
  


</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: { DaybookFab: defineAsyncComponent( () => import('../components/DaybookFab.vue')), 
  },
}
</script>

<style lang="scss" scoped>

  textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
      outline:none
    }  

  }

  img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 3.0);
  }

</style>