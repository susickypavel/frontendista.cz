import { createElement } from "react";
import classNames from "classnames";

import styles from "./header.module.scss";

import type { FunctionComponent } from "react";
import type { HeaderProps } from "./header";

export const Header: FunctionComponent<HeaderProps> = ({
  level,
  className,
  ...props
}) => {
  return createElement(level, {
    ...props,
    className: classNames(styles[level], className),
  });
};
