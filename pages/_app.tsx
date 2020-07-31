/**
 * This component initializes the pages
 */
import React, { Fragment } from "react";
import { AppProps } from "next/app";

import { GlobalStyle } from "src/styles/global-css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
