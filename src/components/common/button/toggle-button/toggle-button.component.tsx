import * as React from "react";
import clsx from "clsx";
import { useToggleState } from "@react-stately/toggle";
import { mergeProps, useFocusRing, useHover, useToggleButton } from "react-aria";

import styles from "./toggle-button.module.scss";

import { useInternalRef } from "@utils/hooks/useInternalRef";
import { useButtonContent } from "@utils/hooks/useButtonContent";

import type { AriaToggleButtonProps } from "@react-types/button";
import type { HoverProps } from "@react-aria/interactions";
import type { FocusRingProps } from "@react-aria/focus";
import type { IconType } from "react-icons";

export interface IToggleButtonProps
  extends AriaToggleButtonProps<"button">,
    HoverProps,
    Omit<FocusRingProps, "isTextInput"> {
  /**
   * Class to be applied to a button element.
   */
  className?: string;
  /**
   * Icon to be rendered instead of a children.
   */
  icon?: IconType;
  /**
   * Icons to be rendered alongside the children.
   * Either from left or right side.
   */
  icons?: {
    left?: IconType;
    right?: IconType;
  };
}

export const ToggleButton = React.forwardRef<HTMLButtonElement, IToggleButtonProps>(
  (props, forwardedRef) => {
    const { className, children, icons, icon, autoFocus, isDisabled } = props;

    const internalRef = useInternalRef(forwardedRef);

    const state = useToggleState(props);

    const { hoverProps, isHovered } = useHover(props);
    const { buttonProps, isPressed } = useToggleButton(props, state, internalRef);
    const { focusProps, isFocused, isFocusVisible } = useFocusRing(props);

    const content = useButtonContent({
      children,
      icons,
      icon,
    });

    return (
      <button
        ref={internalRef}
        autoFocus={autoFocus}
        disabled={isDisabled}
        className={clsx(
          {
            [styles.isPressed]: isPressed,
            [styles.isSelected]: state.isSelected,
            [styles.isFocused]: isFocused && isFocusVisible,
            [styles.isHovered]: isHovered,
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
