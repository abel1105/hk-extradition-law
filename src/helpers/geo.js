// lift from https://observablehq.com/@d3/world-tour?collection=@observablehq/maps
import Versor from "./Versor";

export const getPointGeo = coor => ({
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: coor
  }
});

export const addAngle = mapData => {
  let p = [0, 0];
  let r1;
  let r2 = [0, 0, 0];
  // eslint-disable-next-line no-restricted-syntax
  for (const data of mapData) {
    if (data) {
      p = data.point;
      r1 = r2;
      r2 = [-p[0], -p[1], 0];
      data.interpolateAngle = Versor.interpolateAngles(r1, r2);
    }
  }
  return mapData;
};

// export const addAngle = (mapData, [lon, lat]) => {
//   let p1;
//   let p2 = [lon, lat];
//   let r1;
//   let r2 = [0, 0, 0];
//   // eslint-disable-next-line no-restricted-syntax
//   for (const data of mapData) {
//     if (data) {
//       p1 = p2;
//       p2 = data.point;
//       r1 = r2;
//       r2 = [p2[0] - p1[0], p2[1] - p1[1], 0];
//       data.interpolateAngle = Versor.interpolateAngles(r1, r2);
//     }
//   }
//   return mapData;
// };

export const interpolate = (t, start, end) => (end - start) * t + start;
