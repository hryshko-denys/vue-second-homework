<template>
  <div class="container column">
    <content-creator @add-content="addContent" />

    <content-renderer
      :contentBlocks="contentBlocks"
      :isContentLoading="isContentLoading"
    />
  </div>

  <comments-block />
</template>

<script>
import service from './services/service'

import ContentCreator from './components/ContentCreator'
import ContentRenderer from './components/ContentRenderer'
import CommentsBlock from './components/CommentsBlock'

export default {
  components: {
    ContentCreator,
    ContentRenderer,
    CommentsBlock
  },

  data () {
    return {
      contentBlocks: [],
      isContentLoading: true
    }
  },

  async created () {
    const data = await service.fetchContent()

    if (data) {
      this.contentBlocks = Object.keys(data).map(key => {
        return {
          id: key,
          type: data[key].type,
          value: data[key].value
        }
      })
    }

    this.isContentLoading = false
  },

  methods: {
    async addContent (content) {
      this.contentBlocks.push({
        ...content,
        id: new Date()
      })

      service.postContent(content)
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
