import * as React from "react";
import { mergeProps } from "react-aria";

import styles from "./text-area.module.scss";
import { Label } from "../label/label";

import type { ITextAreaProps } from "./text-area.d";

export const TextArea = React.forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  ({ errors, label, placeholder, domProps = {}, ...props }, forwardedRef) => {
    const [count, setCount] = React.useState(0);

    return (
      <Label
        label={label}
        errors={errors}
        required={domProps.required}
        headerWidget={
          domProps.maxLength && (
            <span className={styles.charactersLeft}>
              {domProps.maxLength - count} characters left
            </span>
          )
        }
        classNames={{
          override: styles.label,
        }}>
        {({ focusProps }) => (
          <React.Fragment>
            <textarea
              onInput={c => setCount(c.currentTarget.value.length)}
              maxLength={domProps.maxLength}
              className={styles.textarea}
              ref={forwardedRef}
              placeholder={placeholder}
              {...mergeProps(domProps, focusProps, props)}
            />
          </React.Fragment>
        )}
      </Label>
    );
  },
);

TextArea.displayName = "TextArea";
