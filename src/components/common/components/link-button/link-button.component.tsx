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
}) => {
  return (
    <a
      href={href}
      className={classnames(
        "py-4 px-8 rounded font-bold text-2xl inline-flex items-center transition-colors",
        "bg-gray-800 text-gray-100",
        "hover:bg-gray-900 hover:text-indigo-400",
        "focus:ring-4 ring-indigo-400 outline-none",
        styles.button,
        className
      )}
    >
      {icon &&
        createElement(icon.component, { className: "mr-3", ...icon.props })}
      {children}
    </a>
  );
};
