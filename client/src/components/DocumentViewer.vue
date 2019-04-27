<template>
    <div>{{ JSON.stringify(currentDocument) }}</div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "DocumentViewer",
    computed: mapState([
      'currentDocument'
    ])
  }
</script>

<style scoped>

</style>