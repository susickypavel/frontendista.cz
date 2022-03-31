import * as React from "react";

import styles from "./navigation.module.scss";

import { AnchorLink } from "@components/common/link";

interface INavigationItemProps {
  href: string;
}

const NavigationItem: React.FC<INavigationItemProps> = ({ children, href }) => {
  return (
    <AnchorLink
      href={href}
      classNames={{
        base: styles.navigationItem,
        isPressed: styles.navigationItemIsPressed,
        isFocusedOrHovered: styles.navigationItemIsFocusedOrHovered,
      }}>
      {children}
    </AnchorLink>
  );
};

NavigationItem.displayName = "NavigationItem";

export const Navigation: React.FunctionComponent = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li>
          <NavigationItem href="/">Home</NavigationItem>
        </li>
        <li>
          <NavigationItem href="/about">About</NavigationItem>
        </li>
        <li>
          <NavigationItem href="/blog">Blog</NavigationItem>
        </li>
        <li>
          <NavigationItem href="/contact">Contact</NavigationItem>
        </li>
      </ul>
    </nav>
  );
};

Navigation.displayName = "Navigation";
