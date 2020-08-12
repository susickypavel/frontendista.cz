import { css } from "@emotion/core";

import {
  MOBILE_BODY_PADDING,
  MOBILE_BODY_PADDING_TOP,
  DESKTOP_BODY_PADDING,
} from "./constants-css";

export const ItemFocus = css`
  &:hover {
    background: #191919;
  }

  &:active {
    background: #303030;
  }

  &:focus {
    outline: none;

    border: 2px solid white;
    background: #333333;
    transform: scale(1.1);
    border-radius: 4px;
  }
`;

export const GlobalStyle = css`
  * {
    box-sizing: border-box;
  }

  body {
    background: #202020;
    color: white;
    font-family: "Source Sans Pro";

    padding: ${MOBILE_BODY_PADDING}px;
    padding-top: ${MOBILE_BODY_PADDING_TOP}px;

    @media (min-width: 768px) {
      padding: ${DESKTOP_BODY_PADDING}px;
    }
  }

  body.using-mouse *:focus {
    border: none !important;
    transform: none !important;
    outline: none !important;
  }

  #__next {
    @media (min-width: 768px) {
      max-width: 1536px;
      margin-left: auto;
    }
  }

  @font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("SourceSansPro"), url("/fonts/regular/SourceSansPro.woff2") format("woff2"),
      url("/fonts/regular/SourceSansPro.woff") format("woff");
  }

  @font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("SourceSansPro"), url("/fonts/bold/SourceSansPro.woff2") format("woff2"),
      url("/fonts/bold/SourceSansPro.woff") format("woff");
  }

  @font-face {
    font-family: "Source Sans Pro";
    font-style: italic;
    font-display: swap;
    src: local("SourceSansPro"), url("/fonts/italic/SourceSansPro.woff2") format("woff2"),
      url("/fonts/italic/SourceSansPro.woff") format("woff");
  }
`;
