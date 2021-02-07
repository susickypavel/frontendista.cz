import React from "react";
import classNames from "classnames";
import dynamic from "next/dynamic";

import styles from "./navigation.module.scss";
import { NavigationLink } from "src/components/navigation/navigation-link/navigation-link.component";

import type { NavigationLinkItem } from "src/components/navigation/navigation-link/navigation-link";
import type { NavigationProps } from "./navigation";

const ThemeToggle = dynamic<unknown>(
  () => import("src/components/theme/theme-toggle/theme-toggle.component").then(module => module.ThemeToggle),
  { ssr: false },
);

const links: NavigationLinkItem[] = [
  {
    text: "Home",
    href: "/",
    icon: (
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    ),
  },
  {
    text: "About",
    href: "/about",
    icon: <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fillRule="evenodd" clipRule="evenodd" />,
  },
  {
    text: "Contact",
    href: "/contact",
    icon: (
      <path
        d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    ),
  },
  {
    text: "Blog",
    href: "/blog",
    icon: (
      <path
        d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    ),
  },
];

export const Navigation: React.FC<NavigationProps> = ({ fixed = false }) => {
  return (
    <nav className={classNames("monospace", styles.navigation)}>
      <ul>
        {links.map(link => {
          const { text, ...linkProps } = link;

          return (
            <NavigationLink key={text} {...linkProps}>
              {text}
            </NavigationLink>
          );
        })}
      </ul>
    </nav>
  );
};
