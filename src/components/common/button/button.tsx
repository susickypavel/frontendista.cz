import * as React from "react";
import clsx from "clsx";
import { useHover, useFocusRing, mergeProps } from "react-aria";

// TODO: Add proper typing
type FocusRingProps = any;
type HoverProps = any;

export interface IButtonProps extends Omit<FocusRingProps, "isTextInput"> {
  isPressed: boolean;
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
  _hoverProps: Omit<HoverProps, "isDisabled">;
  isDisabled?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    { children, isDisabled, classNames = {}, isPressed, _hoverProps, ...props },
    forwardedRef,
  ) => {
    const { hoverProps, isHovered } = useHover({
      isDisabled,
      ..._hoverProps,
    });
    const { focusProps, isFocused, isFocusVisible } = useFocusRing({
      isTextInput: false,
      ...props,
    });

    const className = clsx(classNames.base, {
      [classNames.isPressed || ""]: isPressed,
      [classNames.isHovered || ""]: isHovered,
      [classNames.isFocused || ""]: isFocused && isFocusVisible,
      [classNames.isFocusedOrHovered || ""]: (isFocused && isFocusVisible) || isHovered,
      [classNames.isDisabled || ""]: isDisabled,
    });

    return (
      <button
        ref={forwardedRef}
        className={className}
        {...mergeProps(props, hoverProps, focusProps)}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
