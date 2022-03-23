import * as React from "react";
import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

import styles from "./navigation.module.scss";

import { AnchorLink } from "@components/common/anchor-link/anchor-link.component";

import { NavigationDropdown } from "./navigation-dropdown/navigation-dropdown.component";
import { NavigationDropdownAbout } from "./navigation-dropdown/dropdown-content/navigation-dropdown-about";

const LINKS: Array<{
  href: string;
  label: string;
  dropdown?: JSX.Element;
}> = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
    dropdown: <NavigationDropdownAbout />,
  },
  {
    href: "/blog",
    label: "Blog",
    dropdown: <motion.div layoutId="lmao">Blog</motion.div>,
  },
  {
    href: "/contact",
    label: "Contact",
    dropdown: <motion.div layoutId="lmao">Contact</motion.div>,
  },
];

export const Navigation: React.FunctionComponent = () => {
  const [dropdownContent, setContent] = React.useState<JSX.Element | null>(null);

  return (
    <nav className={styles.navigation} onMouseLeave={() => setContent(null)}>
      <ul className={styles.navigationList}>
        {LINKS.map(({ label, href, dropdown = null }) => (
          <li key={label}>
            <AnchorLink
              icons={{
                right: dropdown ? HiChevronDown : undefined,
              }}
              nextLinkProps={{
                href,
              }}
              onHoverStart={() => {
                setContent(dropdown);
              }}>
              {label}
            </AnchorLink>
          </li>
        ))}
      </ul>
      {dropdownContent && <NavigationDropdown>{dropdownContent}</NavigationDropdown>}
    </nav>
  );
};
