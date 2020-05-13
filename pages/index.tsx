import React from "react";

import { NextPage, GetStaticProps } from "next";
import Link from "next/link";

import { fetchSanity } from "~/utils/sanity-client";
import { POST_PREVIEWS, PostPreviewsQuery } from "~/queries/groq-queries";
import BlogPostList from "~/components/blog-post-list/blog-post-list.component";

interface Props {
  postPreviews: PostPreviewsQuery[];
}

const IndexPage: NextPage<Props> = ({ postPreviews }) => {
  return (
    <>
      <BlogPostList postPreviews={postPreviews} />
    </>
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
