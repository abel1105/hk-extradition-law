<template>
  <div class="map-wrapper">
    <canvas id="map"></canvas>
  </div>
</template>

<script>
import * as d3 from 'd3';
import { fillPath, setupCanvas, strokePath } from '../helpers/canvas';
import { getScrollTop } from '../helpers/scroll';
import mapData from '../data';
import { addAngle, interpolateScale } from '../helpers/geo';

let context;
let projection;
let pathRenderer;
let defaultScale;

export default {
  name: 'Map',
  props: {
    width: Number,
    height: Number,
    map: Object,
    road: Object,
    march: Object,
  },
  mounted() {
    this.bind();
    this.initMap();
    this.drawMap();
    // this.drawRoad();


    // setTimeout(() => {
    //   // projection = projection.center([114.3782, 22.5054]);
    //   // pathRenderer = d3.geoPath(projection, context);
    //
    //   this.drawRoad();
    // }, 1000);
  },
  destroyed() {
    this.unbind();
  },
  methods: {
    bind() {
      window.addEventListener('scroll', this.drawOnScroll);
      window.addEventListener('resize', this.resize);
    },
    unbind() {
      window.removeEventListener('scroll', this.drawOnScroll);
      window.removeEventListener('resize', this.resize);
    },
    initMap() {
      d3.select('canvas#map')
        .style('height', `${this.height}px`)
        .style('width', `${this.width}px`);
      // setup canvas
      context = setupCanvas(document.querySelector('canvas#map'));
      // setup projection
      projection = d3.geoOrthographic()
        .fitExtent([[10, 10], [this.width - 10, this.height - 10]], { type: 'Sphere' })
        .rotate([-114.151, -22.408, 0])
        .scale(70000);
      // get default scale
      defaultScale = projection.scale();
      // add angle
      addAngle(mapData);
    },
    resize() {
      this.initMap();
    },
    drawOnScroll() {
      const top = getScrollTop();
      const now = Math.floor(top / this.height);
      if (!mapData[now] || !mapData[now + 1]) return;
      const ratio = top / this.height - now;
      // get angle
      const { scale: lastScale } = mapData[now];
      const { interpolateAngle, scale: nextScale } = mapData[now + 1];
      const angle = interpolateAngle(ratio);
      // get scale
      const scale = interpolateScale(ratio, defaultScale * lastScale, defaultScale * nextScale);
      // rotate and scale
      projection = projection.scale(scale).rotate(angle);
      // draw
      this.drawMap();
      // draw road
      if (now >= 1) this.drawRoad();
      // draw march
      if (now >= 2) this.drawMarch();

    },
    drawMap() {
      // setup path renderer
      pathRenderer = d3.geoPath(projection, context);
      // clean canvas
      context.clearRect(0, 0, this.width, this.height);
      // draw hk map
      fillPath(context, pathRenderer, this.map, '#b3b3b3');
    },
    drawRoad() {
      strokePath(context, pathRenderer, this.road, '#eee');
    },
    drawMarch() {
      strokePath(context, pathRenderer, this.march, '#000', 5);
    },
  },
};
</script>

<style>
  .map-wrapper {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: sticky;
    top: 0
  }
</style>
