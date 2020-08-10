import React, { Fragment } from "react";

import PageLayout from "src/components/page-layout/page-layout.component";
import styled from "@emotion/styled";
import { Social } from "src/components/social/social.component";

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
        return (
          <Fragment>
            <Headshot src="/headshot.png" alt="Pavel Susicky's headshot photo" />
            <Social />
          </Fragment>
        );
      }}
    >
      Index Page
    </PageLayout>
  );
};

export default IndexPage;
