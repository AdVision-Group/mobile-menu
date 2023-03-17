import { cubicOut } from "svelte/easing";

export const fromSide = (
  node?: HTMLElement,
  opts?: {
    delay?: number;
    duration?: number;
    side?: "left" | "right" | "top" | "bottom";
  }
) => {
  const { delay = 0, duration = 400, side = "left" } = opts;
  return {
    delay,
    duration,
    easing: cubicOut,
    css: (t: number) => {
      switch (side) {
        case "left":
          return `left: ${-100 + t * 100}%;`;
        case "right":
          return `left: ${100 - t * 100}%;`;
        case "top":
          return `top: ${-100 + t * 100}%;`;
        case "bottom":
          return `top: ${100 - t * 100}%;`;
      }
    },
  };
};
