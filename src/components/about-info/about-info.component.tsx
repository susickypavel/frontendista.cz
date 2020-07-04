import React from "react";
import { css } from "@emotion/core";

import IndexPageBox from "~/common/index-page-box.component";
import Link from "next/link";

const AboutInfo: React.FC = () => {
  return (
    <IndexPageBox headerText="About me">
      <p css={description}>
        Hi, I'm Frontend developer from Czech republic.
        <br /> My hobbies are: 👨‍💻 <b>Coding</b>, 💪 <b>Calisthenics / Fitness</b>, 🎮{" "}
        <b>Games</b>.
      </p>
      <button css={baseButton}>
        <Link href="/about">
          <a>Read more about me</a>
        </Link>
      </button>
    </IndexPageBox>
  );
};

const description = css({
  fontSize: "22px",
  lineHeight: 1.5,
  marginBottom: "16px",
});

const baseButton = css({
  background: "white",
  padding: "16px",
  fontSize: "20px",
  textTransform: "uppercase",
  fontWeight: "bold",
  fontFamily: "Oxanium",
  border: "none",
  lineHeight: 1,
  "& a": {
    textDecoration: "none",
    color: "black",
  },
});

export default AboutInfo;
