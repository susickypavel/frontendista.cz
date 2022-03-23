import * as React from "react";

import styles from "./navigation-dropdown.module.scss";

export interface NavigationDropdownProps {}

export const NavigationDropdown: React.FunctionComponent<NavigationDropdownProps> = ({
  children,
}) => {
  return <div className={styles.dropdown}>{children}</div>;
};
