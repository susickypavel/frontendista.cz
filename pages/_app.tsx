import React from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

import PageLayout from "~/components/page-layout/page-layout.component";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { route } = useRouter();

  return (
    <PageLayout>
      <Component {...pageProps} key={route} />
    </PageLayout>
  );
};

export default App;
