import React from "react"

import { CSSReset } from "./page-layout.styles"

const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <CSSReset />
      {children}
    </>
  )
}

export default PageLayout
