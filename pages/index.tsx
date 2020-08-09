import React from "react";

import PageLayout from "src/components/page-layout/page-layout.component";
import styled from "@emotion/styled";

const Headshot = styled.img`
  width: 100%;
  height: auto;
  max-height: 512px;

  border: 1px dashed #dddddd;
`;

const IndexPage: React.FC = () => {
  return (
    <PageLayout
      aside={() => {
        return <Headshot src="/headshot.png" alt="" />;
      }}
    >
      Index Page
    </PageLayout>
  );
};

export default IndexPage;
