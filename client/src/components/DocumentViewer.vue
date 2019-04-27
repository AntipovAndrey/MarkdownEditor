<template>
    <div v-if="documents.currentDocument">
        <DocumentForm :doc="this.documents.currentDocument"/>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import DocumentForm from './DocumentForm.vue'

  export default {
    name: 'DocumentViewer',
    components: {
      DocumentForm
    },
    computed: mapState(['documents'])
  }
</script>

<style scoped>

</style>