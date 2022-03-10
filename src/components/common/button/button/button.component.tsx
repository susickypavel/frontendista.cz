import * as React from "react";
import clsx from "clsx";
import { mergeProps, useFocusRing, useHover, useButton } from "react-aria";

import styles from "../button-common.module.scss";

import { useInternalRef } from "@utils/hooks/useInternalRef";
import { useButtonContent } from "@utils/hooks/useButtonContent";

import type { IButtonProps } from "./button";

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (props, forwardedRef) => {
    const { className, children, icons, icon, autoFocus, isDisabled } = props;

    const content = useButtonContent({
      children,
      icons,
      icon,
    });
    const internalRef = useInternalRef(forwardedRef);
    const { hoverProps, isHovered } = useHover(props);
    const { buttonProps, isPressed } = useButton(props, internalRef);
    const { focusProps, isFocused, isFocusVisible } = useFocusRing(props);

    return (
      <button
        ref={internalRef}
        autoFocus={autoFocus}
        disabled={isDisabled}
        className={clsx(
          {
            [styles.isPressed]: isPressed,
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

Button.displayName = "Button";
