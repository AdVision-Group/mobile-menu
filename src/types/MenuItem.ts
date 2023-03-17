export type MenuItemT = {
  content: string;
  href: string;
  children?: MenuItemT[];
  style?: {
    fontSize?: string;
    fontWeight?: string;
  };
};
