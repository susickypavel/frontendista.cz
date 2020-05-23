import React, { useState } from "react";
import { css, Global } from "@emotion/core";

import Link from "next/link";
import { useRouter } from "next/router";

import NavigationToggle from "./navigation.toggle";
import Settings from "./settings.component";

import { useScrollHide } from "~/hooks/useScrollHide";

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

  const { hidden, setHidden } = useScrollHide();

  const toggleNavigation = () => {
    setHidden(false);
    setOpened(prev => !prev);
  };

  const closeNavigation = () => {
    setOpened(false);
  };

  return (
    <nav css={navigationHolder(hidden)} aria-label="Site navigation">
      <h1 css={header}>
        <Link href="/" passHref>
          <a>Pavel Susicky</a>
        </Link>
      </h1>
      <NavigationToggle opened={opened} setOpened={toggleNavigation} />
      {opened && (
        <Global
          styles={css`
            body {
              overflow-y: hidden;
            }
          `}
        />
      )}
      <ul css={navigationListHolder(opened)} aria-hidden={!opened}>
        {links.map(({ href, name }) => {
          return (
            <li css={navigationItem} key={name}>
              <Link href={href} passHref>
                <a
                  aria-current={pathname === href ? "page" : undefined}
                  onClick={closeNavigation}
                >
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

const navigationHolder = (hidden: boolean) =>
  css({
    position: "fixed",
    background: "#161616",
    width: "100%",
    height: "75px",
    display: "flex",
    alignItems: "center",
    padding: "0 32px",
    transform: `translateY(${hidden ? "-100%" : "0"})`,
    transition: "transform 0.5s ease-in-out",
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
      color: "lightblue",
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
      height: "100vh",
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
