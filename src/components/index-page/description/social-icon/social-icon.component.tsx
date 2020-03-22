import React from "react";
import { IconBaseProps, IconType } from "react-icons";
import { SocialIconHolder, BorderSVG } from "./social-icon.styles";
import { motion } from "framer-motion";

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
        <path d="M47 47H16.0952L3 33.9048V3H33.9048L47 16.0952V47Z" fill="#212121" />
        <motion.path
          variants={{
            hidden: {
              pathLength: 0,
              strokeLinecap: "inherit",
            },
            visible: {
              transition: {
                duration: 2,
                ease: "easeOut",
              },
              pathLength: 1,
              strokeLinecap: "square",
            },
          }}
          d="M2 2H18.7902H34.1716L41.0858 8.91421L48 15.8284V32.5V48H32.5H15.8284L8.91421 41.0858L2 34.1716V17.5V2Z"
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
