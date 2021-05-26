import React from "react";

import type { NextPage } from "next";

import { PageLayout } from "src/components/page-layout/page-layout.component";

import styles from "src/assets/index.module.scss";
import { Button } from "src/components/common/components/button/button.component";

const IndexPage: NextPage = () => {
  return (
    <PageLayout
      title="home"
      wrapper={{
        element: "main",
        classes: "p-4",
      }}
    >
      <h1>TODO</h1>
      <Button>GitHub</Button>
    </PageLayout>
  );
};

export default IndexPage;
