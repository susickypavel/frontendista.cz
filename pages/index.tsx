import React from "react"
import { NextPage } from "next"
import dynamic from "next/dynamic"

import {
  LandingBlock,
  ContentBox,
  PageHolder,
} from "~/components/index-page/index-page.styles"
import Logo from "~/components/index-page/logo/logo.component"
import BlogPostListComponent from "~/components/index-page/blog-post-list/blog-post-list.component"
import { useRouter } from "next/router"
import Seo from "~/components/page-layout/seo/seo.component"

const SideBackground = dynamic(
  () => import("~/components/index-page/site-background/site-background.component"),
  { ssr: false }
)

const IndexPage: NextPage = () => {
  const { pathname } = useRouter()

  return (
    <PageHolder>
      <Seo pathname={pathname} />
      <LandingBlock>
        {/* <SideBackground /> */}
        <Logo />
      </LandingBlock>
      <ContentBox>
        <BlogPostListComponent />
      </ContentBox>
    </PageHolder>
  )
}

export default IndexPage
