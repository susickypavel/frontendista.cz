import * as React from "react";

import styles from "./navigation.module.scss";

import { AnchorLink } from "@components/experiments/link";

export const Navigation: React.FunctionComponent = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li>
          <AnchorLink href="/">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="/about">About</AnchorLink>
        </li>
        <li>
          <AnchorLink href="/blog">Blog</AnchorLink>
        </li>
        <li>
          <AnchorLink href="/contact">Contact</AnchorLink>
        </li>
      </ul>
    </nav>
  );
};
