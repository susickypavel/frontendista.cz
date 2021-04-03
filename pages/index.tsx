import React from "react";
import Link from "next/link";

import type { NextPage } from "next";

import { PageLayout } from "src/components/page-layout/page-layout.component";

const IndexPage: NextPage = () => {
  return (
    <PageLayout title="home">
      <h1 className="font-bold text-4xl my-4">Index Page</h1>
      <Link href="/about">
        <a>Go to /about</a>
      </Link>
    </PageLayout>
  );
};

export default IndexPage;
