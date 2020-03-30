import React from "react";
import styled from "@emotion/styled";

interface Props {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const headerSizes = {
  h1: "36px",
  h2: "32px",
  h3: "28px",
  h4: "24px",
  h5: "20px",
  h6: "16px",
};

const Header: React.FC<Props> = ({ level, children }) => {
  const StyledHeader = styled(level)`
    font-size: ${headerSizes[level]};
    margin-bottom: 16px;
  `;

  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
