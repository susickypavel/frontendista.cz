import React, { createElement } from "react";
import classnames from "classnames";

import styles from "./link-button.module.scss";

import type { FunctionComponent } from "react";
import type { ButtonProps } from "./link-button";

export const LinkButton: FunctionComponent<ButtonProps> = ({
  href,
  children,
  className,
  icon,
  variant = "cta",
}) => {
  return (
    <a
      href={href}
      className={classnames(styles.button, className, {
        [styles.cta]: variant == "cta",
        [styles.primary]: variant == "primary",
      })}
    >
      {icon &&
        createElement(icon.component, {
          ...icon.props,
          className: "mr-3 h-6",
        })}
      {children}
    </a>
  );
};
