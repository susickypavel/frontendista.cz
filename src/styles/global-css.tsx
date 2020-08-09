import { css } from "@emotion/core";

export const GlobalStyle = css`
  body {
    background: #202020;
    color: white;
    min-height: 100vh;
    font-family: "Source Sans Pro";
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
