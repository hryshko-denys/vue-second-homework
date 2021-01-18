<template>
  <div class="form-control">
    <label for="type">{{ label }}</label>
    <select :value="typeValue" @change="changeType" id="type">
      <option v-for="(option, key) in options" :key="option" :value="key">{{option}}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    typeValue: String,
    label: String
  },

  emits: ['update:typeValue'],

  data () {
    return {
      options: {
        title: 'Заголовок',
        subtitle: 'Подзаголовок',
        avatar: 'Аватар',
        text: 'Текст'
      }
    }
  },

  methods: {
    changeType (event) {
      this.$emit('update:typeValue', event.target.value)
    }
  }
}
</script>

<style></style>
