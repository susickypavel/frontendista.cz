import React, { Fragment, ReactElement } from "react";
import { NextSeo } from "next-seo";

import styled from "@emotion/styled";
interface Props {
  title?: string;
  aside?: () => ReactElement;
}

const Main = styled.main`
  max-width: 896px;
  width: 100%;

  margin-bottom: 64px;
  margin-right: 64px;

  @media (max-width: 1408px) {
    margin-right: 0;
    max-width: 100%;
  }
`;

const Aside = styled.aside`
  width: 320px;
  min-height: 512px;
`;

const ContentHolder = styled.div`
  display: flex;
  flex-flow: row wrap;

  align-items: flex-start;
`;

const PageLayout: React.FC<Props> = ({ children, title = "Pavel Susicky", aside }) => {
  return (
    <Fragment>
      <NextSeo
        title={title}
        description="Pavel Susicky is a Frontend Developer from Czech republic"
      />
      <ContentHolder>
        <Main>{children}</Main>
        {aside && <Aside>{aside()}</Aside>}
      </ContentHolder>
    </Fragment>
  );
};

export default PageLayout;
