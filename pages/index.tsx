import React from "react"
import { NextPage } from "next"
import dynamic from "next/dynamic"

import { PageHolder } from "~/components/index-page/index-page.styles"
import Logo from "~/components/index-page/logo/logo.component"

const SideBackground = dynamic(
  () => import("~/components/index-page/site-background/site-background.component"),
  { ssr: false }
)

const IndexPage: NextPage = () => {
  return (
    <PageHolder>
      {/* <SideBackground /> */}
      <Logo />
    </PageHolder>
  )
}

export default IndexPage
