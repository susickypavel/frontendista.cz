import React, { Fragment } from "react";

import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { Global } from "@emotion/core";

import type { FC } from "react";
import type { AppProps } from "next/app";

import { GlobalStyles } from "src/styles/global-styles";

import "normalize.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { asPath } = useRouter();

  return (
    <Fragment>
      <DefaultSeo
        canonical={"https://pavelsusicky.com" + asPath}
        openGraph={{
          url: "https://pavelsusicky.com" + asPath,
        }}
        twitter={{
          cardType: "summary_large_image",
          handle: "@thesoreon",
        }}
        additionalMetaTags={[
          {
            property: "author",
            content: "Pavel Susicky",
          },
        ]}
      />
      <Global styles={[GlobalStyles]} />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
