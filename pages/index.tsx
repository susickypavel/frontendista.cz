import React from "react";

import Link from "next/link";

import type { NextPage } from "next";

import { PageLayout } from "src/components/page-layout/page-layout.component";

import "normalize.css";

interface IndexProps {}

const Index: NextPage<IndexProps> = () => {
  return (
    <PageLayout>
      <header>
        <h1>Pavel Susicky</h1>
        <h2>Software engineer from Prague, Czech republic</h2>
      </header>
      <main>
        <ul>
          <li>
            <Link href="todo">What am I building?</Link>
          </li>
          <li>
            <Link href="todo">What is my environment setup?</Link>
          </li>
          <li>
            <Link href="todo">Which technologies do I use?</Link>
          </li>
          <li>
            <Link href="todo">Feel free to contact me here</Link>
          </li>
        </ul>
      </main>
    </PageLayout>
  );
};

export default Index;
