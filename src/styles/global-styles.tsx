import { css } from "@emotion/core";

export const GlobalStyles = css`
  * {
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-family: "ChakraPetch", sans-serif;
    padding: 6.4rem;
  }

  @font-face {
    font-family: "ChakraPetch";
    font-style: normal;
    font-weight: 700;
    src: local("ChakraPetch"), url("/fonts/ChakraPetch-Bold.woff2"),
      url("/fonts/ChakraPetch-Bold.woff");
  }

  @font-face {
    font-family: "ChakraPetch";
    font-style: normal;
    font-weight: 500;
    src: local("ChakraPetch"), url("/fonts/ChakraPetch-Medium.woff2"),
      url("/fonts/ChakraPetch-Medium.woff");
  }

  @font-face {
    font-family: "ChakraPetch";
    font-style: normal;
    font-weight: 400;
    src: local("ChakraPetch"), url("/fonts/ChakraPetch-Regular.woff2"),
      url("/fonts/ChakraPetch-Regular.woff");
  }
`;
