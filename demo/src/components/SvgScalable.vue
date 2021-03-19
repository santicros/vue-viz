<template>
  <svg viewBox="0 0 100 100" preserveAspectRatio="none">
    <slot></slot>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvgScalable',
});
</script>

<style scoped>
svg :global(*) {
  vector-effect: non-scaling-stroke;
}
</style>
