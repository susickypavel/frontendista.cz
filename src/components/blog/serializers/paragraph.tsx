import React from "react";
import styled from "@emotion/styled";

const Paragraph: React.FC = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

const StyledParagraph = styled.p`
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 24px;
`;

export default Paragraph;
