<template>  
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">{{day}}</span>
      <span class="mx-1 fs-3">{{month}}</span>
      <span class="mx-2 fs-4 fw-light">{{yearDay}}</span>
    </div>
    <div>
        <button 
        v-if="entry.id"
        class="btn btn-danger mx-2"
        @click="onDeleteEntry">
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
    <textarea
    v-model="entry.text" 
    placeholder="¿Qué sucedio hoy?"></textarea>
  </div>
  <img 
    src="https://media.gq.com.mx/photos/60cf8f0a33c54bdef67610ee/16:9/w_2560%2Cc_limit/paisaje.jpg" 
    alt="entry img"
    class="img-thumbnail"
    >
  
  </template>
  <daybook-fab 
    icon="fa-save"
    @on:click="saveEntry"
  />
  
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'
import getDateMonthYear from '../helpers/getDateMonthYear'
import Swal from 'sweetalert2'

export default {
  props: {
    id:{
        type: String,
        required: true
    }
  },
  components: { 
    DaybookFab: defineAsyncComponent( () => import('../components/DaybookFab.vue')), 
    },
  data(){
    return {
      entry:null
    }
  },
  methods:{
     loadEntry() {
      let entry
      if( this.id === 'new'){
        entry = {
          text: '',
          date: new Date().getTime()
        }
      }else {
        entry =  this.getEntryById(this.id)
        if( !entry ) return this.$router.push({ name: 'no-entry'})
      }


      
      this.entry = entry
      //console.log(entry)
    },
    ...mapActions('journal',['updateEntry','createEntry','deleteEntry']),
      async saveEntry(){
          new Swal({
            title: 'Espere por favor',
            allowOutsideClick: false
          })

          Swal.showLoading()

          if( this.entry.id  ) {
            await this.updateEntry(this.entry)
          } else{
            const id = await this.createEntry(this.entry)
            console.log(id)
            this.$router.push({name:'entry',params:{id}})
          }
          Swal.fire('Guardado','Entrada registrada con exito', "success")
    },
    async onDeleteEntry(){
      
      const { isConfirmed } = await Swal.fire({
        title: '¿Está seguro?',
        text: 'Una vez borrado, no se puede recuperar',
        showDenyButton:true,
        confirmButtonText: 'Si estoy seguro'
      })

      if( isConfirmed ){

        new Swal({title: 'Espere por favor',
        allowOutsideClick: false
        })
        Swal.showLoading()
        await this.deleteEntry(this.entry.id)
        this.$router.push({name:'no-entry'})
        Swal.fire('Eliminado','','success')
      }




    }
  },
  created(){
    //console.log(this.id)
    this.loadEntry()
  },
  computed:{
    ...mapGetters('journal',['getEntryById']),
    day(){
     const  { day } = getDateMonthYear( this.entry.date )
     return day
    },
    month(){
      const { month } = getDateMonthYear( this.entry.date )
      return month;
    },
    yearDay(){
      const { yearDay } = getDateMonthYear( this.entry.date )
      return yearDay;
    }
  },
  watch: {
    id(){
       this.loadEntry()
    }
  }

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