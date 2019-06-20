export const getScrollTop = (selector, start = false) => {
  let top =
    (window.pageYOffset || document.documentElement.scrollTop) -
    (document.documentElement.clientTop || 0);

  if (selector) {
    const node = document.querySelector(selector);
    top -= node.offsetTop;
    if (start) {
      top += node.offsetHeight;
    }
  }
  return top;
};

export const getVisualCubicRatio = (top, height) => {
  let ratio;
  ratio = top / height;
  ratio = ratio <= 1 ? ratio : 2 - ratio;
  if (ratio > 1) {
    return 1;
  }
  if (ratio < 0) {
    return 0;
  }
  return ratio * ratio * ratio;
};
