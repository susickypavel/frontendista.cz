import * as React from "react";
import { Popover } from "@headlessui/react";

import styles from "./navigation.module.scss";

import { navigationData } from "./data";
import { NavigationItem } from "./navigation-item";
import { NavigationPopover } from "./navigation-popover";

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li>
          <NavigationItem href="/">Home</NavigationItem>
        </li>
        <li>
          <Popover.Group as="ul" className={styles.navigationButtonsGroup}>
            {navigationData.map(data => {
              return <NavigationPopover key={data.title} {...data} />;
            })}
          </Popover.Group>
        </li>
      </ul>
    </nav>
  );
};

Navigation.displayName = "Navigation";
