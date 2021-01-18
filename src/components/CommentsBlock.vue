<template>
  <div class="container">
    <comment-button v-if="!isCommentsDownloaded" @download-comments="downloadComments">Загрузить комментарии</comment-button>
    <comments-content :comments="comments" v-else></comments-content>

    <div v-if="isLoaderActive" class="loader"></div>
  </div>
</template>

<script>
import service from '../services/service'

import CommentButton from './CommentButton'
import CommentsContent from './CommentsContent'

export default {
  components: {
    CommentButton,
    CommentsContent
  },

  data () {
    return {
      comments: [],
      isLoaderActive: false,
      isCommentsDownloaded: false
    }
  },

  methods: {
    async downloadComments () {
      this.isLoaderActive = true

      this.comments = await service.fetchComments()

      if (this.comments.length) {
        this.isCommentsDownloaded = true
      }

      this.isLoaderActive = false
    }
  }
}
</script>
