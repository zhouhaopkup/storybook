import classNames from "classnames";
import { Divider } from "rc-menu";

export interface MenuDividerProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string;
  prefixCls?: string;
  style?: React.CSSProperties;
  dashed?: boolean;
}
const MenuDivider: React.FC<MenuDividerProps> = ({
  prefixCls: customizePrefixCls,
  className,
  dashed,
  ...restProps
}) => {
  const prefixCls = "uikit";
  const classString = classNames(
    {
      [`${prefixCls}-item-divider-dashed`]: !!dashed,
    },
    className
  );

  return <Divider className={classString} {...restProps} />;
};

export default MenuDivider;
