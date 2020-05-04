import React, { useState } from "react";
import { css, Global } from "@emotion/core";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navigation: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleMouseClick = (e: React.MouseEvent) => {
    setVisible(prev => !prev);
  };

  return (
    <nav css={navigationHolder}>
      <button onClick={handleMouseClick} css={navigationToggle}>
        OPEN
      </button>
      <AnimatePresence>
        {visible && (
          <>
            <Global
              styles={{
                body: {
                  overflow: "hidden",
                  height: "100vh",
                  paddingRight: "25px",
                },
              }}
            />
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              css={contentHolder}
            >
              <ul>
                <li>
                  <Link href="/about">
                    <a>ABOUT</a>
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

const navigationHolder = css({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 10,
  minWidth: 1,
  minHeight: 1,
  width: "100%",
});

const contentHolder = css({
  width: "100vw",
  height: "100vh",
  background: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(4px)",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 10,
});

const navigationToggle = css({
  width: "50px",
  height: "50px",
  background: "red",
  position: "absolute",
  zIndex: 15,
  top: 64,
  right: 64,
});

export default Navigation;
