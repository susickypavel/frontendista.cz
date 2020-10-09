import React from "react";
import { css } from "@emotion/core";
import { useRouter } from "next/router";

import { NAVIGATION_HEADER_HEIGHT } from "src/styles/constants-css";
import { SocialLinks } from "./social-links.component";
import { NavigationLink } from "./navigation-link.component";

const links = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Blog",
    href: "/blog",
  },
];

const navigation = css`
  position: fixed;
  top: 0;
  right: 0;
  max-width: 64rem;
  width: 100%;
  height: 100vh;
  border-left: 1px solid rgba(0, 0, 0, 0.12);

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  & h2 {
    height: ${NAVIGATION_HEADER_HEIGHT}rem;
    font-size: 2.4rem;
    padding: 2rem 0;
    margin: 0;
    margin-top: 64px;
  }
`;

const navigationLinksList = css`
  padding: 0;

  flex: 1;

  display: flex;
  flex-flow: column wrap;

  align-items: center;
  justify-content: center;
  list-style-type: none;

  & li {
    margin-bottom: 3.2rem;
    width: 100%;
    text-align: right;

    & a {
      display: inline-block;
      text-align: right;

      font-size: 3.2rem;
      letter-spacing: 1rem;
      margin-right: -1rem;
      padding-left: 1rem;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.25);

      &::first-letter {
        color: black;
      }

      &[aria-current="page"] {
        color: black;
      }
    }
  }
`;

export const Navigation: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <nav css={navigation}>
      <h2>pavelsusicky.com</h2>
      <ul css={navigationLinksList}>
        {links.map(link => {
          const isActive = link.href == pathname;

          return <NavigationLink link={link} active={isActive} key={link.text} />;
        })}
      </ul>
      <SocialLinks />
    </nav>
  );
};
