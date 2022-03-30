import * as React from "react";
import clsx from "clsx";
import NextLink from "next/link";
import { mergeProps, useFocusRing, useHover, useLink } from "react-aria";
import { useSound } from "use-sound";

import type { AriaLinkOptions } from ".pnpm/@react-aria+link@3.2.3_react@17.0.2/node_modules/@react-aria/link";
import type { HoverProps } from ".pnpm/@react-aria+interactions@3.8.2_react@17.0.2/node_modules/@react-aria/interactions";
import type { FocusRingProps } from ".pnpm/@react-aria+focus@3.5.3_react@17.0.2/node_modules/@react-aria/focus";

export interface AnchorLinkProps
  extends Omit<AriaLinkOptions, "elementType">,
    HoverProps,
    Omit<FocusRingProps, "isTextInput"> {
  href: string;
  children?: React.ReactNode;
  /**
   * @default {}
   */
  className?: {
    base?: string;
    isHovered?: string;
    isPressed?: string;
    isFocused?: string;
    isDisabled?: string;
  };
}

export const AnchorLink: React.FunctionComponent<AnchorLinkProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <NextLink href={href} passHref>
      <UILink {...props}>{children}</UILink>
    </NextLink>
  );
};

AnchorLink.displayName = "AnchorLink";

interface UILinkProps extends Partial<AnchorLinkProps> {
  onClick?: any;
  onMouseEnter?: any;
}

const UILink = React.forwardRef<HTMLSpanElement, UILinkProps>(
  (
    { onClick, children, onPress, className = {}, isDisabled, ...props },
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

    return (
      <span
        ref={ref}
        {...mergeProps(linkProps, hoverProps, focusProps)}
        className={clsx(className.base, {
          [className.isHovered || ""]: isHovered,
          [className.isFocused || ""]: isFocused && isFocusVisible,
          [className.isPressed || ""]: isPressed,
          [className.isDisabled || ""]: isDisabled,
        })}>
        {children}
      </span>
    );
  },
);

UILink.displayName = "UILink";
