import * as React from "react";
import { SubMenu as RcSubMenu, useFullPath } from "rc-menu";
import omit from "rc-util/lib/omit";
import MenuContext from "./MenuContext";
import { cloneElement, isValidElement } from "../_util/reactNode";
import classNames from "classnames";

interface TitleEventEntity {
  key: string;
  domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}

export interface SubMenuProps {
  className?: string;
  disabled?: boolean;
  level?: number;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  onTitleClick?: (e: TitleEventEntity) => void;
  onTitleMouseEnter?: (e: TitleEventEntity) => void;
  onTitleMouseLeave?: (e: TitleEventEntity) => void;
  popupOffset?: [number, number];
  popupClassName?: string;
  children?: React.ReactNode;
}

const SubMenu = (props: SubMenuProps) => {
  const { popupClassName, icon, title } = props;
  const context = React.useContext(MenuContext);
  const { inlineCollapsed } = context;
  const parentPath = useFullPath();
  let titleNode: React.ReactNode;

  if (!icon) {
    titleNode =
      inlineCollapsed &&
      !parentPath.length &&
      title &&
      typeof title === "string" ? (
        <div className={`inline-collapsed-noicon`}>{title.charAt(0)}</div>
      ) : (
        <span className={`title-content`}>{title}</span>
      );
  } else {
    const titleIsSpan = isValidElement(title) && title.type === "span";
    titleNode = (
      <>
        {cloneElement(icon, {
          className: classNames(
            isValidElement(icon) ? `uikit-${icon.props?.className}` : "",
            `uikit-item-icon`
          ),
        })}
        {titleIsSpan ? title : <span className={`title-content`}>{title}</span>}
      </>
    );
  }

  return (
    <MenuContext.Provider
      value={{
        ...context,
        firstLevel: false,
      }}
    >
      <RcSubMenu
        {...omit(props, ["icon"])}
        title={titleNode}
        popupClassName={classNames(`uikit-${popupClassName}`)}
      />
    </MenuContext.Provider>
  );
};

export default SubMenu;
