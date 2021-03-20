<template>
  <div class="chart-container">
    <LineChart :dataset="dataset"></LineChart>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import LineChart from './components/LineChart.vue';
export default defineComponent({
  components: { LineChart },
  setup() {
    const dataset = [
      [0, 0],
      [10, 1],
      [20, 4],
      [30, 9],
      [40, 16],
      [50, 25],
      [60, 36],
      [70, 49],
      [80, 64],
      [90, 81],
      [100, 100],
    ];

    return { dataset };
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
</style>

<style scoped>
.chart-container {
  width: min(100%, 60rem);
  height: min(80vw, 35rem);
  padding: 2.5rem;
  border: 2px solid #e2efde;
}
</style>
