import React, { useContext } from "react";
import { Item, MenuItemProps as RcMenuItemProps } from "rc-menu";
import toArray from "rc-util/lib/Children/toArray";
import classNames from "classnames";
import MenuContext, { MenuContextProps } from "./MenuContext";
import Tooltip, { TooltipProps } from "../Tooltip/Tooltip";
import { isValidElement, cloneElement } from "../_util/reactNode";

export interface MenuItemProps extends Omit<RcMenuItemProps, "title"> {
  icon?: React.ReactNode;
  danger?: boolean;
  title?: React.ReactNode;
}

const MenuItem = (props: MenuItemProps) => {
  const context = useContext<MenuContextProps>(MenuContext);
  const {
    prefixCls,
    firstLevel,
    inlineCollapsed,
    direction,
    disableMenuItemTitleTooltip,
  } = context;
  const { className, children, title, icon, danger, ...rest } = props;
  const renderItemChildren = (inlineCollapsed: boolean) => {
    const wrapNode = (
      <span className={`${prefixCls}-title-content`}>{children}</span>
    );
    if (!icon || (isValidElement(children) && children.type === "span")) {
      if (
        children &&
        inlineCollapsed &&
        firstLevel &&
        typeof children === "string"
      ) {
        return (
          <div className={`inline-collapsed-noicon`}>{children.charAt(0)}</div>
        );
      }
    }
    return wrapNode;
  };
  const renderItem = () => {
    let tooltipTitle = title;
    if (typeof title === "undefined") {
      tooltipTitle = firstLevel ? children : "";
    } else if (title === false) {
      tooltipTitle = "";
    }
    const tooltipProps: TooltipProps = {
      title: tooltipTitle,
    };
    if (!inlineCollapsed) {
      tooltipProps.title = null;
      tooltipProps.visible = false;
    }
    const childrenLength = toArray(children).length;
    let returnNode = (
      <Item
        {...rest}
        className={classNames(
          {
            [`${prefixCls}-item-danger`]: danger,
            [`${prefixCls}-item-only-child`]:
              (icon ? childrenLength + 1 : childrenLength) === 1,
          },
          className
        )}
        title={typeof title === "string" ? title : undefined}
      >
        {cloneElement(icon, {
          className: classNames(
            isValidElement(icon) ? icon.props?.className : "",
            `${prefixCls}-item-icon`
          ),
        })}
        {renderItemChildren(inlineCollapsed)}
      </Item>
    );
    if (!disableMenuItemTitleTooltip) {
      returnNode = (
        <Tooltip
          {...tooltipProps}
          placement={direction === "rtl" ? "left" : "right"}
          overlayClassName={`${prefixCls}-inline-collapsed-tooltip`}
        >
          {returnNode}
        </Tooltip>
      );
    }
    return returnNode;
  };
  return <>{renderItem()}</>;
};

export default MenuItem;
