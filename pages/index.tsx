import React from "react";

import Link from "next/link";

import type { NextPage } from "next";

import { PageLayout } from "src/components/page-layout/page-layout.component";
import {
  heading,
  quick_links_list,
  sub_heading,
} from "src/assets/stylesheets/index.styles";

interface IndexProps {}

const quickLinks = [
  {
    text: "What am I building?",
    href: "",
  },
  {
    text: "What is my environment setup?",
    href: "",
  },
  {
    text: "Which technologies do I use?",
    href: "",
  },
  {
    text: "Feel free to contact me here",
    href: "",
  },
];

const Index: NextPage<IndexProps> = () => {
  return (
    <PageLayout>
      <header>
        <h1 css={heading}>PAVEL SUSICKY</h1>
        <h2 css={sub_heading}>Software engineer from Prague, Czech republic</h2>
      </header>
      <main>
        <ul css={quick_links_list}>
          {quickLinks.map(({ href, text }) => {
            return (
              <li key={text}>
                <Link href={href}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </PageLayout>
  );
};

export default Index;
