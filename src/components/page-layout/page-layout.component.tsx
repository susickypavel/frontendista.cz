import React from "react"

import { CSSReset, GlobalStyles } from "./page-layout.styles"
import Navigation from "../navigation/navigation.component"
import Seo from "./seo/seo.component"

const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <Seo />
      <GlobalStyles />
      <CSSReset />
      {/* <Navigation /> */}
      {children}
    </>
  )
}

export default PageLayout
