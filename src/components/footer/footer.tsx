import * as React from "react";

import styles from "./footer.module.scss";

export const Footer: React.FunctionComponent = () => {
  return (
    <footer>
      <span className={styles.copyrightNotice}>
        &copy; 2022, Pavel Sušický. All rights reserved.
      </span>
    </footer>
  );
};
