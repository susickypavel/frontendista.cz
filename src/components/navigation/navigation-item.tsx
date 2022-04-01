import * as React from "react";
import { AnchorLink } from "@components/common/link";

import styles from "./navigation.module.scss";

interface INavigationItemProps {
  href: string;
}

export const NavigationItem: React.FC<INavigationItemProps> = ({ children, href }) => {
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
