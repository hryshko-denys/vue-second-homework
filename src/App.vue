<template>
  <content-creator-layout>
    <editor-form @add-content="addContent"></editor-form>

    <content-block :content="content"></content-block>
  </content-creator-layout>

  <comments-block
    @activate-loader="isLoaderActive = true"
    @stop-loader="isLoaderActive = false"
  ></comments-block>
  <loader v-if="isLoaderActive"></loader>
</template>

<script>
import EditorForm from './components/EditorForm'
import ContentBlock from './components/ContentBlock'
import CommentsBlock from './components/CommentsBlock'
import Loader from './components/Loader'
import ContentCreatorLayout from './components/ContentCreatorLayout'

export default {
  components: {
    EditorForm,
    ContentBlock,
    CommentsBlock,
    Loader,
    ContentCreatorLayout
  },

  data () {
    return {
      content: [],
      isLoaderActive: false
    }
  },

  methods: {
    addContent (content) {
      this.content.push(content)
    }
  }
}
</script>

<style>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
