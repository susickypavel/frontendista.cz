import React from "react";
import styled from "@emotion/styled";

const paragraph: React.FC = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

const StyledParagraph = styled.p`
  font-size: 2.4rem;
`;

export default paragraph;
