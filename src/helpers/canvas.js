/* eslint-disable no-param-reassign */

export const setupCanvas = (canvas) => {
  // Get the device pixel ratio, falling back to 1.
  const dpr = window.devicePixelRatio || 1;
  // Get the size of the canvas in CSS pixels.
  const rect = canvas.getBoundingClientRect();
  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  const ctx = canvas.getContext('2d');
  // Scale all drawing operations by the dpr, so you
  // don't have to worry about the difference.
  ctx.scale(dpr, dpr);
  return ctx;
};

export const fillPath = (context, pathRenderer, geoJSON, color) => {
  context.beginPath();
  pathRenderer(geoJSON);
  context.fillStyle = color;
  context.fill();
};

export const strokePath = (context, pathRenderer, geoJSON, color = '#000', width = 1, length = 0, scale) => {
  context.beginPath();
  pathRenderer(geoJSON);
  context.strokeStyle = color;
  context.lineWidth = width;
  const dash = [];
  if (length) {
    // 15 scale dash 680 march length 4381
    // 15 scale dash 1 march length 6.4426470588
    // 20 scale dash 905 length 4381
    // 20 scale dash 1 length 4.8408839779
    const dashRatio = 4381 / 680 * 15 / scale;
    console.log(scale, dashRatio, dashRatio * length);
    dash.push(length / dashRatio, 50000);
  }
  context.setLineDash(dash);
  context.stroke();
};
