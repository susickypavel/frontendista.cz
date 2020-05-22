import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { css } from "@emotion/core";

interface Props {
  opened: boolean;
  setOpened(): void;
}

const NavigationToggle: React.FC<Props> = ({ opened, setOpened }) => {
  return (
    <button css={buttonStyles} onClick={setOpened}>
      {React.createElement(opened ? FaTimes : FaBars, {
        size: "24px",
        color: "white",
      })}
    </button>
  );
};

const buttonStyles = css({
  zIndex: 10,
  padding: 0,
  boxSizing: "content-box",
  display: "block",
  marginLeft: "16px",
  background: "none",
  height: "24px",
  border: "none",
  "@media (min-width: 768px)": {
    display: "none",
  },
});

export default NavigationToggle;
