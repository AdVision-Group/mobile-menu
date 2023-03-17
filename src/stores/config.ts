import { writable } from "svelte/store";
import type { MenuItemT } from "../types/MenuItem";
import type { MenuLinkHoverEffect } from "../types/MenuLink";

type PassedConfig = {
  items: MenuItemT[];
  links: {
    hover: MenuLinkHoverEffect;
  };
  icons: {
    color: string;
  };
};

type StoredConfig = {
  links: {
    hover: MenuLinkHoverEffect;
  };
  icons: {
    color: string;
  };
};

const defaults: StoredConfig = {
  links: {
    hover: {
      effect: "changeBackground",
      color: "#000",
      duration: 0.3,
      delay: 0,
    },
  },
  icons: {
    color: "#000",
  },
};

export const config = writable<StoredConfig>(defaults);
