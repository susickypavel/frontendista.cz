import React from "react";
import { css } from "@emotion/core";

const Footer: React.FC = () => {
  return (
    <footer css={footerHolder}>
      <p css={credits}>
        <b>Coded</b> and <b>Designed</b> by <strong>Pavel Susicky</strong>
      </p>
    </footer>
  );
};

const footerHolder = css({
  borderTop: "1px solid #aaaaaa",
  color: "white",
});

const credits = css({
  fontSize: "24px",
  fontWeight: "normal",
  textAlign: "center",
  padding: "32px 0",
});

export default Footer;
