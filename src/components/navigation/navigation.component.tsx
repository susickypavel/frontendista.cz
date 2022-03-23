import * as React from "react";
import { HiChevronDown } from "react-icons/hi";

import styles from "./navigation.module.scss";

import { AnchorLink } from "@components/common/anchor-link/anchor-link.component";

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
    dropdown: <div />,
  },
  {
    href: "/blog",
    label: "Blog",
    dropdown: <div />,
  },
  {
    href: "/contact",
    label: "Contact",
    dropdown: <div />,
  },
];

export const Navigation: React.FunctionComponent = () => {
  const [, setContent] = React.useState<JSX.Element | null>(null);

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
    </nav>
  );
};
