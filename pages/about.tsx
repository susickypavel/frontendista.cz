import * as React from "react";

import styles from "@stylesheets/pages/about-page.module.scss";

import type { NextPage } from "next";
import { Button } from "@components/common/button2/button";
import { HiAcademicCap } from "react-icons/hi";

const AboutPage: NextPage = () => {
  return (
    <main className={styles.main}>
      <Button>Hello, World!</Button>
      <Button icon={HiAcademicCap}>Hello, World!</Button>
      <Button
        icons={{
          left: HiAcademicCap,
        }}>
        Hello, World!
      </Button>
      <Button
        icons={{
          right: HiAcademicCap,
        }}>
        Hello, World!
      </Button>
      <Button
        icons={{
          left: HiAcademicCap,
          right: HiAcademicCap,
        }}>
        Hello, World!
      </Button>
      <Button isDisabled>Hello, World!</Button>
      <Button isLoading>Hello, World!</Button>
      <Button isLoading size="sm">
        Hello, World!
      </Button>
      <Button isLoading>Hello, World!</Button>
      <Button isLoading size="lg">
        Hello, World!
      </Button>
    </main>
  );
};

export default AboutPage;
