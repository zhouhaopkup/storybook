import React from "react";
import RcTooltip from "rc-tooltip";
import useMergedState from "rc-util/lib/hooks/useMergedState";
import { TooltipProps as RcTooltipProps } from "rc-tooltip/lib/Tooltip";
import { placements as Placements } from "rc-tooltip/lib/placements";
import getPlacements, { AdjustOverflow, PlacementsConfig } from "./placements";
import { cloneElement, isValidElement } from "../_util/reactNode";

export type { AdjustOverflow, PlacementsConfig };

export type TooltipPlacement =
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "leftTop"
  | "leftBottom"
  | "rightTop"
  | "rightBottom";

export interface TooltipAlignConfig {
  points?: [string, string];
  offset?: [number | string, number | string];
  targetOffset?: [number | string, number | string];
  overflow?: { adjustX: boolean; adjustY: boolean };
}

export interface AbstractTooltipProps
  extends Partial<Omit<RcTooltipProps, "children">> {
  style?: React.CSSProperties;
  className?: string;
  placement?: TooltipPlacement;
  builtinPlacements?: typeof Placements;
  openClassName?: string;
  arrowPointAtCenter?: boolean;
  autoAdjustOverflow?: boolean | AdjustOverflow;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  children?: React.ReactNode;
}

export type RenderFunction = () => React.ReactNode;

export interface TooltipPropsWithOverlay extends AbstractTooltipProps {
  title?: React.ReactNode | RenderFunction;
  overlay: React.ReactNode | RenderFunction;
}

export interface TooltipPropsWithTitle extends AbstractTooltipProps {
  title: React.ReactNode | RenderFunction;
  overlay?: React.ReactNode | RenderFunction;
}

export declare type TooltipProps =
  | TooltipPropsWithTitle
  | TooltipPropsWithOverlay;

const Tooltip = React.forwardRef<unknown, TooltipProps>((props, ref) => {
  const { children, ...restProps } = props;
  const [visible, setVisible] = useMergedState(false, {
    value: props.visible,
    defaultValue: props.defaultVisible,
  });
  const isNoTitle = () => {
    const { title, overlay } = props;
    return !title && !overlay && title !== 0; // overlay for old version compatibility
  };
  const onVisibleChange = (vis: boolean) => {
    setVisible(isNoTitle() ? false : vis);

    if (!isNoTitle()) {
      props.onVisibleChange?.(vis);
    }
  };
  const getOverlay = () => {
    const { title, overlay } = props;
    if (title === 0) {
      return title;
    }
    return overlay || title || "";
  };
  const getTooltipPlacements = () => {
    const { builtinPlacements, arrowPointAtCenter, autoAdjustOverflow } = props;
    return (
      builtinPlacements ||
      getPlacements({
        arrowPointAtCenter,
        autoAdjustOverflow,
      })
    );
  };
  let tempVisible = visible;
  if (!("visible" in props) && isNoTitle()) {
    tempVisible = false;
  }
  const child = isValidElement(children) ? children : <span>{children}</span>;
  return (
    <RcTooltip
      {...restProps}
      overlay={getOverlay()}
      visible={tempVisible}
      onVisibleChange={onVisibleChange}
      ref={ref}
      builtinPlacements={getTooltipPlacements()}
    >
      {tempVisible
        ? cloneElement(child, { className: child.props.className })
        : child}
    </RcTooltip>
  );
});

Tooltip.displayName = "Tooltip";

Tooltip.defaultProps = {
  placement: "top" as TooltipPlacement,
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true,
};

export default Tooltip;
