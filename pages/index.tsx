import React from "react"
import { NextPage } from "next"

import Logo from "../src/assets/logo.svg"
import { PageHolder } from "~/components/index-page/index-page.styles"

const IndexPage: NextPage = () => {
  return (
    <PageHolder>
      <Logo />
    </PageHolder>
  )
}

export default IndexPage
