import { AnchorLink } from "@components/common/link";
import * as React from "react";
import { useMenuItem } from "react-aria";

export const MenuItem: React.FC<{
  item: any;
  state: any;
}> = ({ item, state }) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  let { menuItemProps } = useMenuItem(
    {
      key: item.key,
      isDisabled: item.isDisabled,
    },
    state,
    ref,
  );

  return (
    <li role="none">
      <AnchorLink ref={ref} href={item.props.href} domProps={menuItemProps}>
        {item.rendered}
      </AnchorLink>
    </li>
  );
};
