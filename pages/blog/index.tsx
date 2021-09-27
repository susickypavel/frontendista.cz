import * as React from "react";
import Link from "next/link";

import { fetchOrThrow } from "@utils/apollo-client-utils";
import { PostsPreviewQuery } from "@generated/graphql";
import { ALL_POSTS_PREVIEW } from "@query/blog";

import type { GetStaticProps, NextPage } from "next";

interface BlogIndexProps {
  posts: PostsPreviewQuery["allPost"];
}

const BlogIndex: NextPage<BlogIndexProps> = ({ posts }) => {
  return (
    <main>
      {posts.map((post) => {
        return (
          <article key={post.title}>
            <h2>{post.title}</h2>
            <time dateTime={post.publishedAt}>{post.publishedAt}</time>
            <Link href={`/blog/${post.slug?.current}`}>Read more</Link>
          </article>
        );
      })}
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const result = await fetchOrThrow<PostsPreviewQuery>(ALL_POSTS_PREVIEW);

    return {
      props: {
        posts: result.allPost,
      },
    };
  } catch (error) {
    console.log(error);

    if (process.env.NODE_ENV === "production") {
      process.exit(1);
    }

    throw new Error("[SSG][BLOG]: An error occured in getStaticProps.");
  }
};

export default BlogIndex;
