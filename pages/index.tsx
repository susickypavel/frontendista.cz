import React, { Fragment } from "react";
import styled from "@emotion/styled";

import PageLayout from "src/components/page-layout/page-layout.component";
import { Social } from "src/components/social/social.component";

const Headshot = styled.img`
  width: 100%;
  height: auto;
  max-height: 512px;

  border: 1px dashed #dddddd;
`;

const Header = styled.h1`
  font-size: 64px;
  text-transform: uppercase;
  text-decoration: underline;
`;

const Bio = styled.p`
  font-size: 32px;
  margin: 24px 0;
  color: #dddddd;

  flex-grow: 1;
`;

const ContentHolder = styled.div`
  min-height: 512px;
  background: black;
  padding: 64px;

  display: flex;
  flex-flow: column wrap;
`;

const HobbyList = styled.ul`
  & li {
    font-size: 32px;
    margin: 16px 0;
    font-weight: bold;

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
            <Headshot src="/headshot.png" alt="Pavel Susicky's headshot photo" />
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
