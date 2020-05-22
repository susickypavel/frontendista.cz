import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { css } from "@emotion/core";
import { focusState } from "~/utils/reusable-styles";

interface Props {
  opened: boolean;
  setOpened(): void;
}

const NavigationToggle: React.FC<Props> = ({ opened, setOpened }) => {
  return (
    <button css={[buttonStyles, focusState]} onClick={setOpened}>
      {React.createElement(opened ? FaTimes : FaBars, {
        size: "24px",
        color: "white",
      })}
    </button>
  );
};

const buttonStyles = css({
  zIndex: 10,
  display: "block",
  marginLeft: "16px",
  background: "none",
  height: "24px",
  "@media (min-width: 768px)": {
    display: "none",
  },
});

export default NavigationToggle;
