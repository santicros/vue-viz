<template>
  <div class="container">
    <LayerCake>
      <SvgWrapper title="Chart Test" description="Chart description">
        <g class="x">
          <text
            v-for="d in dataset"
            :key="d"
            :x="`${xAccessor(d)}%`"
            y="100%"
            dy="10"
            >{{ xAccessor(d) }}</text
          >
        </g>
        <g class="y">
          <text dx="-10" y="100%">0</text>
          <text dx="-10" y="50%">50</text>
          <text dx="-10" y="0%">100</text>
        </g>
        <circle cx="50%" cy="50%" r="6" fill="red"></circle>
        <SvgScalable>
          <polyline
            points="0,100 10,99 20,96 30,91 40,84 50,75 60,64 70,51 80,36 90,19 100,0"
            fill="none"
            stroke="red"
            stroke-width="2"
          ></polyline>
        </SvgScalable>
      </SvgWrapper>
    </LayerCake>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import LayerCake from './components/LayerCake.vue';
import SvgScalable from './components/SvgScalable.vue';
import SvgWrapper from './components/SvgWrapper.vue';

export default defineComponent({
  name: 'App',
  components: { LayerCake, SvgWrapper, SvgScalable },
  setup() {
    const xAccessor = (d) => d?.[0];
    const yAccessor = (d) => d?.[1];

    const dataset = [
      [0, 0],
      [20, 0],
      [40, 0],
      [60, 0],
      [80, 0],
      [100, 0],
    ];

    return { dataset, xAccessor, yAccessor };
  },
});
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.container {
  width: min(100vw, 60rem);
  height: min(60vw, 35rem);
  padding: 2rem;
  border: 2px solid gold;
}
</style>
