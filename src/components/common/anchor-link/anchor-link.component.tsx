/* eslint-disable jsx-a11y/anchor-is-valid */

import * as React from "react";
import clsx from "clsx";
import Link from "next/link";
import { mergeProps, useHover, useLink, useFocusRing } from "react-aria";

import styles from "./anchor-link.module.scss";

import { useButtonContent } from "@utils/hooks/useButtonContent";

import type { LinkProps } from "next/link";
import type { IButtonCommonProps } from "../button/button-common";

// NOTE: This is really awkard. However it doesn't seems like the react aria have a single package that exports all types.
// TODO: Find a better way to do this.
type HoverProps = Parameters<typeof useHover>[0];
type AriaLinkOptions = NonNullable<Parameters<typeof useLink>[0]>;
type FocusRingProps = NonNullable<Parameters<typeof useFocusRing>[0]>;

export interface ILinkProps
  extends FocusRingProps,
    HoverProps,
    AriaLinkOptions,
    Pick<IButtonCommonProps, "icon" | "icons"> {
  className?: string;
  nextLinkProps: Omit<LinkProps, "passHref">;
}

export const AnchorLink: React.FunctionComponent<ILinkProps> = ({
  children,
  className,
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
          styles.link,
          {
            [styles.isPressed]: isPressed,
            [styles.isDisabled]: props.isDisabled,
            [styles.isFocusedOrHovered]:
              isHovered || (isFocused && isFocusVisible && !props.isDisabled),
          },
          className,
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
