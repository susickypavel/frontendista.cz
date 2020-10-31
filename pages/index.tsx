import React from "react";
import { NextPage } from "next";
import Link from "next/link";

import { ArrowRight } from "src/icons/arrow-right";

import {
  pageWrapper,
  mainHeader,
  subHeader,
  quickLinkList,
} from "src/assets/stylesheets/index-page.module.scss";

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
    <main className={pageWrapper}>
      <h1 className={mainHeader}>Pavel Susicky</h1>
      <p className={subHeader}>Software engineer based in Prague, Czech republic</p>
      <ul className={quickLinkList}>
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
    </main>
  );
};

export default IndexPage;
