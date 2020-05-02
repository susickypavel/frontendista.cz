import React from "react";
import { AnimatePresence } from "framer-motion";

export const pageAnimations = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "backIn",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const PageTransition: React.FC = ({ children }) => {
  return <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>;
};

export default PageTransition;
