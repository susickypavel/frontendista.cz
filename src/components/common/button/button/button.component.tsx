import * as React from "react";
import { mergeProps, useFocusRing, useHover, useButton } from "react-aria";

import { useInternalRef } from "@utils/hooks/useInternalRef";
import { useButtonContent } from "@utils/hooks/useButtonContent";
import { useButtonStyle } from "@utils/hooks/useButtonStyle";

import type { IButtonProps } from "./button";

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (props, forwardedRef) => {
    const {
      className,
      children,
      icons,
      icon,
      autoFocus,
      size = "normal",
      isDisabled,
    } = props;

    const content = useButtonContent({
      children,
      icons,
      icon,
    });
    const internalRef = useInternalRef(forwardedRef);
    const { hoverProps, isHovered } = useHover(props);
    const { buttonProps, isPressed } = useButton(props, internalRef);
    const { focusProps, isFocused, isFocusVisible } = useFocusRing(props);

    const classes = useButtonStyle({
      isHovered,
      isPressed,
      isFocused,
      isFocusVisible,
      className,
      size,
      isDisabled,
    });

    return (
      <button
        ref={internalRef}
        autoFocus={autoFocus}
        disabled={isDisabled}
        className={classes}
        {...mergeProps(buttonProps, hoverProps, focusProps)}>
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";
