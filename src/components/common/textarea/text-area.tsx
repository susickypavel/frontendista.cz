import * as React from "react";
import { mergeProps } from "react-aria";

import styles from "./text-area.module.scss";
import { Label } from "../label/label";

import type { ILabelProps } from "../label/label";

interface ITextAreaProps extends Omit<ILabelProps, "required" | "children"> {
  /**
   * Placeholder value for the textarea
   */
  placeholder?: string;
  /**
   * @default {}
   */
  domProps?: React.InputHTMLAttributes<HTMLTextAreaElement>;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  ({ errors, label, placeholder, domProps = {}, ...props }, forwardedRef) => {
    return (
      <Label label={label} errors={errors} required={domProps.required}>
        {({ focusProps }) => (
          <textarea
            className={styles.textarea}
            ref={forwardedRef}
            placeholder={placeholder}
            {...mergeProps(domProps, focusProps, props)}
          />
        )}
      </Label>
    );
  },
);

TextArea.displayName = "TextArea";
