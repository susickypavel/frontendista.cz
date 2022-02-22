import * as React from "react";

import { GET_ALL_POST } from "@queries/post";
import { GRAPHQL_CLIENT } from "@utils/graphql-client";

import type { GetAllPost } from "@queries/__generated__";
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

export const getStaticProps: GetStaticProps<GetAllPost> = async () => {
  const { allPost } = await GRAPHQL_CLIENT.request<GetAllPost>(GET_ALL_POST);

  if (!allPost || allPost.length === 0) {
    throw new Error("No posts found.");
  }

  return {
    props: {
      allPost,
    },
  };
};

export default BlogIndex;
