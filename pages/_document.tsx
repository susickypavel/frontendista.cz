/**
 * This is root of our app.
 * This section of code is rendered in the server.
 */
import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/regular/SourceSansPro.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/bold/SourceSansPro.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/italic/SourceSansPro.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
