import * as React from "react";
import { useToggleState } from "react-stately";
import { mergeProps, useFocusRing, useHover, useToggleButton } from "react-aria";

import { useInternalRef } from "@utils/hooks/useInternalRef";
import { useButtonContent } from "@utils/hooks/useButtonContent";
import { useButtonStyle } from "@utils/hooks/useButtonStyle";

import type { IToggleButtonProps } from "./toggle-button";

export const ToggleButton = React.forwardRef<HTMLButtonElement, IToggleButtonProps>(
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
    const state = useToggleState(props);
    const { hoverProps, isHovered } = useHover(props);
    const { buttonProps, isPressed } = useToggleButton(props, state, internalRef);
    const { focusProps, isFocused, isFocusVisible } = useFocusRing(props);

    const classes = useButtonStyle({
      className,
      isFocusVisible,
      isFocused,
      isHovered,
      isPressed,
      isSelected: state.isSelected,
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

ToggleButton.displayName = "ToggleButton";
