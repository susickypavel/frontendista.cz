import React, { createElement } from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

import { FaDev, FaTwitter, FaLinkedin, FaGithub, FaRss } from "react-icons/fa";
import { ItemFocus } from "src/styles/global-css";

const SocialPanel = styled.div`
  margin-top: 64px;
  background: black;
  height: 64px;

  border: 1px dashed #dddddd;

  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    ${ItemFocus};
  }
`;

const socialLinks = [
  {
    icon: FaDev,
    name: "Dev.to",
    href: "https://dev.to/thesoreon",
    color: "white",
  },
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pavel-susicky/",
    color: "#2867b2",
  },
  {
    icon: FaTwitter,
    name: "Twitter",
    href: "https://twitter.com/Thesoreon",
    color: "#1da1f2",
  },
  {
    icon: FaGithub,
    name: "Github",
    href: "https://github.com/Thesoreon",
    color: "white",
  },
  {
    icon: FaRss,
    name: "RSS",
    href: "TODO",
    color: "#ee802f",
  },
];

export const Social: React.FC = () => {
  return (
    <SocialPanel>
      {socialLinks.map(link => {
        const { name, href, icon, color } = link;

        return (
          <a
            href={href}
            key={name}
            css={css({
              "&:hover, &:focus": {
                "& svg": {
                  fill: color,
                },
              },
            })}
          >
            {createElement(icon, {
              size: 32,
              color: "#dddddd",
            })}
          </a>
        );
      })}
    </SocialPanel>
  );
};
