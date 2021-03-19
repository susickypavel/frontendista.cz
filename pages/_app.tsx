import React, { FunctionComponent } from "react";
import { PageLayout } from "src/components/page-layout/page-layout.component";

import type { AppProps } from "next/app";

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
};

export default App;
