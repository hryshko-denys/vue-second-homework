<template>
  <button class="btn primary" @click="$emit('download-comments')">
    <slot />
  </button>
</template>

<script>
export default {
  emits: ['download-comments']
}
</script>
