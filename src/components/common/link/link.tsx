/* eslint-disable @next/next/no-img-element */

import * as React from "react";
import clsx from "clsx";
import NextLink from "next/link";
import { mergeProps, useFocusRing, useHover, useLink } from "react-aria";
import { useSound } from "use-sound";

import styles from "./link.module.scss";

import type { IAnchorLinkProps, ILinkProps } from "./link.d";

export const AnchorLink: React.FC<IAnchorLinkProps> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <Link {...props}>{children}</Link>
    </NextLink>
  );
};

AnchorLink.displayName = "AnchorLink";

const Link = React.forwardRef<HTMLSpanElement, ILinkProps>(
  (
    {
      onClick,
      children,
      onPress,
      classNames = {},
      isDisabled,
      withUnderline = true,
      ...props
    },
    forwardedRef,
  ) => {
    const ref = React.useRef<HTMLSpanElement>(null);
    const [blob] = useSound("/audio/blob-compressed.mp3");

    React.useImperativeHandle(forwardedRef, () => ref.current!);

    const { linkProps, isPressed } = useLink(
      {
        onPress: e => {
          if (onPress) {
            onPress(e);
          }

          blob();

          if (onClick) {
            // This seems a little bit hacky, but it should be safe, as stated here:
            // https://github.com/adobe/react-spectrum/issues/1314#issuecomment-943405133
            onClick({
              ...e,
              currentTarget: e.target,
              preventDefault: () => {},
            });
          }
        },
        elementType: "span",
        isDisabled,
        ...props,
      },
      ref,
    );

    const { hoverProps, isHovered } = useHover({
      ...props,
      isDisabled,
    });

    const { focusProps, isFocusVisible, isFocused } = useFocusRing({
      isTextInput: false,
    });

    const className = clsx(
      styles.base,
      {
        [classNames.isPressed || styles.isPressed]: isPressed,
        [classNames.isHovered || ""]: isHovered,
        [classNames.isFocused || ""]: isFocused && isFocusVisible,
        [classNames.isFocusedOrHovered || ""]: (isFocused && isFocusVisible) || isHovered,
        [classNames.isDisabled || ""]: isDisabled,
      },
      classNames.override,
    );

    const isExternal = props.href && props.href.startsWith("http");

    return (
      <span
        ref={ref}
        className={className}
        {...mergeProps(linkProps, hoverProps, focusProps)}>
        {isExternal && (
          <span>
            <img src={`/api/favicon?url=${props.href}`} height={16} width={16} alt="" />
          </span>
        )}
        <span
          className={
            withUnderline
              ? clsx(
                  styles.underline,
                  {
                    [classNames.underline?.isFocusedOrHovered ||
                    styles.underlineFocusedOrHovered]:
                      (isFocused && isFocusVisible) || isHovered,
                    [classNames.underline?.isPressed || ""]: isPressed,
                  },
                  classNames.underline?.override,
                )
              : undefined
          }>
          {children}
        </span>
      </span>
    );
  },
);

Link.displayName = "Link";
