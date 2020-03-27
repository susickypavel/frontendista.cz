import React, { useEffect } from "react";
import { useSpring, useTransform, motion } from "framer-motion";
import { SplitterSVG, WrappedSplitterSVG } from "./description-splitter.styles";

const LINE_RANGE = 0.25;

const DescriptionSplitter: React.FC = () => {
  const offset = useSpring(0, {
    damping: 50,
  });

  const offsetTopBorder = useTransform(offset, value => value - LINE_RANGE);
  const offsetBottomBorder = useTransform(offset, value => value + LINE_RANGE);

  const handleMouseMove = (e: MouseEvent) => {
    offset.set(1 - e.clientY / window.innerHeight);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <>
      <SplitterSVG
        width="16"
        height="1076"
        viewBox="0 0 16 1076"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.text
          transform="translate(-4 1076) rotate(-90)"
          fill="url(#paint0_linear)"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Oxanium"
          fontSize="18"
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x="0" y="16.72">
            0 PAVEL SUSICKY IS A YOUNG FRONTEND REACT DEVELOPER BASED IN PRAGUE, LOVES
            CALISTHENICS, FITNESS AND GAMES 1
          </tspan>
        </motion.text>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="11"
            x2="1080"
            y2="11"
            gradientUnits="userSpaceOnUse"
          >
            <motion.stop offset={offsetTopBorder} stopColor="rgba(33, 33, 33, 0.75)" />
            <motion.stop offset={offset} stopColor="#00F1FF" />
            <motion.stop offset={offsetBottomBorder} stopColor="rgba(33, 33, 33, 0.75)" />
          </linearGradient>
        </defs>
      </SplitterSVG>
      <WrappedSplitterSVG
        width="1076"
        height="16"
        viewBox="0 0 1076 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          transform="translate(-0.5 -4.5)"
          fill="#00F1FF"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Oxanium"
          fontSize="18"
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x="0" y="16.72">
            0 PAVEL SUSICKY IS A YOUNG FRONTEND REACT DEVELOPER BASED IN PRAGUE, LOVES
            CALISTHENICS, FITNESS AND GAMES 1
          </tspan>
        </text>
      </WrappedSplitterSVG>
    </>
  );
};

export default DescriptionSplitter;
