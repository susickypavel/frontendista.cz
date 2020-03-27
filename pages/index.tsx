import React from "react";
import { NextPage, GetStaticProps } from "next";
import dynamic from "next/dynamic";

import sanityClient from "@sanity/client";

import {
  LandingBlock,
  ContentBox,
  PageHolder,
  LandingBlockLeft,
  LandingBlockRight,
} from "~/components/index-page/index-page.styles";
import Logo from "~/components/index-page/logo/logo.component";
import BlogPostList, {
  PostPreview,
} from "~/components/index-page/blog-post-list/blog-post-list.component";
import { useRouter } from "next/router";
import Seo from "~/components/page-layout/seo/seo.component";
import Description from "~/components/index-page/description/description.component";
import DescriptionSplitter from "~/components/index-page/description-splitter";

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

export const getStaticProps: GetStaticProps = async () => {
  const client = sanityClient({
    projectId: "6rrtshi3",
    dataset: "production",
    useCdn: false,
  });

  const query =
    "*[_type == 'post']{ slug, title, \"thumbnailUrl\": thumbnail.asset->url }";

  const postPreviews = await client.fetch(query);

  return {
    props: {
      postPreviews,
    },
  };
};

export default IndexPage;
