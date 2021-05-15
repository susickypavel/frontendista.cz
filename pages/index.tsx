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
      <h1 className="text-4xl font-bold">Pavel Susicky</h1>
      <p className="text-lg">
        Student of{" "}
        <strong className={styles["description-school"]}>
          Czech Technical University in Prague
        </strong>
        , aspiring software engineer.
      </p>

      <ul className={styles["social-list"]}>
        <li className={styles["linkedIn"]}>
          <a href="https://www.linkedin.com/in/pavel-susicky/">LinkedIn</a>
        </li>
        <li className={styles["github"]}>
          <a href="https://github.com/Thesoreon">GitHub</a>
        </li>
      </ul>
    </PageLayout>
  );
};

export default IndexPage;
