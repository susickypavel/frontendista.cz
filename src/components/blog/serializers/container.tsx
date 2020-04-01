import React from "react";
import styled from "@emotion/styled";

const container: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  color: white;
  padding-top: 0 !important;

  & > *:not(div) {
    padding: 0 64px;

    @media (max-width: 1024px) {
      padding: 0 32px;
    }

    @media (max-width: 425px) {
      padding: 0 16px;
    }
  }

  & *:last-child {
    margin-bottom: 0;
  }
`;

export default container;
