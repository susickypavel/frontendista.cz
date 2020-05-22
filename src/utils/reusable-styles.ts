import { css } from "@emotion/core";

export const focusState = css({
  cursor: "pointer",
  padding: "4px",
  boxSizing: "content-box",
  outline: "none",
  border: "3px dashed transparent",
  "&:focus, &:hover": {
    borderColor: "lightblue",
  },
  transition: "border 0.2s ease-in-out",
});
