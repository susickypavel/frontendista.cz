import React from "react";
import classnames from "classnames";

import styles from "./button.module.scss";

import type { FunctionComponent } from "react";
import type { ButtonProps } from "./button";

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
}) => {
  return (
    <button
      className={classnames(
        "py-4 px-8 rounded font-bold text-2xl",
        "bg-gradient-to-tl from-gray-700 to-gray-800 text-gray-100",
        styles.button,
        className
      )}
    >
      {children}
    </button>
  );
};
