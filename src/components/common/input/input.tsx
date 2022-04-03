import * as React from "react";
import clsx from "clsx";
import { mergeProps, useFocus } from "react-aria";
import { HiExclamationCircle } from "react-icons/hi";

import styles from "./input.module.scss";

import type { FieldError } from "react-hook-form";

interface IInput {
  /**
   * The label for the input.
   */
  label: string;
  /**
   * Placeholder value for the input
   */
  placeholder?: string;
  /**
   * Form errors associated with the input
   */
  errors?: FieldError;
  /**
   * @default {}
   */
  domProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const Input = React.forwardRef<HTMLInputElement, IInput>(
  (
    {
      errors,
      label,
      placeholder,
      domProps = {
        type: "text",
      },
      ...props
    },
    forwardedRef,
  ) => {
    const [isFocused, setFocused] = React.useState(false);
    const { focusProps } = useFocus({
      onFocusChange: setFocused,
    });

    props.children = undefined;

    return (
      <label
        className={clsx(styles.label, {
          [styles.formError]: errors,
          [styles.focused]: isFocused,
        })}>
        <span className={styles.topBar}>
          <span
            className={clsx(styles.labelText, {
              [styles.labelTextRequiredMark]: domProps.required,
            })}>
            {label}
          </span>
          {errors && (
            <p className={styles.errorMessage}>
              <HiExclamationCircle />
              {errors.message}
            </p>
          )}
        </span>
        <input
          ref={forwardedRef}
          placeholder={placeholder}
          {...mergeProps(domProps, props, focusProps)}
        />
      </label>
    );
  },
);

Input.displayName = "Input";
