import * as React from "react";
import clsx from "clsx";
import { useToggleState } from "react-stately";
import { mergeProps, useFocusRing, useHover, useToggleButton } from "react-aria";

import { useInternalRef } from "@utils/hooks/useInternalRef";
import { useButtonContent } from "@utils/hooks/useButtonContent";
import { useButtonStyle } from "@utils/hooks/useButtonStyle";

import type { IToggleButtonProps } from "./toggle-button.d";

export const ToggleButton = React.forwardRef<HTMLButtonElement, IToggleButtonProps>(
  (props, forwardedRef) => {
    const {
      className = {},
      children,
      icons,
      icon,
      autoFocus,
      // eslint-disable-next-line no-unused-vars
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
      isDisabled,
    });

    return (
      <button
        ref={internalRef}
        autoFocus={autoFocus}
        disabled={isDisabled}
        className={clsx(classes, {
          [className.isSelected || ""]: state.isSelected,
        })}
        {...mergeProps(buttonProps, hoverProps, focusProps)}>
        {content}
      </button>
    );
  },
);

ToggleButton.displayName = "ToggleButton";
