import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { srcsetGenerator } from "~/utils/srcset-generator";

const initial = {
  opacity: 0,
};

const animate = {
  opacity: 1,
  transition: {
    delay: 0.5,
    duration: 2,
    ease: "easeOut",
  },
};

const logoWebp = srcsetGenerator("logo", "webp");
const logoJpg = srcsetGenerator("logo", "jpg");

const LogoBG: React.FC = () => {
  return (
    <picture>
      <source srcSet={logoWebp} />
      <AnimatedLogoImg
        initial={initial}
        animate={animate}
        srcSet={logoJpg}
        src="/logo/w800.jpg"
      />
    </picture>
  );
};

const AnimatedLogoImg = styled(motion.img)`
  border: 24px solid black;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  border-radius: 100%;
`;

export default LogoBG;
