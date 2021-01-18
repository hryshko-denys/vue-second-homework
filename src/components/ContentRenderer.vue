<template>
  <div class="card card-w70">
    <h3 v-if="isContentEmpty">Добавьте первый блок, чтобы увидеть результат</h3>

    <component
      v-for="contentBlock in contentBlocks"
      :key="contentBlock.value"
      :is="contentBlock.type"
      :value="contentBlock.value"
    ></component>
  </div>
</template>

<script>
import Title from './Title'
import Avatar from './Avatar'
import Subtitle from './Subtitle'
import Text from './Text'

export default {
  components: {
    Title,
    Avatar,
    Subtitle,
    Text
  },

  props: {
    contentBlocks: {
      type: Array,
      required: true
    }
  },

  computed: {
    isContentEmpty () {
      return this.contentBlocks.length === 0
    }
  }
}
</script>
