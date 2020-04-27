import React from "react";
import { css } from "@emotion/core";

interface Props {
  top: boolean;
  left: boolean;
}

const IntersectionNode: React.FC<Props> = ({ top, left }) => {
  const node = css({
    height: 50,
    width: 50,
    position: "absolute",
    [top ? "top" : "bottom"]: -25,
    [left ? "left" : "right"]: -25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "black",
    "@media (max-width: 768px)": {
      display: "none",
    },
  });

  return (
    <div css={node}>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
        <path
          d="M1.804 3.577L6 1.155l4.196 2.423v4.845L6 10.845 1.804 8.423V3.577z"
          stroke="#fff"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default IntersectionNode;
