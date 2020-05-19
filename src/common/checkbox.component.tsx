import React, { DetailedHTMLProps } from "react";
import { css } from "@emotion/core";

interface Props
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const CheckBox: React.FC<Props> = props => {
  return (
    <label css={labelStyles}>
      <span css={labelText}>{props.name}</span>
      <input {...props} css={inputStyles} />
      <span css={inputCheckMark} />
    </label>
  );
};

const inputStyles = css({
  display: "block",
  position: "absolute",
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  opacity: 0,
  "&:checked + span": {
    background: "white",
  },
  "&:checked + span:after": {
    display: "block",
  },
});

const inputCheckMark = css({
  position: "absolute",
  top: 0,
  left: 0,
  height: "25px",
  width: "25px",
  background: "#161616",
  border: "2px solid white",
  "&:after": {
    content: "''",
    display: "none",
    position: "absolute",
    left: "7px",
    top: "3px",
    width: "5px",
    height: "10px",
    border: "solid black",
    borderWidth: "0 3px 3px 0",
    transform: "rotate(45deg)",
  },
});

const labelText = css({
  display: "flex",
  height: "100%",
  alignItems: "center",
});

const labelStyles = css({
  position: "relative",
  display: "block",
  height: "25px",
  paddingLeft: "36px",
  fontSize: "20px",
  userSelect: "none",
  "&:hover input ~ span": {
    background: "#aaaaaa",
  },
});

export default CheckBox;
