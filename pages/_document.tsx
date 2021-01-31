import React from "react";
import { minify } from "terser";

import Document, { Html, Head, Main, NextScript } from "next/document";

import { ThemeLoader } from "src/components/theme/theme-loader/theme-loader.component";
import { getInitialColorTheme } from "src/utils/initial-theme";

import type { DocumentContext, DocumentInitialProps } from "next/document";
import type { ThemeLoaderProps } from "src/components/theme/theme-loader/theme-loader";

class MyDocument extends Document<ThemeLoaderProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps & ThemeLoaderProps> {
    const initialProps = await Document.getInitialProps(ctx);

    const codeToMinify = `(${String(getInitialColorTheme)})()`;
    const { code } = await minify(codeToMinify);

    if (!code) {
      console.log("Minified code from theme-loader was undefined, killing current process now.");
      process.exit(1);
    }

    return { ...initialProps, code };
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="preload" href="/fonts/Inter-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/Inter-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="dns-prefetch" href="https://cdn.sanity.io" />
          <link rel="preconnect" href="https://cdn.sanity.io" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        </Head>
        <body>
          <ThemeLoader code={this.props.code} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
