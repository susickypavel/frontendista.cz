import React, { Fragment } from "react";

import type { FC } from "react"
import type { AppProps } from "next/app";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp;
