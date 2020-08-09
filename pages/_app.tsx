/**
 * This component initializes the pages
 */
import React, { Fragment, useEffect } from "react";

import { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import { DefaultSeo } from "next-seo";

import { Global } from "@emotion/core";

import { GlobalStyle } from "src/styles/global-css";
import { CSSReset } from "src/styles/reset-css";
import { SiteNavigation } from "src/components/navigation/navigation.component";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { asPath } = useRouter();

  const protocol = process.env.NODE_ENV === "development" ? "http://" : "https://";
  const canonical = protocol + process.env.VERCEL_URL + asPath;

  const handleMouse = () => {
    document.body.classList.add("using-mouse");
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.keyCode === 9 || (e.keyCode === 9 && e.shiftKey)) {
      document.body.classList.remove("using-mouse");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleMouse);
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("mousedown", handleMouse);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <Fragment>
      <Global styles={[CSSReset, GlobalStyle]} />
      <DefaultSeo
        canonical={canonical}
        twitter={{
          handle: "@thesoreon",
          cardType: "summary",
        }}
      />
      <SiteNavigation />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
