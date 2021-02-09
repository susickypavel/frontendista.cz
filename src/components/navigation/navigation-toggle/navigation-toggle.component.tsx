import React from "react";

import styles from "./navigation-toggle.module.scss";

import type { NavigationToggleProps } from "./navigation-toggle";

export const NavigationToggle: React.FC<NavigationToggleProps> = ({ isHidden, onClick }) => {
  return (
    <button className={styles.toggle} onClick={onClick} aria-label={isHidden ? "Open Navigation" : "Hide Navigation"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {isHidden ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        )}
      </svg>
    </button>
  );
};
