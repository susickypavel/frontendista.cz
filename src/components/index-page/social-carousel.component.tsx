import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import { AnimatePresence, motion } from "framer-motion";

import { FaGithub, FaTwitter, FaDev, FaLinkedin } from "react-icons/fa";

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

const variants = {
  enter: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 25 : -25,
      opacity: 0,
    };
  },
};

const SocialCarousel: React.FC = () => {
  const [selectedIndex, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleMoveLeft = () => {
    setDirection(-1);

    setIndex(i => {
      if (i - 1 < 0) return icons.length - 1;

      return i - 1;
    });
  };

  const handleMoveRight = () => {
    setDirection(1);

    setIndex(i => {
      if (i + 1 >= icons.length) return 0;

      return i + 1;
    });
  };

  useEffect(() => {
    if (hovered) return;

    const id = setInterval(() => {
      handleMoveRight();
    }, 5000);

    return () => {
      clearInterval(id);
    };
  }, [hovered]);

  return (
    <div
      css={holder}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        style={{ zIndex: 1, position: "relative" }}
        width="144"
        height="137"
        viewBox="0 0 144 137"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          css={arrow}
          fill="black"
          d="M22 51L4.32233 68.6777L22 86.3553"
          stroke="white"
          strokeWidth="5"
          onClick={handleMoveLeft}
        />
        <path
          css={arrow}
          fill="black"
          d="M122 86L139.678 68.3223L122 50.6447"
          stroke="white"
          strokeWidth="5"
          onClick={handleMoveRight}
        />
      </svg>
      <div css={content}>
        <AnimatePresence custom={direction}>
          {icons.map(({ svg, color, name, href }, index) => {
            return (
              index == selectedIndex && (
                <motion.a
                  href={href}
                  key={name}
                  css={socialLink}
                  variants={variants}
                  custom={direction}
                  initial="enter"
                  animate="animate"
                  exit="exit"
                >
                  {React.createElement(svg, { size: "50px", color })}
                  <h2 css={socialName}>{name}</h2>
                </motion.a>
              )
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

const arrow = css({
  padding: "32px",
  cursor: "pointer",
});

const holder = css({
  color: "white",
  position: "relative",
});

const content = css({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const socialLink = css({
  display: "flex",
  flexFlow: "column wrap",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  textDecoration: "none",
  position: "absolute",
  zIndex: 2,
});

const socialName = css({
  textAlign: "center",
  fontSize: "18px",
  marginTop: "8px",
});

export default SocialCarousel;
