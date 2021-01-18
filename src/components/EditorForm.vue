<template>
  <form class="card card-w30" @submit.prevent="addBlock">
    <select-type
      label="Тип блока"
      v-model:typeValue="contentType"
    ></select-type>

    <textarea-value
      label="Значение"
      v-model:blockValue="contentValue"
    ></textarea-value>

    <form-button type="submit">Добавить</form-button>
  </form>
</template>

<script>
import SelectType from './SelectType'
import TextareaValue from './TextareaValue'
import FormButton from './FormButton'

export default {
  components: {
    SelectType,
    TextareaValue,
    FormButton
  },

  emits: ['add-content'],

  data () {
    return {
      contentType: 'title',
      contentValue: ''
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
  },

  computed: {
    isButtonDisabled () {
      return this.contentValue.length < 3
    }
  }
}
</script>

<style></style>
