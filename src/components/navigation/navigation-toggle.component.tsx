import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { css, jsx } from "@emotion/core";

const toggle = css`
  padding: 0;
  border: none;
  background: none;

  position: absolute;
  right: 0;
  top: 0;

  height: 6.4rem;
  width: 6.4rem;
  //margin: 3.2rem;

  display: none;
  pointer-events: auto !important;

  @media (max-width: 64em) {
    display: block;
  }
`;

const icon = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 2.4rem;
  height: 2.4rem;
`;

interface NavigationToggleProps {
  isNavigationOpen: boolean;
  onClick: () => void;
}

export const NavigationToggle: React.FC<NavigationToggleProps> = ({
  isNavigationOpen,
  onClick,
}) => {
  return (
    <button
      css={toggle}
      aria-expanded={isNavigationOpen}
      aria-label="Navigation Toggle Button"
      onClick={onClick}
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 2.5H61.5V61.5H21.0355L2.5 42.9645V2.5Z"
          fill="black"
          stroke="#f44336"
          strokeWidth="5"
        />
      </svg>
      {jsx(isNavigationOpen ? FaTimes : FaBars, {
        color: "white",
        css: icon,
      })}
    </button>
  );
};
