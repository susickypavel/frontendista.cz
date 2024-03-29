import "@stylesheets/global.scss";

import * as React from "react";

import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";

import { Navigation } from "@modules/navigation";
import { Footer } from "@modules/footer";

import type { NextPage } from "next";
import type { AppProps } from "next/app";

const Application: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { asPath } = useRouter();

  return (
    <React.Fragment>
      <DefaultSeo
        defaultTitle="Pavel Susicky - Software engineer"
        description="Front-end developer, aspiring software engineer."
        // NOTE: This strips all query params from the URL which might not be desired.
        // Imagine that you have a page with query param that changes the content of the page.
        // This may result in confusion for a web crawler.
        canonical={"https://frontendista.cz" + asPath.split("?")[0]}
      />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
};

export default Application;
