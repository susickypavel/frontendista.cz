import * as React from "react";
import clsx from "clsx";
import Link from "next/link";
import { mergeProps, useHover, useLink, useFocusRing } from "react-aria";

import styles from "./anchor-link.module.scss";

import { useButtonContent } from "@utils/hooks/useButtonContent";

import type { IAnchorLinkProps } from "./anchor-link.d";

export const AnchorLink: React.FunctionComponent<IAnchorLinkProps> = ({
  children,
  className = {},
  nextLinkProps,
  icon,
  icons,
  ...props
}) => {
  const ref = React.useRef<HTMLAnchorElement>(null);

  const { linkProps, isPressed } = useLink(
    {
      ...props,
      elementType: "span",
    },
    ref,
  );
  const { hoverProps, isHovered } = useHover(props);
  const { focusProps, isFocused, isFocusVisible } = useFocusRing(props);
  const content = useButtonContent({
    children,
    icon,
    icons,
  });

  return (
    <Link {...nextLinkProps}>
      <span
        className={clsx(
          className.root,
          {
            [className.isPressed || ""]: isPressed,
            [className.isDisabled || ""]: props.isDisabled,
            [className.isHoveredOrFocused || ""]:
              isHovered || (isFocused && isFocusVisible && !props.isDisabled),
          },
          className.override,
        )}
        {...mergeProps(focusProps, hoverProps, linkProps)}
        ref={ref}>
        {content}
        <div
          className={clsx(styles.underline, {
            [styles.underlineWithIcon]: icons?.right || icons?.left,
            [styles.underlineWithBothIcons]: icons?.right && icons?.left,
          })}
        />
      </span>
    </Link>
  );
};
