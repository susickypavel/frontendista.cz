import React from "react";

import type { NextPage } from "next";

import { PageLayout } from "src/components/page-layout/page-layout.component";

import "normalize.css";

interface IndexProps {}

const Index: NextPage<IndexProps> = () => {
  return <PageLayout></PageLayout>;
};

export default Index;
