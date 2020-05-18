import React, { createRef } from "react";
import { css } from "@emotion/core";
import Link from "next/link";

import NavigationToggle from "./navigation.toggle";
import Settings from "./settings.component";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navigation: React.FC = () => {
  return (
    <nav css={navigationHolder}>
      <h1 css={header}>Pavel Susicky</h1>
      <ul>
        {links.map(({ href, name }) => {
          return (
            <li css={navigationItem} key={name}>
              <Link href={href} passHref={true}>
                <a>{name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <Settings />
    </nav>
  );
};

const header = css({
  fontSize: "36px",
  flexGrow: 1,
});

const navigationHolder = css({
  position: "fixed",
  background: "#161616",
  width: "100%",
  height: "75px",
  display: "flex",
  alignItems: "center",
  padding: "0 32px",
});

const navigationItem = css({
  fontSize: "20px",
  fontWeight: "bold",
  display: "inline-block",
  marginRight: "24px",
  "& a": {
    color: "white",
    textDecoration: "none",
  },
});

export default Navigation;
