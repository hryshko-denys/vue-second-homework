<template>
  <button class="btn primary" type="submit" :disabled="isButtonDisabled">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    contentValue: String
  },

  computed: {
    isButtonDisabled () {
      console.log(this.contentValue, 'this.contentValue')
      return this.contentValue.length < 3
    }
  }
}
</script>
