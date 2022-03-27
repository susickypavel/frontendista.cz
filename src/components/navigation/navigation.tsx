import * as React from "react";
import Link from "next/link";

import styles from "./navigation.module.scss";

import { NavigationDropdown } from "./navigation-dropdown";

export const Navigation: React.FunctionComponent = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <NavigationDropdown />
    </nav>
  );
};
