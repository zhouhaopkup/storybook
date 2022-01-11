import { createContext } from "react";

export type MenuTheme = "light" | "dark";
export type DirectionType = "ltr" | "rtl" | undefined;
export interface MenuContextProps {
  prefixCls: string;
  inlineCollapsed: boolean;
  antdMenuTheme?: MenuTheme;
  direction?: DirectionType;
  firstLevel: boolean;
  disableMenuItemTitleTooltip?: boolean;
}

const MenuContext = createContext<MenuContextProps>({
  prefixCls: "uikit",
  firstLevel: true,
  inlineCollapsed: false,
});

export default MenuContext;
