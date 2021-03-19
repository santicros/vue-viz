<template>
  <div class="layercake-container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayerCake',
});
</script>

<style scoped>
.layercake-container,
.layercake-container :global(*) {
  box-sizing: border-box;
}
.layercake-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
}
</style>
