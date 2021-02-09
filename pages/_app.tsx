import React, { Fragment } from "react";
import dynamic from "next/dynamic";

import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";

import type { FC } from "react";
import type { AppProps } from "next/app";

import "tailwindcss/tailwind.css";
import "src/assets/stylesheets/global.styles.css";
import { Navigation } from "src/components/navigation/navigation.component";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { asPath } = useRouter();

  return (
    <Fragment>
      <Navigation />
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
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
