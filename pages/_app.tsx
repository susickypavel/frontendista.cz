import React, { Fragment, FunctionComponent } from "react";
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
