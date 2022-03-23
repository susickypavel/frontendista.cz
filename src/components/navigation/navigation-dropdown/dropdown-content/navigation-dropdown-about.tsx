import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./navigation-dropdown-about.module.scss";

import { AnchorLink } from "@components/common/anchor-link/anchor-link.component";

import memojiListening from "./memoji-listening.png";

const ABOUT_LINKS = [
  {
    header: "Free Time",
    items: [
      {
        label: "Books",
        href: "TODO",
      },
      {
        label: "Cats",
        href: "TODO",
      },
      {
        label: "Games",
        href: "TODO",
      },
      {
        label: "Gym",
        href: "TODO",
      },
      {
        label: "Spotify",
        href: "TODO",
      },
    ],
  },
  {
    header: "Development",
    items: [
      {
        label: "Hardware",
        href: "TODO",
      },
      {
        label: "Software",
        href: "TODO",
      },
      {
        label: "Tech stack",
        href: "TODO",
      },
      {
        label: "Workspace",
        href: "TODO",
      },
    ],
  },
  {
    header: "Introduction",
    items: [
      {
        label: "Personality",
        href: "TODO",
      },
    ],
  },
];

export const NavigationDropdownAbout: React.FunctionComponent = () => {
  return (
    <motion.div className={styles.wrapper} layoutId="lmao">
      <div className={styles.container}>
        {ABOUT_LINKS.map(({ header, items }) => (
          <div className={styles.column} key={header}>
            <h2>{header}</h2>
            <ul className={styles.linksList}>
              {items.map(({ label, href }) => (
                <li key={label}>
                  <AnchorLink
                    className={styles.link}
                    nextLinkProps={{
                      href,
                    }}>
                    {label}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <Image
          src={memojiListening}
          placeholder="blur"
          alt="Memoji of Pavel with AirPods"
        />
        <p>No Music</p>
      </div>
    </motion.div>
  );
};
