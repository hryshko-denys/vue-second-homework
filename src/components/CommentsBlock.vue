<template>
  <div class="container">
    <p v-if="!isCommentsDownloaded">
    <comment-button @download-comments="downloadComments">Загрузить комментарии</comment-button>
    </p>
    <comments-content :comments="comments" v-else></comments-content>
  </div>
</template>

<script>
import CommentButton from './CommentButton'
import CommentsContent from './CommentsContent'

export default {
  components: {
    CommentButton,
    CommentsContent
  },

  emits: ['activate-loader', 'stop-loader'],

  data () {
    return {
      comments: [],
      isCommentsDownloaded: false
    }
  },

  methods: {
    async downloadComments () {
      try {
        this.$emit('activate-loader')

        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=42')
        this.comments = await response.json()
        this.isCommentsDownloaded = true
      } catch (error) {
        console.log(error.message)
      }

      this.$emit('stop-loader')
    }
  }
}
</script>
