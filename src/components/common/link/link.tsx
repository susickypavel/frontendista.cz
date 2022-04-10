/* eslint-disable @next/next/no-img-element */

import * as React from "react";
import clsx from "clsx";
import NextLink from "next/link";
import { mergeProps, useFocusRing, useHover, useLink } from "react-aria";
import { useSound } from "use-sound";

import styles from "./link.module.scss";

import type { IAnchorLinkProps, ILinkProps } from "./link.d";
import { HiExternalLink } from "react-icons/hi";

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

    const isFocusedOrHovered = (isFocused && isFocusVisible) || isHovered;

    const className = clsx(
      styles.base,
      {
        [classNames.isPressed || styles.isPressed]: isPressed,
        [classNames.isHovered || ""]: isHovered,
        [classNames.isFocused || ""]: isFocused && isFocusVisible,
        [classNames.isFocusedOrHovered || ""]: isFocusedOrHovered,
        [classNames.isDisabled || ""]: isDisabled,
      },
      classNames.override,
    );

    return (
      <span
        ref={ref}
        className={className}
        {...mergeProps(linkProps, hoverProps, focusProps)}>
        {props.href && props.href.startsWith("http") && (
          <ExternalIcon href={props.href} isVisible={isFocusedOrHovered} />
        )}
        <span
          className={
            withUnderline
              ? clsx(
                  styles.underline,
                  {
                    [classNames.underline?.isFocusedOrHovered ||
                    styles.underlineFocusedOrHovered]: isFocusedOrHovered,
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

const ExternalIcon: React.FC<{ href: string; isVisible: boolean }> = ({
  href,
  isVisible,
}) => {
  return (
    <span className={styles.externalIcon}>
      <img
        className={clsx(styles.externalIconFavicon, {
          [styles.externalIconFaviconHidden]: isVisible,
        })}
        src={`/api/favicon?url=${href}`}
        alt=""
      />
      {isVisible && (
        <HiExternalLink className={styles.externalIconSVG} aria-hidden="true" />
      )}
    </span>
  );
};
