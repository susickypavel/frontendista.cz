import React from "react";
import { NextPage } from "next";
import Link from "next/link";

import { css } from "@emotion/core";
import { ArrowRight } from "src/icons/arrow-right";

const pageWrapper = css`
  padding: 6.4rem;
  display: "flex";
  flex-flow: column wrap;
`;

const mainHeader = css({
  fontSize: "12.8rem",
  textShadow: "4px 4px 0px #DDDDDD",
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  display: "inline",
});

const subHeader = css`
  font-size: 3.6rem;
  font-weight: bold;
`;

const quickLinkList = css`
  list-style-type: none;
  padding: 0;

  & li {
    display: flex;
    margin-bottom: 1rem;

    & svg {
      width: 3rem;
      color: rgba(0, 0, 0, 0.25);
    }

    & a {
      margin-left: 3.2rem;
      font-size: 2.4rem;
      font-weight: bold;
      color: black;
    }
  }
`;

const quickLinks = [
  {
    text: "What am I building?",
    href: "todo",
  },
  {
    text: "What is my environment setup?",
    href: "todo2",
  },
  {
    text: "Which technologies do I use?",
    href: "todo3",
  },
  {
    text: "Feel free to contact me here",
    href: "todo4",
  },
];

const IndexPage: NextPage = () => {
  return (
    <div css={pageWrapper}>
      <h1 css={mainHeader}>Pavel Susicky</h1>
      <p css={subHeader}>Software engineer based in Prague, Czech republic</p>
      <ul css={quickLinkList}>
        {quickLinks.map(link => {
          const { href, text } = link;

          return (
            <li key={href}>
              <ArrowRight />
              <Link href={href}>
                <a>{text}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IndexPage;
