import * as React from "react";
import { mergeProps } from "react-aria";

import { Label } from "../label/label";

import type { ILabelProps } from "../label/label";

interface IInputProps extends Omit<ILabelProps, "required" | "children"> {
  /**
   * Placeholder value for the input
   */
  placeholder?: string;
  /**
   * @default {}
   */
  domProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
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
    return (
      <Label label={label} errors={errors} required={domProps.required}>
        {({ focusProps }) => (
          <input
            ref={forwardedRef}
            placeholder={placeholder}
            {...mergeProps(domProps, props, focusProps)}
          />
        )}
      </Label>
    );
  },
);

Input.displayName = "Input";
