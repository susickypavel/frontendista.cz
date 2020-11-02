import React from "react";

import type { NextPage } from "next";

import { PageLayout } from "src/components/page-layout/page-layout.component";

interface IndexProps {}

const Index: NextPage<IndexProps> = () => {
  return (
    <PageLayout>
      Hello, World
      <label htmlFor="test">Test</label>
      <input id="test" />
      <button>Hello</button>
    </PageLayout>
  );
};

export default Index;
