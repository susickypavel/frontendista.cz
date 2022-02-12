import * as React from "react";

import styles from "../src/stylesheet/pages/index.module.scss";

import type { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <div className={styles.page}>
      <h1>Hello Next.js</h1>
    </div>
  );
};

export default IndexPage;
