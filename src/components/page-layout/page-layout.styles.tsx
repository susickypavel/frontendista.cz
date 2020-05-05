import { css } from "@emotion/core";

export const fontFaces = css`
  @font-face {
    font-family: "Oxanium";
    src: url("/fonts/oxanium-bold-webfont.woff2") format("woff2"),
      url("/fonts/oxanium-bold-webfont.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Oxanium";
    src: url("/fonts/oxanium-medium-webfont.woff2") format("woff2"),
      url("/fonts/oxanium-medium-webfont.woff") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Oxanium";
    src: url("/fonts/oxanium-regular-webfont.woff2") format("woff2"),
      url("/fonts/oxanium-regular-webfont.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;

export const globalStyles = css`
  body {
    background: black;
    color: white;
  }
`;
