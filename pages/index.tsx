import React from "react";

import type { NextPage } from "next";

import { PageLayout } from "src/components/page-layout/page-layout.component";

import { LinkButton } from "src/components/common/components/link-button/link-button.component";
import { FaLinkedin } from "react-icons/fa";

const IndexPage: NextPage = () => {
  return (
    <PageLayout
      title="home"
      wrapper={{
        element: "main",
        classes: "p-4",
      }}
    >
      <h1>TODO</h1>
      <LinkButton
        href="https://duckduckgo.com"
        icon={{
          component: FaLinkedin,
          props: { fill: "#0077B5" },
        }}
      >
        GitHub
      </LinkButton>
    </PageLayout>
  );
};

export default IndexPage;
