import React from "react";

import { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";

import Seo from "~/components/page-layout/seo/seo.component";
import {
  PageHolder,
  GridContainer,
  HorizontalGridLine,
  VerticalGridLine,
} from "~/components/index-page/index-page.styles";
import LogoV2 from "~/components/index-page/logov2/logov2.component";
import GridLabel from "~/components/index-page/grid-label.component";

import { fetchSanity } from "~/utils/sanity-client";
import { POST_PREVIEWS, PostPreviewsQuery } from "~/queries/groq-queries";
import BlogPostList from "~/components/index-page/blog-post-list.component";

interface Props {
  postPreviews: PostPreviewsQuery[];
}

const IndexPage: NextPage<Props> = ({ postPreviews }) => {
  const { pathname } = useRouter();

  return (
    <PageHolder>
      <Seo pathname={pathname} />
      <GridContainer>
        <HorizontalGridLine
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
            transition: {
              duration: 2,
            },
          }}
        />
        <VerticalGridLine
          initial={{
            opacity: 0,
            scaleY: 0,
          }}
          animate={{
            opacity: 1,
            scaleY: 1,
            transition: {
              duration: 2,
            },
          }}
        />
        <LogoV2 />
        <GridLabel gridArea="city" position="bottom" text="Czech republic, Prague" />
        <GridLabel gridArea="name" position="top" text="Pavel Susicky" />
      </GridContainer>
      <BlogPostList previews={postPreviews} />
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
