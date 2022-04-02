import * as React from "react";
import clsx from "clsx";
import { useHover, useFocusRing, mergeProps } from "react-aria";

import { useContent } from "./useContent";
import styles from "./button.module.scss";

import type { IconType } from "react-icons";

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
  hoverProps?: Omit<HoverProps, "isDisabled">;
  isDisabled?: boolean;
  icon?: IconType;
  /**
   * @default {}
   */
  icons?: {
    left?: IconType;
    right?: IconType;
  };
}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      isDisabled,
      classNames = {},
      isPressed,
      hoverProps: _hoverProps,
      icon,
      icons = {},
      ...props
    },
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

    const className = clsx(styles.base, classNames.base, {
      [classNames.isPressed || ""]: isPressed,
      [classNames.isHovered || ""]: isHovered,
      [classNames.isFocused || ""]: isFocused && isFocusVisible,
      [classNames.isFocusedOrHovered || ""]: (isFocused && isFocusVisible) || isHovered,
      [classNames.isDisabled || ""]: isDisabled,
    });

    const { content, iconAttribute } = useContent({ children, icon, icons });

    return (
      <button
        data-icon={iconAttribute}
        ref={forwardedRef}
        className={className}
        {...mergeProps(props, hoverProps, focusProps)}>
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";
