import React from "react";

import { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";

import Logo from "~/components/index-page/logo/logo.component";
import Seo from "~/components/page-layout/seo/seo.component";
import Description from "~/components/index-page/description/description.component";
import DescriptionSplitter from "~/components/index-page/description-splitter";

import {
  LandingBlock,
  ContentBox,
  PageHolder,
  LandingBlockLeft,
  LandingBlockRight,
} from "~/components/index-page/index-page.styles";
import BlogPostList, {
  PostPreview,
} from "~/components/index-page/blog-post-list/blog-post-list.component";
import LogoV2 from "~/components/index-page/logov2/logov2.component";

interface Props {
  postPreviews: PostPreview[];
}

const IndexPage: NextPage<Props> = ({ postPreviews }) => {
  const { pathname } = useRouter();

  return (
    <PageHolder>
      <Seo pathname={pathname} />
      <LandingBlock>
        <LogoV2 />
        {/* <LandingBlockLeft>
          <Logo />
        </LandingBlockLeft>
        <DescriptionSplitter />
        <LandingBlockRight>
          <Description />
        </LandingBlockRight> */}
      </LandingBlock>
      {/* <ContentBox><BlogPostList postPreviews={postPreviews} /></ContentBox> */}
    </PageHolder>
  );
};

export default IndexPage;
