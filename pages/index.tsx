import React from "react";

import type { NextPage } from "next";

import { PageLayout } from "src/components/page-layout/page-layout.component";

interface IndexProps {}

const Index: NextPage<IndexProps> = () => {
  return (
    <PageLayout>
      <p>WIP Index Page</p>
    </PageLayout>
  );
};

export default Index;
