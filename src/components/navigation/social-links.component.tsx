import React, { createElement } from "react";
import type { IconType } from "react-icons/lib";
import { css } from "@emotion/core";

import { FaDev, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export interface LinkProps {
  /** Text to be shown in SVG title */
  text: string;
  /** URL of the social media */
  href: string;
  /** SVG Logo of the social media */
  logo: IconType;
}

export interface SocialLinksProps {
  /** Color of the SVG logos */
  color?: string;
}

const socialLinks: LinkProps[] = [
  {
    text: "Twitter",
    logo: FaTwitter,
    href: "https://twitter.com/thesoreon",
  },
  {
    text: "Dev.to",
    logo: FaDev,
    href: "https://dev.to/thesoreon",
  },
  {
    text: "LinkedIn",
    logo: FaLinkedin,
    href: "https://www.linkedin.com/in/pavel-susicky",
  },
  {
    text: "GitHub",
    logo: FaGithub,
    href: "https://github.com/thesoreon",
  },
];

const socialLinksList = css`
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
  margin-bottom: 3.2rem;

  & li {
    margin: 0 1.6rem;
    height: 3.6rem;

    & a {
      display: inline-block;
      height: 3.6rem;

      & svg {
        height: 3.6rem;
        width: 3.6rem;
      }
    }
  }
`;

export const SocialLinks: React.FC<SocialLinksProps> = ({ color = "black" }) => {
  return (
    <ul css={socialLinksList}>
      {socialLinks.map(link => {
        const { href, logo, text } = link;

        return (
          <li key={text}>
            <a href={href}>
              {createElement(logo, {
                title: text,
                color,
                focusable: false,
              })}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
