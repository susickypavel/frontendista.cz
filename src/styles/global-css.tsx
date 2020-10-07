import { css } from "@emotion/core";

export const FocusStyles = css`
  &:focus {
  }

  &:active {
  }
`;

export const GlobalStyle = css`
  * {
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-family: "Oxanium";
  }

  @font-face {
    font-family: "Oxanium";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Oxanium"), url("/fonts/regular/Oxanium.woff2") format("woff2"),
      url("/fonts/regular/Oxanium.woff") format("woff");
  }

  @font-face {
    font-family: "Oxanium";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("Oxanium"), url("/fonts/bold/Oxanium.woff2") format("woff2"),
      url("/fonts/bold/Oxanium.woff") format("woff");
  }

  @font-face {
    font-family: "Oxanium";
    font-style: italic;
    font-display: swap;
    src: local("Oxanium"), url("/fonts/italic/Oxanium.woff2") format("woff2"),
      url("/fonts/italic/Oxanium.woff") format("woff");
  }
`;
