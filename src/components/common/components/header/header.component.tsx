import { createElement } from "react";

import styles from "./header.module.scss";

import type { FunctionComponent } from "react";
import type { HeaderProps } from "./header";

export const Header: FunctionComponent<HeaderProps> = ({ level, ...props }) => {
  return createElement(level, { ...props, className: styles[level] });
};
