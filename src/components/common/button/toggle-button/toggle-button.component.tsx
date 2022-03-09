import * as React from "react";
import clsx from "clsx";
import { useToggleState } from "@react-stately/toggle";
import { mergeProps, useToggleButton } from "react-aria";

import styles from "./toggle-button.module.scss";

import { useInternalRef } from "@utils/hooks/useInternalRef";

import type { AriaToggleButtonProps } from "@react-types/button";

export interface IToggleButtonProps extends AriaToggleButtonProps<"button"> {
  className?: string;
}

export const ToggleButton = React.forwardRef<HTMLButtonElement, IToggleButtonProps>(
  (props, forwardedRef) => {
    const { className, children, autoFocus, isDisabled } = props;

    const internalRef = useInternalRef(forwardedRef);

    const state = useToggleState(props);

    const { buttonProps, isPressed } = useToggleButton(props, state, internalRef);

    return (
      <button
        autoFocus={autoFocus}
        disabled={isDisabled}
        className={clsx(
          {
            [styles.isPressed]: isPressed,
            [styles.isSelected]: state.isSelected,
          },
          className,
        )}
        {...mergeProps(buttonProps)}>
        {children}
      </button>
    );
  },
);

ToggleButton.displayName = "ToggleButton";
