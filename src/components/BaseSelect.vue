<template>
  <div class="form-control">
    <label for="type">{{ label }}</label>
    <select :value="modelValue" @change="changeType" id="type">
      <option v-for="option in options" :key="option.title" :value="option.value">{{ option.title }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    label: String,
    options: Object
  },

  emits: ['update:modelValue'],

  methods: {
    changeType (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style></style>
