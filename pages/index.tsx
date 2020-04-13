import React from "react";

import { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";

import Seo from "~/components/page-layout/seo/seo.component";

import {
  LandingBlock,
  PageHolder,
  GridContainer,
  HorizontalGridLine,
  VerticalGridLine,
} from "~/components/index-page/index-page.styles";
import BlogPostList from "~/components/index-page/blog-post-list/blog-post-list.component";
import LogoV2 from "~/components/index-page/logov2/logov2.component";

import { fetchSanity } from "~/utils/sanity-client";
import { POST_PREVIEWS, PostPreviewsQuery } from "~/queries/groq-queries";

interface Props {
  postPreviews: PostPreviewsQuery[];
}

const IndexPage: NextPage<Props> = ({ postPreviews }) => {
  const { pathname } = useRouter();

  return (
    <PageHolder>
      <Seo pathname={pathname} />
      <GridContainer>
        <HorizontalGridLine />
        <VerticalGridLine />
        <LogoV2 />
      </GridContainer>
      {/* <LandingBlock>
        <LogoV2 />
      </LandingBlock>
      <BlogPostList postPreviews={postPreviews} /> */}
    </PageHolder>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postPreviews = await fetchSanity<PostPreviewsQuery[]>(POST_PREVIEWS);

  return {
    props: {
      postPreviews,
    },
  };
};

export default IndexPage;
