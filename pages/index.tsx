import * as React from "react";

import styles from "@stylesheets/pages/index-page.module.scss";

import type { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <header className={styles.hero}>
      <h1 className={styles.heroTitle}>Pavel Susicky</h1>
      <p className={styles.heroSubtitle}>Software Engineer</p>
      <p className={styles.heroSubtitle}>Front-end developer</p>
      <p className={styles.heroSubtitle}>Prague, Czech Republic</p>
    </header>
  );
};

export default IndexPage;
