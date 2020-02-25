import React from "react"
import { NextPage } from "next"

import { PageHolder } from "~/components/index-page/index-page.styles"
import Logo from "~/components/index-page/logo/logo.component"

const IndexPage: NextPage = () => {
  return (
    <PageHolder>
      <Logo />
    </PageHolder>
  )
}

export default IndexPage
