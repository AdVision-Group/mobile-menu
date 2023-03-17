import { cubicOut } from "svelte/easing";

export const widen = (
  node?: HTMLElement,
  opts?: {
    targetWidthPx: number;
    delay?: number;
    duration?: number;
  }
) => {
  //TODO: possibly dont user targetwidth but rather boundingclientrect and dynamic value
  const { delay = 0, duration = 400, targetWidthPx } = opts;
  return {
    delay,
    duration,
    easing: cubicOut,
    css: (t: number) => {
      return `width: ${t * targetWidthPx}px;`;
    },
  };
};
