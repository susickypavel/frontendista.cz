import * as React from "react";
import { LazyMotion, m, domAnimation } from "framer-motion";

import styles from "@stylesheets/pages/index-page.module.scss";

import type { NextPage } from "next";
import type { Variants } from "framer-motion";

const animationRoot: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.5, staggerDirection: 1 },
  },
};

const childAnimation: Variants = {
  hidden: { x: -32, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const IndexPage: NextPage = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.header
        variants={animationRoot}
        initial="hidden"
        animate="visible"
        className={styles.hero}>
        <m.h1 variants={childAnimation} className={styles.heroTitle}>
          Pavel Susicky
        </m.h1>
        <m.p variants={childAnimation} className={styles.heroSubtitle}>
          Software Engineer
        </m.p>
        <m.p variants={childAnimation} className={styles.heroSubtitle}>
          Front-end developer
        </m.p>
        <m.p variants={childAnimation} className={styles.heroSubtitle}>
          Prague, Czech Republic
        </m.p>
      </m.header>
    </LazyMotion>
  );
};

export default IndexPage;
