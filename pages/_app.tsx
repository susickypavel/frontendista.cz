import React, { useEffect, createContext, useState } from "react";
import { AppProps } from "next/app";

import PageLayout from "~/components/page-layout/page-layout.component";
import { useRouter } from "next/router";
import PageTransition from "~/components/page-transition.component";

export const GlobalVars = createContext({
  animated: false,
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [animated, setAnimated] = useState(false);
  const { route } = useRouter();

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <GlobalVars.Provider
      value={{
        animated,
      }}
    >
      <PageTransition>
        <PageLayout>
          <Component {...pageProps} key={route} />
        </PageLayout>
      </PageTransition>
    </GlobalVars.Provider>
  );
};

export default App;
