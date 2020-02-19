import React from "react"
import { AppProps } from "next/app"

import PageLayout from "~/components/page-layout/page-layout.component"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  )
}

export default App
