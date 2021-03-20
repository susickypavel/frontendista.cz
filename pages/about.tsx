import React from "react";
import Link from "next/link";

import type { NextPage } from "next";

import { PageLayout } from "src/components/page-layout/page-layout.component";

const AboutPage: NextPage = () => {
  return (
    <PageLayout title="about">
      <h1>About Page</h1>
      <Link href="/">
        <a>Go to /</a>
      </Link>
    </PageLayout>
  );
};

export default AboutPage;
