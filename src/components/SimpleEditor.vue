<template>
  <div class="editor-node" ref="editorNode"></div>
</template>


<script>
import Quill from 'quill'

export default {
  props: {
    value: {
      default: '',
      type: String
    }
  },

  data () {
    return {
      editorContent: null,
      editorInstance: null,
      editorOpts: {
        modules: {
        'toolbar': [
          [{ 'font': [] }, { 'size': [] }],
          [ 'bold', 'italic', 'underline', 'strike' ],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'script': 'super' }, { 'script': 'sub' }],
          [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block' ],
          [{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }],
          [ 'direction', { 'align': [] }],
          [ 'link', 'image', 'video', 'formula' ],
          [ 'clean' ]
    ]
        },
        theme: 'snow'
      }
    }
  },

  watch: {
    value (newVal) {
      // Only update the content if it's changed from an external source
      // or else it'll act weird when you try to type anything
      if (newVal !== this.editorContent) {
        this.editorInstance.pasteHTML(newVal)
      }
    }
  },

  mounted () {
    this.initializeEditor()
  },

  beforeUnmount () {
    // Turn off all listeners set on text-change
    this.editorInstance.off('text-change')
  },

  methods: {
    initializeEditor () {
      // Set initial content that's going to be picked up by Quill
      this.$refs.editorNode.innerHTML = this.value
      // Create the Quill instance
      this.editorInstance = new Quill(this.$refs.editorNode, this.editorOpts)
      // Setup handler for whenever things change inside Quill
      this.editorInstance.on('text-change', this.onEditorContentChange)
      // Save any initial content to this.editorContent
      this.setEditorContent()
    },
    onEditorContentChange () {
      // Whenever we change anything, update this.editorContent
      this.setEditorContent()
      // Then emit its value as input so we have a working v-model
      // This $emit will be catched up in the watch:value
      // that's why we guard against calling pasteHTML
      // calling that function while we are typing is undesirable
      this.$emit('input', this.editorContent)
    },
    setEditorContent () {
      this.editorContent = this.editorInstance.getText().trim()
        ? this.editorInstance.root.innerHTML
        : ''
    }
  }
}
</script>


<style lang="sass">
@import '~quill/dist/quill.snow.css'
</style>