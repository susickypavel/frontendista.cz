import React from "react";

import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { sanityClient } from "src/utils/data-fetching/sanity-client";
import { Post } from "src/components/blogfeed-preview/blogfeed-preview";

interface PostProps extends InferGetStaticPropsType<typeof getStaticProps> {}

const PostPage: NextPage<PostProps> = props => {
  return <div>{props.slug}</div>;
};

type StaticProps = {
  slug: string;
};

export const getStaticProps: GetStaticProps<StaticProps, StaticProps> = async ({ params }) => {
  if (!params?.slug) {
    throw new Error("Slug is not present in params object");
  }

  return {
    props: {
      slug: params.slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsQuery = `*[_type == "post"] {
    "slug": slug.current
  }`;

  // Refactor types in blogfeed-preview

  const posts = await sanityClient.fetch<{ slug: string }[]>(postsQuery);
  const paths = posts.map(post => `/post/${post.slug}`);

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
