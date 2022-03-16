import * as React from "react";

import styles from "./navigation.module.scss";

import { AnchorLink } from "@components/common/anchor-link/anchor-link.component";

export const Navigation: React.FunctionComponent = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li>
          <AnchorLink
            nextLinkProps={{
              href: "/",
            }}>
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            nextLinkProps={{
              href: "/about",
            }}>
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            nextLinkProps={{
              href: "/blog",
            }}>
            Blog
          </AnchorLink>
        </li>
      </ul>
    </nav>
  );
};
