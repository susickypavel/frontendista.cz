import * as React from "react";
import clsx from "clsx";
import { useHover, useFocusRing, mergeProps } from "react-aria";

import type { HoverProps } from ".pnpm/@react-aria+interactions@3.8.2_react@17.0.2/node_modules/@react-aria/interactions";
import type { FocusRingProps } from ".pnpm/@react-aria+focus@3.5.3_react@17.0.2/node_modules/@react-aria/focus";

export interface IButtonProps extends HoverProps, Omit<FocusRingProps, "isTextInput"> {
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
  children?: React.ReactNode;
  isPressed: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, isDisabled, classNames = {}, isPressed, ...props }, forwardedRef) => {
    const { hoverProps, isHovered } = useHover(props);
    const { focusProps, isFocused, isFocusVisible } = useFocusRing({
      isTextInput: false,
      ...props,
    });

    return (
      <button
        {...mergeProps(props, hoverProps, focusProps)}
        ref={forwardedRef}
        className={clsx(classNames.base, {
          [classNames.isPressed || ""]: isPressed,
          [classNames.isHovered || ""]: isHovered,
          [classNames.isFocused || ""]: isFocused && isFocusVisible,
          [classNames.isFocusedOrHovered || ""]:
            (isFocused && isFocusVisible) || isHovered,
          [classNames.isDisabled || ""]: isDisabled,
        })}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
