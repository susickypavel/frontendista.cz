import React from "react";
import styled from "@emotion/styled";

import { FaExternalLinkAlt } from "react-icons/fa";

const Paragraph: React.FC = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

const StyledParagraph = styled.p`
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 24px;
`;

interface LinkProps {
  mark: {
    href: string;
  };
  children: any;
}

export const BlockContentLink: React.FC<LinkProps> = ({ mark: { href }, children }) => {
  return (
    <StyledLink>
      <a href={href}>{children}</a>
      <FaExternalLinkAlt size="18px" color="#ff019a" />
    </StyledLink>
  );
};

const StyledLink = styled.span`
  white-space: nowrap;

  & a {
    color: #ff019a;
  }

  & svg {
    vertical-align: middle;
    margin-left: 8px;
  }
`;

export default Paragraph;
