/* eslint-disable jsx-a11y/anchor-is-valid */

import * as React from "react";
import clsx from "clsx";
import Link from "next/link";
import { useFocusRing } from "@react-aria/focus";
import { mergeProps, useHover, useLink } from "react-aria";

import type { LinkProps } from "next/link";
import type { AriaLinkOptions } from "@react-aria/link";
import type { HoverProps } from "@react-aria/interactions";
import type { FocusRingProps } from "@react-aria/focus";

export interface ILinkProps extends FocusRingProps, HoverProps, AriaLinkOptions {
  className?: string;
  nextLinkProps: LinkProps;
}

export const AnchorLink: React.FunctionComponent<ILinkProps> = ({
  children,
  className,
  nextLinkProps,
  ...props
}) => {
  const ref = React.useRef<HTMLAnchorElement>(null);

  const { linkProps, isPressed } = useLink(props, ref);
  const { hoverProps, isHovered } = useHover(props);
  const { focusProps, isFocused, isFocusVisible } = useFocusRing(props);

  return (
    <Link {...nextLinkProps}>
      <a
        className={clsx(
          "outline-none link-underline",
          {
            isPressed: isPressed,
            "opacity-50 cursor-not-allowed": props.isDisabled,
            "link-underline-hovered":
              isHovered || (isFocused && isFocusVisible && !props.isDisabled),
          },
          className,
        )}
        {...mergeProps(focusProps, hoverProps, linkProps)}
        ref={ref}>
        {children}
      </a>
    </Link>
  );
};
