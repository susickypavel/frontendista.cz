import React from "react";

import {
  AnimatePresence,
  motion,
  ForwardRefComponent,
  HTMLMotionProps,
} from "framer-motion";

const PageTransitionProvider: React.FC = ({ children }) => {
  return <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>;
};

interface Props {
  element?: string;
}

export const PageTransitionWrapper: React.FC<Props> = ({
  children,
  element = "main",
}) => {
  const Wrapper: ForwardRefComponent<
    HTMLDivElement,
    HTMLMotionProps<"object">
  > = motion.custom(element) as any;

  return (
    <Wrapper
      initial={{
        opacity: 0,
        y: "0",
      }}
      animate={{
        opacity: 1,
        y: "100%",
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
    >
      {children}
    </Wrapper>
  );
};

export default PageTransitionProvider;
