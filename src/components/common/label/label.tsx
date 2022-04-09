import * as React from "react";
import clsx from "clsx";
import { useFocus } from "react-aria";
import { HiExclamationCircle } from "react-icons/hi";

import styles from "./label.module.scss";

import type { ILabelProps } from "./label.d";

export const Label = React.forwardRef<HTMLLabelElement, ILabelProps>(
  (
    {
      errors,
      label,
      children,
      required = false,
      classNames = {},
      headerWidget,
      ...props
    },
    forwardedRef,
  ) => {
    const [isFocused, setFocused] = React.useState(false);
    const { focusProps } = useFocus({
      onFocusChange: setFocused,
    });

    return (
      <label
        ref={forwardedRef}
        className={clsx(
          styles.label,
          {
            [styles.formError]: errors,
            [styles.focused]: isFocused,
          },
          classNames.override,
        )}
        {...props}>
        <span className={styles.topBar}>
          <span
            className={clsx(styles.labelText, {
              [styles.labelTextRequiredMark]: required,
            })}>
            {label}
          </span>
          {errors && (
            <p className={styles.errorMessage}>
              <HiExclamationCircle />
              {errors.message}
            </p>
          )}
          {headerWidget}
        </span>
        {children({ focusProps })}
      </label>
    );
  },
);

Label.displayName = "Label";
