import * as React from "react";

import styles from "@stylesheets/pages/index-page.module.scss";

import type { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <React.Fragment>
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>Pavel Susicky</h1>
        <p className={styles.heroSubtitle}>Software Engineer</p>
        <p className={styles.heroSubtitle}>Front-end developer</p>
      </header>
    </React.Fragment>
  );
};

export default IndexPage;
