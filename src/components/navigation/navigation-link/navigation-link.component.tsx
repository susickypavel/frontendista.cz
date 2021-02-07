import React from "react";
import Link from "next/link";

import styles from "./navigation-link.module.scss";
import { NavigationLinkProps } from "./navigation-link";

export const NavigationLink: React.FC<NavigationLinkProps> = ({ href, icon, children }) => {
  return (
    <li className={styles.navigationLink}>
      <Link href={href}>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
            {icon}
          </svg>
          <span>{children}</span>
        </a>
      </Link>
    </li>
  );
};
