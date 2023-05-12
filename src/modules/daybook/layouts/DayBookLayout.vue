<template>
    <daybook-navbar/>
    <div class="d-flex">
        <div class="col-4">
            <entry-list/>
        </div>
        <div class="col">
            <router-view/>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

    export default {
        components: {
            DaybookNavbar: defineAsyncComponent(()=> import('../components/DaybookNavbar.vue')),
            EntryList: defineAsyncComponent( () => import('../components/EntryList.vue'))

        }
    }
</script>