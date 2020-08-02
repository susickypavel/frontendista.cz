import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background: radial-gradient(56.25% 100% at 0% 0%, rgba(140, 30, 255, 0.5) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(50% 88.89% at 100% 100%, #FF2975 0%, #000000 100%);
        min-height: 100vh;
        font-family: "Source Sans Pro";
    }

    @font-face {
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local("SourceSansPro"),
            url("/fonts/regular/SourceSansPro.woff2") format("woff2"),
            url("/fonts/regular/SourceSansPro.woff") format("woff");
    }

    @font-face {
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local("SourceSansPro"),
            url("/fonts/bold/SourceSansPro.woff2") format("woff2"),
            url("/fonts/bold/SourceSansPro.woff") format("woff");
    }

    @font-face {
        font-family: "Source Sans Pro";
        font-style: italic;
        font-display: swap;
        src: local("SourceSansPro"),
            url("/fonts/italic/SourceSansPro.woff2") format("woff2"),
            url("/fonts/italic/SourceSansPro.woff") format("woff");
    }
`;
