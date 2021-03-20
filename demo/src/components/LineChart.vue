<template>
  <LayerCake>
    <SvgWrapper title="Chart Test" description="Chart description">
      <g class="xAxis">
        <text
          v-for="tick in xTicks"
          :key="tick"
          :x="`${x(tick)}%`"
          y="100%"
          dy="10"
          text-anchor="middle"
          dominant-baseline="hanging"
          >{{ tick }}</text
        >
      </g>
      <g class="yAxis">
        <text
          v-for="tick in yTicks"
          :key="tick"
          dx="-10"
          x="0%"
          :y="`${y(tick)}%`"
          text-anchor="end"
          dominant-baseline="middle"
          >{{ tick }}</text
        >
      </g>
      <SvgScalable>
        <path
          :d="linePath"
          fill="none"
          stroke="#D3F3EE"
          stroke-width="2"
        ></path>
      </SvgScalable>
      <circle
        v-for="(d, idx) in dataset"
        :key="idx"
        :cx="`${x(xAccessor(d))}%`"
        :cy="`${y(yAccessor(d))}%`"
        r="4"
        fill="#7FB7BE"
      ></circle>
    </SvgWrapper>
  </LayerCake>
</template>

<script lang="ts">
import { scaleLinear } from 'd3-scale';
import { line } from 'd3-shape';
import { defineComponent } from 'vue';
import { computed } from 'vue';

import LayerCake from './LayerCake.vue';
import SvgScalable from './SvgScalable.vue';
import SvgWrapper from './SvgWrapper.vue';

export default defineComponent({
  name: 'App',
  components: { LayerCake, SvgWrapper, SvgScalable },
  props: {
    dataset: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const xAccessor = (d: number[]) => d?.[0];
    const yAccessor = (d: number[]) => d?.[1];

    const size = 100;
    const margin = { top: 2, bottom: 2, left: 2, right: 2 };

    const x = scaleLinear()
      .domain([0, 100])
      .range([margin.left, size - margin.right]);
    const y = scaleLinear()
      .domain([0, 100])
      .range([size - margin.bottom, margin.top]);

    const xTicks = x.ticks(4);
    const yTicks = y.ticks(3);

    const lineGenerator = line()
      .x((d: number) => x(xAccessor(d)))
      .y((d: number) => y(yAccessor(d)));

    const linePath = computed(() => lineGenerator(props.dataset));

    return { x, y, xTicks, yTicks, xAccessor, yAccessor, linePath };
  },
});
</script>
