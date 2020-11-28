import React from "react";

import type { NextPage } from "next";

import { PageLayout } from "src/components/page-layout/page-layout.component";

interface IndexProps {}

const Index: NextPage<IndexProps> = () => {
  return (
    <PageLayout>
      <p className="text-red-500 sm:text-yellow-600 transform rotate-180">
        WIP Index Page
      </p>
    </PageLayout>
  );
};

export default Index;
