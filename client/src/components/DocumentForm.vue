<template>
    <div id="editor">
        <div id="markdownEditor">
            <label>
                <textarea v-model="editingMarkdown"></textarea>
            </label>
        </div>
        <div id="markdownPreview">
            <div v-html="compiledMarkdown"></div>
        </div>
    </div>
</template>

<script>
  import marked from 'marked'
  import {mapMutations, mapState} from 'vuex'

  export default {
    name: 'DocumentForm',
    props: ['doc'],
    methods: {
      ...mapMutations(['UPDATE_TEXT_INPUT'])
    },
    mounted() {
      this.UPDATE_TEXT_INPUT(this.doc.content)
    },
    computed: {
      ...mapState(['form']),
      editingMarkdown: {
        get() {
          return this.form.contentText
        },
        set(value) {
          this.UPDATE_TEXT_INPUT(value)
        }
      },
      compiledMarkdown() {
        return marked(this.form.contentText)
      }
    }
  }
</script>

<style scoped>

    #editor {
        display: flex;
        flex-direction: row;
        height: 600px;
    }

    #markdownEditor {
        flex: 1 0 0;
    }

    #markdownPreview {
        background-color: #fefefe;
        padding: 0 12px;
        margin-left: 12px;
        flex: 1 0 0;
        overflow: scroll;
    }

    textarea {
        display: inline-block;
        height: 100%;
        width: 100%;
        vertical-align: top;
        box-sizing: border-box;
        border: none;
        border-right: 1px solid #ccc;
        resize: none;
        outline: none;
        background-color: #f6f6f6;
        font-size: 14px;
        font-family: 'Monaco', courier, monospace;
        padding: 20px;
    }

    code {
        color: #f66;
    }
</style>