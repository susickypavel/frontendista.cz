import * as React from "react";
import clsx from "clsx";

import styles from "./button.module.scss";
import { useContent } from "./hooks/useContent";

import type { ButtonProps } from "./button.d";

/**
 * Button Component
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "base",
      isDisabled = false,
      icons,
      icon,
      ...props
    },
    ref
  ) => {
    const content = useContent({ children, icon, icons });

    return (
      <button
        {...props}
        ref={ref}
        className={clsx(styles.button, styles[variant], styles[size], {
          [styles.iconOnly]: true,
          [styles.isDisabled]: isDisabled,
        })}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "DS.Button";
