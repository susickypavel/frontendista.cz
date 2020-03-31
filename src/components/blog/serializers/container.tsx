import React from "react";
import styled from "@emotion/styled";

const container: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  color: white;
  padding: 64px;
  padding-top: 0 !important;

  @media (max-width: 1024px) {
    padding: 32px;
  }

  @media (max-width: 425px) {
    padding: 16px;
  }
`;

export default container;
