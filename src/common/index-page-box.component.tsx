import React from "react";
import { css } from "@emotion/core";

interface Props {
  headerText: string;
}

const IndexPageBox: React.FC<Props> = ({ headerText, children }) => {
  return (
    <section css={sectionStyles}>
      <h2 css={headerStyles}>{headerText}</h2>
      {children}
    </section>
  );
};

const headerStyles = css({
  fontSize: "32px",
  marginBottom: "16px",
});

const sectionStyles = css({
  border: "1px dotted white",
  padding: "16px",
  marginBottom: "16px",
  background: "#161616",
});

export default IndexPageBox;
