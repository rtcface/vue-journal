<template>
 <div class="entry-list-container">
    <div class="px-2 pt-2">
        <input 
        type="text"
        class="form-control"
        placeholder="Buscar entradas"
        v-model="term"
        >
    </div>
    <div class="mt-2 d-flex flex-column">
        <button 
        class="btn btn-primary mx-3"
        @click="$router.push({ name: 'entry', params: {id:'new'} } )"
        >
            <i class="fa fa-plus-circle"></i>
            Nueva Entrada
        </button>
    </div>
    <div class="entry-scrollarea">       
        <daybook-entry v-for="entry in entriesByTerm"
        :key="entry.id"
        :entry="entry"/>       
    </div>
    
 </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'


export default {
  components: { 
    DaybookEntry: defineAsyncComponent(()=> import('./DaybookEntry.vue')) 
    },
 computed: {
    ...mapGetters('journal',['getEntryByTerm']),
    entriesByTerm() {
        const result=this.getEntryByTerm( this.term )
        //console.log(result)
        return result
    }
 },
 data() {
    return {
        term: ''
    }
 }
}
</script>

<style lang="sass" scoped>

    .entry-list-container 
        border-right: 1px solid #2c3e50
        height: calc( 100vh - 56px )
    
    .entry-scrollarea
        height: calc( 100vh - 110px )
        overflow: scroll
    

</style>
