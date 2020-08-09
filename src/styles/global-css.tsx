import { css } from "@emotion/core";

import { MOBILE_BODY_PADDING, MOBILE_BODY_PADDING_TOP, DESKTOP_BODY_PADDING } from "./GLOBALS";

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
