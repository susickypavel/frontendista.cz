import React from "react";
import Link from "next/link";

import type { NextPage } from "next";

import styles from "src/assets/index.module.scss";

import { PageLayout } from "src/components/page-layout/page-layout.component";
import { Card } from "src/components/card/card.component";

const IndexPage: NextPage = () => {
  return (
    <PageLayout
      title="home"
      wrapper={{
        element: "main",
        classes: "p-4",
      }}
    >
      <Card title="About me">
        <ul className={"text-white mb-4 relative pl-4 " + styles["card-list"]}>
          <li>Software engineer student</li>
          <li>Calisthenics</li>
          <li>Computer games</li>
        </ul>
        <Link href="/about">
          <a className="inline-block bg-blue-500 hover:bg-blue-600 w-full p-2 rounded text-center font-bold">
            Show me more!
          </a>
        </Link>
      </Card>
    </PageLayout>
  );
};

export default IndexPage;
