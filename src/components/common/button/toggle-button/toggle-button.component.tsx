import * as React from "react";
import clsx from "clsx";
import { useToggleState } from "@react-stately/toggle";
import { mergeProps, useFocusRing, useHover, useToggleButton } from "react-aria";

import { useInternalRef } from "@utils/hooks/useInternalRef";
import { useButtonContent } from "@utils/hooks/useButtonContent";

import type { IToggleButtonProps } from "./toggle-button";

export const ToggleButton = React.forwardRef<HTMLButtonElement, IToggleButtonProps>(
  (props, forwardedRef) => {
    const { className, children, icons, icon, autoFocus, isDisabled } = props;

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

    return (
      <button
        ref={internalRef}
        autoFocus={autoFocus}
        disabled={isDisabled}
        className={clsx(
          {
            "styles.isPressed": isPressed,
            "styles.isSelected": state.isSelected,
            "styles.isFocused": isFocused && isFocusVisible,
            "styles.isHovered": isHovered,
          },
          className,
        )}
        {...mergeProps(buttonProps, hoverProps, focusProps)}>
        {content}
      </button>
    );
  },
);

ToggleButton.displayName = "ToggleButton";
