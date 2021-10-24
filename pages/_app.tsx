import * as React from "react";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { Provider, defaultTheme } from "@adobe/react-spectrum";

import type { NextPage } from "next";
import type { AppProps } from "next/app";

import "../src/stylesheets/global.scss";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { asPath } = useRouter();

  const url = process.env.NEXT_PUBLIC_DOMAIN + asPath;

  return (
    <Provider theme={defaultTheme}>
      <DefaultSeo
        title="Pavel Susicky"
        description="Software engineer based in Prague, Czech republic"
        canonical={url}
        openGraph={{
          url,
          type: "website",
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_DOMAIN}/images/default.jpg`,
              width: 1920,
              height: 1080,
            },
          ],
        }}
        twitter={{
          handle: "@thesoreon",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
