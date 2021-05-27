import React from "react";

import styles from "./visit-indicator.module.scss";

import type { FunctionComponent } from "react";
import type { VisitIndicatorProps } from "./visit-indicator";

export const VisitIndicator: FunctionComponent<VisitIndicatorProps> = () => {
  return <a className={styles["visit-indicator"]} />;
};
