import React from "react"

import { CSSReset, GlobalStyles } from "./page-layout.styles"
import Navigation from "../navigation/navigation.component"

const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <CSSReset />
      <Navigation />
      {children}
    </>
  )
}

export default PageLayout
