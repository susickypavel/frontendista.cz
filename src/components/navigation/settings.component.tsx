import React, { useState, useContext } from "react";
import Popover from "react-tiny-popover";
import { FaCog } from "react-icons/fa";

import { css } from "@emotion/core";

import { motion } from "framer-motion";

import CheckBox from "~/common/checkbox.component";

import { GlobalVarsContext } from "~/providers/global-vars.component";

const Settings: React.FC = () => {
  const [opened, setOpened] = useState(false);

  const {
    theme: { switchTheme, checked },
  } = useContext(GlobalVarsContext);

  return (
    <Popover
      isOpen={opened}
      position="bottom"
      align="end"
      padding={24}
      onClickOutside={() => setOpened(false)}
      content={
        <div css={popoverStyles}>
          <div css={checkboxHolder}>
            <CheckBox
              type="checkbox"
              name="Dark Mode"
              id="darkmode"
              checked={checked}
              onChange={switchTheme}
            />
          </div>
          <div css={checkboxHolder}>
            <CheckBox type="checkbox" name="Reduced motion" id="darkmode" />
          </div>
        </div>
      }
    >
      <motion.span
        css={toggleStyles}
        onClick={() => setOpened(prev => !prev)}
        role="button"
        animate={{
          rotate: opened ? "90deg" : "0deg",
        }}
      >
        <FaCog size="24px" />
      </motion.span>
    </Popover>
  );
};

const checkboxHolder = css({
  padding: "16px",
  paddingBottom: 0,
});

const popoverStyles = css({
  background: "black",
  width: "500px",
  height: "500px",
  border: "2px solid white",
});

const toggleStyles = css({
  width: "24px",
  height: "24px",
  cursor: "pointer",
  "&:hover": {
    color: "#aaaaaa",
  },
});

export default Settings;
