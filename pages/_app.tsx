import * as React from "react";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";

import type { NextPage } from "next";
import type { AppProps } from "next/app";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { asPath } = useRouter();

  return (
    <React.Fragment>
      <DefaultSeo canonical={process.env.NEXT_PUBLIC_DOMAIN + asPath} />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default App;
