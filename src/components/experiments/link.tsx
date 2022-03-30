import * as React from "react";
import clsx from "clsx";
import NextLink from "next/link";
import { mergeProps, useLink } from "react-aria";
import { useSound } from "use-sound";

import type { AriaLinkOptions } from ".pnpm/@react-aria+link@3.2.3_react@17.0.2/node_modules/@react-aria/link";

export interface AnchorLinkProps extends Omit<AriaLinkOptions, "elementType"> {
  href: string;
  children?: React.ReactNode;
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

export interface UILinkProps extends Partial<AnchorLinkProps> {
  onClick?: any;
  onMouseEnter?: any;
}

const UILink = React.forwardRef<HTMLSpanElement, UILinkProps>(
  ({ onClick, onPress, ...props }, forwardedRef) => {
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
        ...props,
      },
      ref,
    );

    props.href = undefined;

    return (
      <span
        ref={ref}
        {...mergeProps(props, linkProps)}
        className={clsx({
          "text-red-500": isPressed,
        })}
      />
    );
  },
);

UILink.displayName = "UILink";
