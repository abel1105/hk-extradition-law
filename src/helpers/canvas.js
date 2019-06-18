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

export const strokePath = (context, pathRenderer, geoJSON, color, width = 1, dash = 0) => {
  context.beginPath();
  pathRenderer(geoJSON);
  context.strokeStyle = color;
  context.lineWidth = width;
  if (dash) {
    context.setLineDash([dash, 50000]);
  }
  context.stroke();
};