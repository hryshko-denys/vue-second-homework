<template>
  <button class="btn primary" :type="type">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: String
  }
}
</script>
