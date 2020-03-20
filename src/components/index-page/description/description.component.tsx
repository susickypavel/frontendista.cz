import React from "react";

import { FaGithub, FaLinkedin, FaDev, FaTwitter } from "react-icons/fa";

import {
  TextDescription,
  DescriptionHolder,
  SocialIconsHolder,
} from "./description.styles";
import SocialIcon from "./social-icon/social-icon.component";

const icons = [
  {
    icon: FaGithub,
    href: "https://github.com/Thesoreon",
    color: "white",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/pavel-susicky/",
    color: "#2867B2",
  },
  {
    icon: FaDev,
    href: "https://dev.to/thesoreon",
    color: "white",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/Thesoreon",
    color: "#1dcaff",
  },
];

const Description: React.FC = () => {
  return (
    <DescriptionHolder>
      <TextDescription>
        <span>FRONTEND DEVELOPER</span>
        <span>FROM CZECH REPUBLIC</span>
      </TextDescription>
      <SocialIconsHolder>
        {icons.map(icon => (
          <SocialIcon iconProps={icon} key={icon.href} />
        ))}
      </SocialIconsHolder>
    </DescriptionHolder>
  );
};

export default Description;
