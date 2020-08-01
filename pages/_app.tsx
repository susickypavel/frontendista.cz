/**
 * This component initializes the pages
 */
import React, { Fragment } from "react";

import { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import { DefaultSeo } from "next-seo";

import { GlobalStyle } from "src/styles/global-css";
import { CSSReset } from "src/styles/reset-css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { asPath } = useRouter();

  const protocol = process.env.NODE_ENV === "development" ? "http://" : "https://";
  const canonical = protocol + process.env.VERCEL_URL + asPath;

  return (
    <Fragment>
      <GlobalStyle />
      <CSSReset />
      <DefaultSeo
        canonical={canonical}
        twitter={{
          handle: "@thesoreon",
          cardType: "summary",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
