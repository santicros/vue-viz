<template>
  <svg
    class="layercake-layout-svg"
    role="group"
    xmlns="http://www.w3.org/2000/svg"
    :aria-label="title"
  >
    <desc>{{ description }}</desc>
    <slot></slot>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvgWrapper',
  props: {
    title: {
      type: String,
      default: null,
      required: true,
    },
    description: {
      type: String,
      default: null,
      required: true,
    },
  },
});
</script>

<style scoped>
svg {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: visible;
}
</style>
