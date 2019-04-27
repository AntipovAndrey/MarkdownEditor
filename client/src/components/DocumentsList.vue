<template>
    <ul>
        <li v-for="(docPreview, index) in documents.availableDocuments" v-bind:key="index"
            v-on:click="selectDocument(docPreview.id)">
            {{ docPreview.title }}
            {{ docPreview.created }}
        </li>
    </ul>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'DocumentsList',
    mounted() {
      this.loadDocumentsList()
    },
    computed: mapState(['documents']),
    methods: {
      ...mapActions(['selectDocument', 'loadDocumentsList']),
    }
  }
</script>

<style scoped>

    ul {
        list-style-type: none;
        padding: 0;
    }

    ul li {
        padding: 20px;
        background: white;
        margin-bottom: 8px;
    }
</style>