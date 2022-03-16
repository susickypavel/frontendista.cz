import * as React from "react";

import styles from "./top-bar.module.scss";

export const TopBar: React.FunctionComponent = ({ children }) => {
  return <div className={styles.topbar}>{children}</div>;
};
