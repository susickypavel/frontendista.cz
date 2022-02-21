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
  try {
    const data = await GRAPHQL_CLIENT.request<GET_POSTS>(GET_ALL_POSTS_QUERY);

    if (!data) {
      throw new Error("No posts found.");
    }

    return {
      props: {
        ...data,
      },
    };
  } catch (error) {
    console.error(
      JSON.stringify(
        {
          error,
        },
        undefined,
        2,
      ),
    );

    process.exit(1);
  }
};

export default BlogIndex;
