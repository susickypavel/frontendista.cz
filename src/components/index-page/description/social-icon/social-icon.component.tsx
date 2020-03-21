import React from "react";
import { IconBaseProps, IconType } from "react-icons";
import { SocialIconHolder, BorderSVG } from "./social-icon.styles";

interface Props {
  iconProps: {
    icon: IconType;
    href: string;
    color: string;
  };
}

const SocialIcon: React.FC<Props> = ({ iconProps: { icon, color, href } }) => {
  return (
    <SocialIconHolder href={href}>
      <BorderSVG
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2H34.1716L48 15.8284V48H15.8284L2 34.1716V2Z"
          stroke={color}
          strokeWidth="4"
        />
      </BorderSVG>
      {React.createElement(icon, {
        color,
        size: "4.8rem",
      } as IconBaseProps)}
    </SocialIconHolder>
  );
};

export default SocialIcon;
