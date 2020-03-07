import React, { useEffect, createContext, useState } from "react";
import { AppProps } from "next/app";

import PageLayout from "~/components/page-layout/page-layout.component";

export const GlobalVars = createContext({
  animated: false,
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <GlobalVars.Provider
      value={{
        animated,
      }}
    >
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </GlobalVars.Provider>
  );
};

export default App;
