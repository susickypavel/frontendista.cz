import React from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

import { DefaultSeo } from "next-seo";

import PageLayout from "~/components/page-layout/page-layout.component";
import PageTransitionProvider from "~/components/page-transition.component";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { route, asPath } = useRouter();

  const canonicalUrl = process.env.ROOT + asPath;

  return (
    <PageTransitionProvider>
      <PageLayout key={route}>
        <DefaultSeo
          openGraph={{
            type: "website",
            url: canonicalUrl,
          }}
          twitter={{
            cardType: "summary_large_image",
            handle: "@Thesoreon",
          }}
          title="Pavel Susicky - Frontend Developer | Portfolio"
          description="Pavel Susicky is a Frontend React developer from Czech republic"
          canonical={canonicalUrl}
        />
        <Component {...pageProps} />
      </PageLayout>
    </PageTransitionProvider>
  );
};

export default App;
