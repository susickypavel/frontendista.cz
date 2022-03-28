import * as React from "react";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";

import styles from "./navigation.module.scss";

import { NavigationDropdown } from "./navigation-dropdown";

import memojiSmile from "@assets/images/memoji_smile.png";

const NavigationButton: React.FC = ({ children }) => {
  return (
    <button>
      {children}
      <HiChevronDown />
    </button>
  );
};

export const Navigation: React.FunctionComponent = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <NavigationButton>About</NavigationButton>
        </li>
        <li>
          <NavigationButton>Blog</NavigationButton>
        </li>
        <li>
          <NavigationButton>Contact</NavigationButton>
        </li>
      </ul>
      <NavigationDropdown
        memoji={{
          src: memojiSmile,
          alt: "Memoji of Pavel with Apple Airpods",
        }}
      />
    </nav>
  );
};
