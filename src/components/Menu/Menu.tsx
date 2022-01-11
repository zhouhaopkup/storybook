import type { MenuProps as RcMenuProps } from "rc-menu";
import RcMenu, { ItemGroup } from "rc-menu";
import omit from "rc-util/lib/omit";
import type { DirectionType } from "./MenuContext";
import MenuContext from "./MenuContext";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";
import MenuDivider from "./MenuDivider";
import { cloneElement } from "../_util/reactNode";

export type MenuMode =
  | "vertical"
  | "vertical-left"
  | "vertical-right"
  | "horizontal"
  | "inline";

export interface MenuProps extends RcMenuProps {
  inlineIndent?: number;
}

export type { MenuDividerProps } from "./MenuDivider";

type InternalMenuProps = MenuProps & {
  collapsedWidth?: string | number;
};

interface renderMenuProps {
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
  direction?: DirectionType;
}

const InternalMenu = (props: InternalMenuProps) => {
  const renderMenu = ({ getPopupContainer, direction }: renderMenuProps) => {
    const { className, expandIcon, ...restProps } = props;
    const currentPrefixCls = "uikit";
    const passedProps = omit(restProps, ["collapsedWidth"]);
    return (
      <MenuContext.Provider
        value={{
          prefixCls: currentPrefixCls,
          inlineCollapsed: false,
          direction,
          firstLevel: true,
        }}
      >
        <RcMenu
          prefixCls={`${currentPrefixCls}-menu`}
          getPopupContainer={getPopupContainer}
          {...passedProps}
          direction={direction}
          expandIcon={cloneElement(expandIcon, {
            className: `submenu-expand-icon`,
          })}
        />
      </MenuContext.Provider>
    );
  };
  return <>{renderMenu({})}</>;
};

const Menu = (props: MenuProps) => {
  return <InternalMenu {...props} />;
};
Menu.ItemGroup = ItemGroup;
Menu.Item = MenuItem;
Menu.SubMenu = SubMenu;
Menu.Divider = MenuDivider;

InternalMenu.defaultProps = {
  theme: "light",
};

export default Menu;
