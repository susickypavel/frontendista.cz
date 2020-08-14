import React, { createElement } from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

import { FaDev, FaTwitter, FaLinkedin, FaGithub, FaRss } from "react-icons/fa";
import type { IconType } from "react-icons/lib";

import { ItemFocus } from "src/styles/global-css";

const SocialPanel = styled.div`
  margin-top: 6.4rem;
  background: black;
  height: 6.4rem;

  border: 1px dashed #dddddd;

  & a {
    position: relative;
    display: inline-block;

    & svg {
      position: absolute;
      top: calc(50% - 1.6rem);
      left: calc(50% - 1.6rem);
    }

    width: 20%;
    height: 100%;

    ${ItemFocus};
  }

  @media (max-width: 40em) {
    margin-top: 3.2rem;
  }
`;

const socialLinks: SocialLink[] = [
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

type SocialLink = {
  name: string;
  href: string;
  color: string;
  icon: IconType;
};
export interface SocialProps {
  links?: SocialLink[];
}

export const Social: React.FC<SocialProps> = ({ links = socialLinks }) => {
  return (
    <SocialPanel>
      {links.map(link => {
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
              size: "3.2rem",
              color: "#dddddd",
              title: name,
              "aria-label": `Icon for ${name}`,
              focusable: false,
            })}
          </a>
        );
      })}
    </SocialPanel>
  );
};
