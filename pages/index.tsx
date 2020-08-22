import React, { Fragment } from "react";
import styled from "@emotion/styled";

import PageLayout from "src/components/page-layout/page-layout.component";
import { Social } from "src/components/social/social.component";
import { DashedBorder } from "src/styles/global-css";

import { OptimizedHeadshotImage } from "src/components/optimized-headshot-image/optimized-headshot-image.component";

const Headshot = styled(OptimizedHeadshotImage)`
  width: 100%;
  height: auto;

  overflow: hidden;

  ${DashedBorder};

  @media (min-width: 40em) {
    max-height: 51.2rem;
  }
`;

const Header = styled.h1`
  font-size: 6.4rem;
  text-transform: uppercase;
  text-decoration: underline;

  @media (max-width: 40em) {
    font-size: 3.2rem;
  }
`;

const Bio = styled.p`
  font-size: 3.2rem;
  margin: 24px 0;
  color: #dddddd;

  flex-grow: 1;

  @media (max-width: 40em) {
    font-size: 2.4rem;
  }
`;

const ContentHolder = styled.div`
  min-height: 51.2rem;
  background: black;
  padding: 6.4rem;

  display: flex;
  flex-flow: column wrap;

  ${DashedBorder};

  @media (max-width: 40em) {
    padding: 3.2rem;
    min-height: auto;
  }
`;

const HobbyList = styled.ul`
  & li {
    font-size: 3.2rem;
    margin: 16px 0;
    font-weight: bold;

    @media (max-width: 40em) {
      font-size: 2rem;
    }

    &:nth-of-type(2) {
      margin: 32px 0;
    }

    &:before {
      content: attr(data-icon);
      display: inline-block;
      width: 64px;
    }
  }
`;

const IndexPage: React.FC = () => {
  return (
    <PageLayout
      aside={() => {
        return (
          <Fragment>
            <Headshot alt="Pavel Susicky's headshot photo" />
            <Social />
          </Fragment>
        );
      }}
    >
      <ContentHolder>
        <Header>Pavel Susicky</Header>
        <Bio>Frontend Developer based in Prague, Czech republic.</Bio>
        <HobbyList>
          <li data-icon="🎲">GAMER</li>
          <li data-icon="💪">FITNESS &amp; CALISTHENICS</li>
          <li data-icon="👩‍💻">AND DEVELOPER</li>
        </HobbyList>
      </ContentHolder>
    </PageLayout>
  );
};

export default IndexPage;
