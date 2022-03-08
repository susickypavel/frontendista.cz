import { Html, Head, Main, NextScript } from "next/document";

import type { NextPage } from "next";

const Document: NextPage = () => {
  return (
    <Html lang="en">
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `@font-face{font-family:QS;src:url("/fonts/QS/700.woff2") format("woff2"),url("/fonts/QS/700.woff") format("woff");font-display:swap;font-weight:700}@font-face{font-family:QS;src:url("/fonts/QS/600.woff2") format("woff2"),url("/fonts/QS/600.woff") format("woff");font-display:swap;font-weight:600}@font-face{font-family:QS;src:url("/fonts/QS/500.woff2") format("woff2"),url("/fonts/QS/500.woff") format("woff");font-display:swap;font-weight:500}@font-face{font-family:QS;src:url("/fonts/QS/400.woff2") format("woff2"),url("/fonts/QS/400.woff") format("woff");font-display:swap;font-weight:400}@font-face{font-family:QS;src:url("/fonts/QS/300.woff2") format("woff2"),url("/fonts/QS/300.woff") format("woff");font-display:swap;font-weight:300}`,
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
