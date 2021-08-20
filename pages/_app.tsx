import * as React from "react";

import "tailwindcss/tailwind.css";
import "@susicky/design-system-react/lib/index.css";

import type { NextPage } from "next";
import type { AppProps } from "next/app";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
