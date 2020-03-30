import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

import { FaLink } from "react-icons/fa";

interface Props {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  slug: string;
}

const headerSizes = {
  h1: "36px",
  h2: "32px",
  h3: "28px",
  h4: "24px",
  h5: "20px",
  h6: "16px",
};

const Header: React.FC<Props> = ({ level, children, slug }) => {
  console.log(slug);

  const StyledHeader = styled(level)`
    font-size: ${headerSizes[level]};
    margin-bottom: 16px;
    margin-left: 16px;

    & svg {
      margin-left: 8px;
    }
  `;

  return (
    <StyledHeader id={children as any}>
      {children}
      <Link href={`/blog/post/${slug}#${children}`}>
        <a>
          <FaLink size={`calc(${headerSizes[level]} - 8px)`} color="gray" />
        </a>
      </Link>
    </StyledHeader>
  );
};

export default Header;
