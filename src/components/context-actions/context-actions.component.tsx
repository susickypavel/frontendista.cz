import * as React from "react";

import styles from "./context-actions.module.scss";

export const ContextActions: React.FunctionComponent = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
