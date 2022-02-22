import type { NextPage } from "next";
import type { AppProps } from "next/app";

const Application: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default Application;
