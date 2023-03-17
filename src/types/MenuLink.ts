export type MenuLinkHoverEffect =
  | {
      effect: "changeBackground";
      color: string;
      duration?: number;
      delay?: number;
    }
  | {
      effect: "underline";
      color: string;
      targetWidth?: number;
      duration?: number;
      delay?: number;
    };
