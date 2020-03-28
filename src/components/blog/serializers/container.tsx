import React from "react";
import styled from "@emotion/styled";

const container: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  color: white;
  padding: 6.4em;
  padding-top: 0;
`;

export default container;
