import React, { Fragment, FunctionComponent } from "react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

import type { AppProps } from "next/app";

import { createCanonical } from "src/helpers/create-canonical-url";

import "src/stylesheets/global-styles.scss";

const App: FunctionComponent<AppProps> = ({
  Component,
  pageProps,
  router: { pathname },
}) => {
  const canonical = createCanonical(pathname);

  return (
    <Fragment>
      <Head>
        <link
          rel="preload"
          href="/fonts/Quicksand-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Quicksand-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Quicksand-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Quicksand-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <DefaultSeo
        titleTemplate="pavelsusicky.com | %s"
        defaultTitle="pavelsusicky.com"
        canonical={canonical}
      />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;
