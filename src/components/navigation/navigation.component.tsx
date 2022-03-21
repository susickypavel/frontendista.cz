import * as React from "react";

import styles from "./navigation.module.scss";

import { AnchorLink } from "@components/common/anchor-link/anchor-link.component";

import { HiChevronDown } from "react-icons/hi";

export const Navigation: React.FunctionComponent = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li>
          <AnchorLink
            icons={{
              right: HiChevronDown,
            }}
            nextLinkProps={{
              href: "/",
            }}>
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            icons={{
              right: HiChevronDown,
            }}
            nextLinkProps={{
              href: "/about",
            }}>
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            icons={{
              right: HiChevronDown,
            }}
            nextLinkProps={{
              href: "/blog",
            }}>
            Blog
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            icons={{
              right: HiChevronDown,
            }}
            nextLinkProps={{
              href: "/contact",
            }}>
            Contact
          </AnchorLink>
        </li>
      </ul>
    </nav>
  );
};
