import React from "react";

import type { NextPage } from "next";

import { PageLayout } from "src/components/page-layout/page-layout.component";

import styles from "src/assets/index.module.scss";

const IndexPage: NextPage = () => {
  return (
    <PageLayout
      title="home"
      wrapper={{
        element: "main",
        classes: "p-4 flex flex-col space-y-4",
      }}
    >
      <h1>TODO</h1>
    </PageLayout>
  );
};

export default IndexPage;
