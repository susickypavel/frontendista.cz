import React from "react";
import { css } from "@emotion/core";
import Link from "next/link";
import { NAVIGATION_HEADER_HEIGHT } from "src/styles/constants-css";

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

  & ul {
    padding: 0;
    margin: 0;
    margin-top: -128px;
    list-style-type: none;

    flex-grow: 1;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;

    & li {
      margin-bottom: 3.2rem;

      & a {
        font-size: 2.4rem;
        font-weight: bold;
        text-decoration: none;
        color: black;
      }
    }
  }
`;

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

export const Navigation: React.FC = () => {
  return (
    <nav css={navigation}>
      <h2>pavelsusicky.com</h2>
      <ul>
        {links.map(link => {
          const { text, href } = link;

          return (
            <li key={href}>
              <Link href={href}>
                <a>{text}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
