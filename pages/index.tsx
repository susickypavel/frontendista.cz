import React from "react";

import { NextPage } from "next";
import { useRouter } from "next/router";

import Seo from "~/components/page-layout/seo/seo.component";

import { LandingBlock, PageHolder } from "~/components/index-page/index-page.styles";
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
      </LandingBlock>
    </PageHolder>
  );
};

export default IndexPage;
