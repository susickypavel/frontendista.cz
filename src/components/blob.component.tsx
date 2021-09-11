import * as React from "react";

import { motion } from "framer-motion";

import type { MotionProps } from "framer-motion";

const blobAnimationProps: MotionProps = {
  variants: {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
    },
  },
  initial: "hidden",
  animate: "visible",
  transition: {
    delay: 0.5,
    duration: 2,
    ease: "linear",
  },
  drag: true,
  dragConstraints: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
};

const blobShadowAnimationProps: MotionProps = {
  initial: blobAnimationProps.initial,
  animate: blobAnimationProps.animate,
  variants: {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 2,
    },
  },
  transition: {
    delay: 0.5,
    duration: 2,
    ease: "easeIn",
  },
};

export const Blob: React.FunctionComponent = () => {
  return (
    <div className="container">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        {...blobAnimationProps}
      >
        <path
          fill="#0000ff"
          d="M 152.9 39.4 C 169.2 50.5 183.2 66.7 187.5 85.4 C 191.8 104.1 186.3 125.4 175.4 142.9 C 164.5 160.4 148.2 174.1 129.6 180.5 C 111 186.9 90 186 71.7 178.9 C 53.3 171.7 37.6 158.4 28.5 141.7 C 19.3 125 16.7 104.9 19.4 85.1 C 22.1 65.3 30 45.7 44.3 34.2 C 58.6 22.7 79.3 19.3 98.8 20.7 C 118.4 22.1 136.7 28.2 152.9 39.4 Z"
        ></path>
      </motion.svg>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="blob-shadow"
        width="200"
        height="200"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transformOrigin: "center center !important",
          zIndex: -1,
        }}
        {...blobShadowAnimationProps}
      >
        <path
          fill="#000033"
          d="M 152.9 39.4 C 169.2 50.5 183.2 66.7 187.5 85.4 C 191.8 104.1 186.3 125.4 175.4 142.9 C 164.5 160.4 148.2 174.1 129.6 180.5 C 111 186.9 90 186 71.7 178.9 C 53.3 171.7 37.6 158.4 28.5 141.7 C 19.3 125 16.7 104.9 19.4 85.1 C 22.1 65.3 30 45.7 44.3 34.2 C 58.6 22.7 79.3 19.3 98.8 20.7 C 118.4 22.1 136.7 28.2 152.9 39.4 Z"
        ></path>
      </motion.svg>
      <style jsx>{`
        .container {
          display: inline-block;
          position: relative;
        }

        .blob-shadow {
        }
      `}</style>
    </div>
  );
};
