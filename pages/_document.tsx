import React from "react";

import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentContext, DocumentInitialProps } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preload" href="/fonts/Inter-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/Inter-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
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
