import * as React from "react";
import clsx from "clsx";
import NextLink from "next/link";
import { mergeProps, useFocusRing, useHover, useLink } from "react-aria";
import { useSound } from "use-sound";

import styles from "./link.module.scss";

// TODO: Add proper typing
type AriaLinkOptions = any;
type HoverProps = any;
type FocusRingProps = any;

export interface IAnchorLinkProps
  extends Omit<AriaLinkOptions, "elementType">,
    HoverProps,
    Omit<FocusRingProps, "isTextInput"> {
  href: string;
  children?: React.ReactNode;
  /**
   * @default {}
   */
  classNames?: {
    base?: string;
    isHovered?: string;
    isPressed?: string;
    isFocused?: string;
    isDisabled?: string;
    isFocusedOrHovered?: string;
  };
}

export const AnchorLink: React.FunctionComponent<IAnchorLinkProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <NextLink href={href} passHref>
      <Link {...props}>{children}</Link>
    </NextLink>
  );
};

AnchorLink.displayName = "AnchorLink";

interface ILinkProps extends Partial<IAnchorLinkProps> {
  onClick?: any;
  onMouseEnter?: any;
}

const Link = React.forwardRef<HTMLSpanElement, ILinkProps>(
  (
    { onClick, children, onPress, classNames = {}, isDisabled, ...props },
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

    const className = clsx(styles.base, classNames.base, {
      [classNames.isPressed || ""]: isPressed,
      [classNames.isHovered || ""]: isHovered,
      [classNames.isFocused || ""]: isFocused && isFocusVisible,
      [classNames.isFocusedOrHovered || ""]: (isFocused && isFocusVisible) || isHovered,
      [classNames.isDisabled || ""]: isDisabled,
    });

    return (
      <span
        ref={ref}
        className={className}
        {...mergeProps(linkProps, hoverProps, focusProps)}>
        {children}
      </span>
    );
  },
);

Link.displayName = "Link";
