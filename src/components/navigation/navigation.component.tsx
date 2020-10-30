import React, { useState } from "react";
import { css } from "@emotion/core";
import { useRouter } from "next/router";

import { NAVIGATION_HEADER_HEIGHT } from "src/styles/constants-css";
import { SocialLinks } from "./social-links.component";
import { NavigationLink } from "./navigation-link.component";
import { NavigationToggle } from "src/components/navigation/navigation-toggle.component";

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

const navigation = (isOpen: boolean) => css`
  position: fixed;
  top: 0;
  right: 0;
  max-width: 33%;
  width: 100%;
  height: 100vh;

  & h2 {
    height: ${NAVIGATION_HEADER_HEIGHT}rem;
    font-size: 2.4rem;
    padding: 2rem 0;
    margin: 64px 0 0;
  }

  @media (max-width: 64em) {
    max-width: 100%;
    pointer-events: ${isOpen ? "auto" : "none"} !important;
  }
`;

const navigationContent = (isOpen: boolean) => css`
  display: flex;

  flex-flow: column wrap;
  justify-items: center;
  align-items: center;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.12);

  @media (max-width: 64em) {
    display: ${isOpen ? "flex" : "none"};
    background: white;
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

    @media (max-width: 64em) {
      text-align: center;
    }

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
      outline-color: transparent;

      &:hover {
        color: rgba(0, 0, 0, 0.5);
      }

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
  const [isNavigationOpen, setOpen] = useState(false);
  const { pathname } = useRouter();

  return (
    <nav css={navigation(isNavigationOpen)}>
      <NavigationToggle
        isNavigationOpen={isNavigationOpen}
        onClick={() => {
          setOpen(prev => !prev);
        }}
      />
      <div css={navigationContent(isNavigationOpen)}>
        <h2>pavelsusicky.com</h2>
        <ul css={navigationLinksList}>
          {links.map(link => {
            const isActive = link.href == pathname;

            return <NavigationLink link={link} active={isActive} key={link.text} />;
          })}
        </ul>
        <SocialLinks />
      </div>
    </nav>
  );
};
