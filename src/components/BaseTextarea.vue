<template>
  <div class="form-control">
    <label for="value">{{ label }}</label>
    <textarea
      id="value"
      rows="3"
      :value="modelValue"
      @input="changeValue"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    label: String
  },

  emits: ['update:modelValue'],

  methods: {
    changeValue (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style></style>
