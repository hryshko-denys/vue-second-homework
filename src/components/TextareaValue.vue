<template>
  <div class="form-control">
    <label for="value">{{ label }}</label>
    <textarea
      id="value"
      rows="3"
      :value="blockValue"
      @change="changeValue"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    blockValue: String,
    label: String
  },

  emits: ['update:blockValue'],

  methods: {
    changeValue (event) {
      this.$emit('update:blockValue', event.target.value)
    }
  }
}
</script>

<style></style>
