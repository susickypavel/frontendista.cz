import * as React from "react";
import clsx from "clsx";
import { mergeProps, useButton, useFocusRing, useHover } from "react-aria";

import styles from "./button.module.scss";

import { useInternalRef } from "@utils/hooks/useInternalRef";
import { useContent } from "./hooks/useContent";

import type { IButtonProps } from "./button.d";

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      ariaHoverProps = {},
      ariaFocusProps = {},
      ariaButtonProps = {},
      children,
      icon,
      icons = {},
      isDisabled: _isDisabled = false,
      isLoading = false,
      size = "md" as const,
      classNames = {},
      ...props
    },
    forwardedRef,
  ) => {
    let isDisabled = _isDisabled || isLoading;
    let ref = useInternalRef(forwardedRef);

    let { hoverProps, isHovered } = useHover({
      isDisabled,
      ...ariaHoverProps,
    });

    let { focusProps, isFocused, isFocusVisible } = useFocusRing({
      isTextInput: false,
      ...ariaFocusProps,
    });

    let { buttonProps, isPressed } = useButton({ isDisabled, ...ariaButtonProps }, ref);

    let { content, iconAttribute } = useContent({ children, icon, icons, isLoading });

    let classes = clsx(
      styles.base,
      styles[size],
      {
        [classNames.isHovered || styles.isHovered]: isHovered,
        [classNames.isFocused || styles.isFocused]: isFocused && isFocusVisible,
        [classNames.isPressed || styles.isPressed]: isPressed,
        [classNames.isDisabled || styles.isDisabled]: isDisabled || isLoading,
      },
      classNames.override,
    );

    return (
      <button
        data-icon={iconAttribute}
        className={classes}
        ref={ref}
        {...mergeProps(buttonProps, hoverProps, focusProps, props)}>
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";
