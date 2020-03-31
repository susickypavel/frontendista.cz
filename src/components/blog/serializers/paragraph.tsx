import React from "react";
import styled from "@emotion/styled";

import { FaExternalLinkAlt } from "react-icons/fa";

const Paragraph: React.FC = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

const StyledParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 24px;

  @media (min-width: 425px) {
    font-size: 24px;
    line-height: 36px;
  }
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
  & a {
    color: #ff019a;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    max-width: 500px;

    @media (max-width: 768px) {
      max-width: 250px;
    }
  }

  & svg {
    vertical-align: middle;
    margin-left: 8px;
  }
`;

export default Paragraph;
