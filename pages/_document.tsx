import { Html, Head, Main, NextScript } from "next/document";

import type { NextPage } from "next";

const Document: NextPage = () => {
  return (
    <Html lang="en">
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `@font-face{font-family:PP;src:url("/fonts/PP/normal/700.woff2") format("woff2"),url("/fonts/PP/normal/700.woff") format("woff");font-display:swap;font-weight:700}@font-face{font-family:PP;src:url("/fonts/PP/normal/600.woff2") format("woff2"),url("/fonts/PP/normal/600.woff") format("woff");font-display:swap;font-weight:600}@font-face{font-family:PP;src:url("/fonts/PP/normal/500.woff2") format("woff2"),url("/fonts/PP/normal/500.woff") format("woff");font-display:swap;font-weight:500}@font-face{font-family:PP;src:url("/fonts/PP/normal/400.woff2") format("woff2"),url("/fonts/PP/normal/400.woff") format("woff");font-display:swap;font-weight:400}@font-face{font-family:PP;src:url("/fonts/PP/normal/300.woff2") format("woff2"),url("/fonts/PP/normal/300.woff") format("woff");font-display:swap;font-weight:300}@font-face{font-family:PP;src:url("/fonts/PP/italic/700.woff2") format("woff2"),url("/fonts/PP/italic/700.woff") format("woff");font-display:swap;font-weight:700;font-style:italic}@font-face{font-family:PP;src:url("/fonts/PP/italic/600.woff2") format("woff2"),url("/fonts/PP/italic/600.woff") format("woff");font-display:swap;font-weight:600;font-style:italic}@font-face{font-family:PP;src:url("/fonts/PP/italic/500.woff2") format("woff2"),url("/fonts/PP/italic/500.woff") format("woff");font-display:swap;font-weight:500;font-style:italic}@font-face{font-family:PP;src:url("/fonts/PP/italic/400.woff2") format("woff2"),url("/fonts/PP/italic/400.woff") format("woff");font-display:swap;font-weight:400;font-style:italic}@font-face{font-family:PP;src:url("/fonts/PP/italic/300.woff2") format("woff2"),url("/fonts/PP/italic/300.woff") format("woff");font-display:swap;font-weight:300;font-style:italic}`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
