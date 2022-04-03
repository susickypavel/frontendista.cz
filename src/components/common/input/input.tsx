import * as React from "react";
import clsx from "clsx";

import styles from "./input.module.scss";

import type { FieldError } from "react-hook-form";

interface IInput {
  /**
   * The label for the input.
   */
  label: string;
  /**
   * Form errors associated with the input
   */
  errors?: FieldError;
}

export const Input = React.forwardRef<HTMLInputElement, IInput>(
  ({ errors, label, ...props }, forwardedRef) => {
    props.children = undefined;

    return (
      <label
        className={clsx(styles.label, {
          [styles.formError]: errors,
        })}>
        {label}
        <input
          ref={forwardedRef}
          placeholder="Optional, fill if you want me to contact you 😉"
          {...props}
        />
      </label>
    );
  },
);

Input.displayName = "Input";
