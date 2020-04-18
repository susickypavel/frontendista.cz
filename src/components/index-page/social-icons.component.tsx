import React from "react";
import { css } from "@emotion/core";

import { FaGithub, FaTwitter, FaDev, FaLinkedin } from "react-icons/fa";
import { IconBaseProps } from "react-icons/lib/cjs";
import { motion } from "framer-motion";

const icons = [
  {
    name: "Github",
    svg: FaGithub,
    color: "white",
    href: "https://github.com/Thesoreon",
  },
  {
    name: "Twitter",
    svg: FaTwitter,
    color: "#1DA1F2",
    href: "https://twitter.com/Thesoreon",
  },
  {
    name: "Dev.to",
    svg: FaDev,
    color: "white",
    href: "https://dev.to/thesoreon",
  },
  {
    name: "LinkedIn",
    svg: FaLinkedin,
    color: "#2867B2",
    href: "https://www.linkedin.com/in/pavel-susicky/",
  },
];

const SocialIcons: React.FC = () => {
  return (
    <div css={socialIconsHolder}>
      {icons.map(({ name, svg, color, href }) => {
        return (
          <a href={href} key={name} css={socialIcon}>
            <motion.svg
              css={socialIconBorder}
              whileHover={{
                scale: 1.25,
              }}
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 6V1H6" stroke="#AAAAAA" strokeWidth="2" />
              <path d="M6 63H1L1 58" stroke="#AAAAAA" strokeWidth="2" />
              <path d="M63 58V63H58" stroke="#AAAAAA" strokeWidth="2" />
              <path d="M58 1L63 1V6" stroke="#AAAAAA" strokeWidth="2" />
            </motion.svg>
            {React.createElement(svg, { size: "100%", color } as IconBaseProps)}
          </a>
        );
      })}
    </div>
  );
};

const socialIconsHolder = css({
  gridArea: "name",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const socialIconBorder = css({
  position: "absolute",
  top: 0,
  left: 0,
});

const socialIcon = css({
  minWidth: "48px",
  width: "48px",
  height: "48px",
  padding: "12px",
  background: "#202020",
  margin: "0 16px",
  position: "relative",
  zIndex: 1,
  "@media (min-width: 425px)": {
    width: "64px",
    height: "64px",
  },
});

export default SocialIcons;
