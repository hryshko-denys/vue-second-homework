<template>
  <form class="card card-w30" @submit.prevent="addBlock">
    <base-select
      label="Тип блока"
      :options="options"
      v-model="contentType"
    ></base-select>

    <base-textarea
      label="Значение"
      v-model="contentValue"
    ></base-textarea>

  <button class="btn primary" type="submit" :disabled="isAddButtonDisabled">
    Добавить
  </button>
  </form>
</template>

<script>
import BaseSelect from './BaseSelect'
import BaseTextarea from './BaseTextarea'

export default {
  components: {
    BaseSelect,
    BaseTextarea
  },

  emits: {
    'add-content' (content) {
      const options = ['title', 'subtitle', 'avatar', 'text']

      return options.includes(content.value)
    }
  },

  data () {
    return {
      contentType: 'title',
      contentValue: '',
      options: [
        { title: 'Заголовок', value: 'title' },
        { title: 'Подзаголовок', value: 'subtitle' },
        { title: 'Аватар', value: 'avatar' },
        { title: 'Текст', value: 'text' }
      ]
    }
  },

  computed: {
    isAddButtonDisabled () {
      return this.contentValue.length <= 3
    }
  },

  methods: {
    addBlock () {
      this.$emit('add-content', {
        type: this.contentType,
        value: this.contentValue
      })

      this.contentValue = ''
      this.contentType = 'title'
    }
  }
}
</script>
