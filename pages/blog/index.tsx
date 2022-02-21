import * as React from "react";

import { GET_ALL_POSTS_QUERY } from "@queries/post";
import { GRAPHQL_CLIENT } from "@utils/graphql-client";

import type { GET_POSTS } from "@queries/__generated__";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

interface BlogIndexPageProps extends InferGetStaticPropsType<typeof getStaticProps> {}

const BlogIndex: NextPage<BlogIndexPageProps> = ({ allPost }) => {
  return (
    <div>
      {allPost.map(post => {
        return <div key={post.title}>{post.title}</div>;
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps<GET_POSTS> = async () => {
  // TODO: Error handling
  const data = await GRAPHQL_CLIENT.request<GET_POSTS>(GET_ALL_POSTS_QUERY);

  return {
    props: {
      ...data,
    },
  };
};

export default BlogIndex;
