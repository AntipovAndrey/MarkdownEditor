<template>
    <div id="container">
        <div id="left">
            <DocumentsList/>
        </div>
        <div id="right">
            <DocumentViewer/>
        </div>
    </div>
</template>

<script>
  import DocumentsList from './components/DocumentsList.vue'
  import DocumentViewer from './components/DocumentViewer.vue'

  export default {
    name: 'app',
    components: {
      DocumentsList, DocumentViewer
    },
  }

</script>

<style>
    html {
        height: 100%;
    }

    body {
        background-color: #EFEFEF;
        margin: 0;
        height: 100%;
    }

    #container {
        display: flex;
        height: 100%;
    }

    #left {
        flex: 1;
    }

    #left, #right {
        padding: 10px;
    }

    #right {
        flex: 4 0 0;
        background-color: #E9E9E9;
    }
</style>
