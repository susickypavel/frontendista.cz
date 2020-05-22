import React, { useState } from "react";
import { css } from "@emotion/core";

import Link from "next/link";
import { useRouter } from "next/router";

import NavigationToggle from "./navigation.toggle";
import Settings from "./settings.component";

import { focusState } from "~/utils/reusable-styles";

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
  const [opened, setOpened] = useState(false);
  const { pathname } = useRouter();

  const handleMouseClick = () => {
    setOpened(prev => !prev);
  };

  return (
    <nav css={navigationHolder} aria-label="Site navigation">
      <h1 css={header}>
        <Link href="/" passHref>
          <a css={focusState}>Pavel Susicky</a>
        </Link>
      </h1>
      <NavigationToggle opened={opened} setOpened={handleMouseClick} />
      <ul css={navigationListHolder(opened)} aria-hidden={!opened}>
        {links.map(({ href, name }) => {
          return (
            <li css={navigationItem} key={name}>
              <Link href={href} passHref>
                <a css={focusState} aria-current={pathname === href ? "page" : undefined}>
                  {name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* <Settings /> */}
    </nav>
  );
};

const header = css({
  fontSize: "36px",
  "@media (max-width: 500px)": {
    fontSize: "24px",
  },
  flexGrow: 1,
  "& a": {
    textDecoration: "none",
    color: "white",
  },
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
  marginLeft: "24px",
  "& a": {
    color: "white",
    textDecoration: "none",
    "&[aria-current=page]": {
      color: "red",
    },
  },
});

const navigationListHolder = (opened: boolean) =>
  css({
    "@media (max-width: 768px)": {
      position: "fixed",
      background: "black",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      display: opened ? "flex" : "none",
      flexFlow: "column wrap",
      justifyContent: "center",
      alignItems: "center",
      "& li": {
        padding: "16px 0",
        marginLeft: 0,
      },
    },
  });

export default Navigation;
