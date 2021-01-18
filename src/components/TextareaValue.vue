<template>
  <div class="form-control">
    <label for="value">{{ label }}</label>
    <textarea
      id="value"
      rows="3"
      :value="contentValue"
      @change="changeValue"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    contentValue: String,
    label: String
  },

  emits: ['update:contentValue'],

  methods: {
    changeValue (event) {
      this.$emit('update:contentValue', event.target.value)
    }
  }
}
</script>

<style></style>
