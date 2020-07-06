import React from "react";
import { css } from "@emotion/core";

const Footer: React.FC = () => {
  return (
    <footer css={holder}>
      <p css={credits}>
        <b>Coded</b> and <b>Designed</b> with 💚 by <strong>Pavel Susicky</strong>
      </p>
    </footer>
  );
};

const holder = css({
  background: "#161616",
  margin: "16px",
  padding: "16px",
});

const credits = css({
  fontSize: "20px",
  textAlign: "center",
});

export default Footer;
