import { AnchorLink } from "@components/common/link";

import styles from "./navigation-item.module.scss";

import type { INavigationItemProps } from "./navigation-item.d";

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
