<template>
  <div class="map-wrapper">
    <canvas id="map"></canvas>
  </div>
</template>

<script>
import * as d3 from "d3";
import debounce from "lodash/debounce";
import {
  fillPath,
  fillPoint,
  setupCanvas,
  strokePath
} from "../helpers/canvas";
import { getScrollTop } from "../helpers/scroll";
import mapData from "../data";
import { addAngle, interpolate } from "../helpers/geo";

const _ = {
  debounce
};

let context;
let projection;
let pathRenderer;
let defaultScale;

export default {
  name: "Map",
  props: {
    width: Number,
    height: Number,
    map: Object,
    road: Object,
    march: Object
  },
  mounted() {
    this.bind();
    this.initMap();
    this.drawOnScroll();
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
      window.addEventListener("scroll", this.drawOnScroll);
      window.addEventListener("resize", this.resize);
    },
    unbind() {
      window.removeEventListener("scroll", this.drawOnScroll);
      window.removeEventListener("resize", this.resize);
    },
    initMap() {
      d3.select("canvas#map")
        .style("height", `${this.height}px`)
        .style("width", `${this.width}px`);
      // setup canvas
      context = setupCanvas(document.querySelector("canvas#map"));
      // setup projection
      projection = d3
        .geoOrthographic()
        .fitExtent([[10, 10], [this.width - 10, this.height - 10]], {
          type: "Sphere"
        })
        .rotate([-114.151, -22.408, 0])
        .scale(70000);
      // get default scale
      defaultScale = projection.scale();
      // add angle
      addAngle(mapData);
    },
    resize: _.debounce(function() {
      this.initMap();
      this.drawOnScroll();
    }, 100),
    drawOnScroll() {
      const top = getScrollTop();
      const now = Math.floor(top / this.height);
      if (!mapData[now] || !mapData[now + 1]) return;
      const ratio = top / this.height - now;
      // get angle
      const { scale, time, march, circle, point } = mapData[now];
      const {
        interpolateAngle,
        scale: nextScale,
        time: nextTime,
        march: nextMarch
      } = mapData[now + 1];
      const newAngle = interpolateAngle(ratio);
      // get scale
      const newScale = interpolate(
        ratio,
        defaultScale * scale,
        defaultScale * nextScale
      );
      // rotate and scale
      projection = projection.scale(newScale).rotate(newAngle);
      // draw
      this.drawMap();
      // draw road
      if (now >= 1) this.drawRoad();
      // draw circle
      if (circle) this.drawCircle(point, circle);
      // draw march
      if (march && nextMarch) {
        let newTime = 0;
        if (time) {
          newTime = Math.floor(interpolate(ratio, time, nextTime));
          // console.log(new Date(newTime * 1000), time, nextTime);
        }
        // draw one by one
        march.forEach(marchName => {
          this.drawMarch(marchName, newTime, newScale / defaultScale);
        });
      }
    },
    drawMap() {
      // setup path renderer
      pathRenderer = d3.geoPath(projection, context);
      // clean canvas
      context.clearRect(0, 0, this.width, this.height);
      // draw hk map
      fillPath(context, pathRenderer, this.map, "#b3b3b3");
    },
    drawRoad() {
      strokePath(context, pathRenderer, this.road, "#eee");
    },
    drawCircle(point, circle) {
      fillPoint(context, pathRenderer, point, "#000", circle);
    },
    drawMarch(name, time, scale) {
      const march = {
        ...this.march,
        features: this.march.features.filter(
          feature => feature.properties.name === name
        )
      };
      const { length, start, end } = march.features[0].properties;
      if (start && end) {
        const currentLength = ((time - start) / (end - start)) * length;
        if (currentLength > 0)
          strokePath(
            context,
            pathRenderer,
            march,
            "#000",
            5,
            currentLength,
            scale
          );
      } else {
        strokePath(context, pathRenderer, march, "#000", 5);
      }
    }
  }
};
</script>

<style>
.map-wrapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: sticky;
  top: 0;
}
</style>
