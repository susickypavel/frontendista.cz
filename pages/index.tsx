import React from "react";

import { NextPage, GetStaticProps } from "next";
import dynamic from "next/dynamic";
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

const SideBackground = dynamic(
  () => import("~/components/index-page/site-background/site-background.component"),
  { ssr: false }
);

interface Props {
  postPreviews: PostPreview[];
}

const IndexPage: NextPage<Props> = ({ postPreviews }) => {
  const { pathname } = useRouter();

  return (
    <PageHolder>
      <Seo pathname={pathname} />
      <LandingBlock>
        <LandingBlockLeft>
          <Logo />
        </LandingBlockLeft>
        <DescriptionSplitter />
        <LandingBlockRight>
          <Description />
        </LandingBlockRight>
      </LandingBlock>
      {/* <ContentBox><BlogPostList postPreviews={postPreviews} /></ContentBox> */}
    </PageHolder>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   con

//   const query =
//     "*[_type == 'post']{ slug, title, \"thumbnailUrl\": thumbnail.asset->url }";

//   const postPreviews = await sanityClient.fetch(query);

//   return {
//     props: {
//       postPreviews,
//     },
//   };
// };

export default IndexPage;
