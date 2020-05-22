import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

import { DefaultSeo } from "next-seo";

import PageLayout from "~/components/page-layout/page-layout.component";
import PageTransitionProvider from "~/components/page-transition.component";
import Navigation from "~/components/navigation/navigation.component";
import GlobalVars from "~/providers/global-vars.component";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { route, asPath } = useRouter();

  const canonicalUrl = process.env.ROOT + asPath;

  const handleMouse = () => {
    document.body.classList.add("using-mouse");
    document.body.classList.remove("using-keyboard");
  };
  const handleKeyboard = (e: KeyboardEvent) => {
    if (e.keyCode === 9) {
      document.body.classList.add("using-keyboard");
      document.body.classList.remove("using-mouse");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleMouse);
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("mousedown", handleMouse);
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, []);

  return (
    <GlobalVars>
      <Navigation />
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
    </GlobalVars>
  );
};

export default App;
