import * as React from "react";
import BlockContent from "@sanity/block-content-to-react";

import {
  imageSerializer,
  linkSerializer,
} from "../../src/utils/blog-post-utils";
import { fetchOrThrow } from "../../src/utils/apollo-client-utils";
import { Layout } from "../../src/components/layout.component";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type {
  PostBySlugQuery,
  PostBySlugQueryVariables,
  PostsSlugsQuery,
} from "../../src/generated/graphql";

import chalk from "chalk";
import { ALL_POSTS, POST_BY_SLUG } from "../../src/queries/blog";

type BlogPostProps = PostBySlugQuery["allPost"][0];

const BlogPost: NextPage<BlogPostProps> = (props) => {
  console.log(props);

  return (
    <Layout title={`${props.title} - Pavel Susicky`}>
      <h1>{props.title}</h1>
      <p>{props.publishedAt}</p>
      <BlockContent
        blocks={props.bodyRaw}
        serializers={{
          marks: {
            link: linkSerializer,
          },
          types: {
            image: imageSerializer,
          },
        }}
      />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { allPost } = await fetchOrThrow<PostsSlugsQuery>(ALL_POSTS);

    if (!Array.isArray(allPost) || !allPost) {
      throw new Error(
        "No data were found. Either add new posts or check if ApolloClient has working authorization token."
      );
    }

    const paths = allPost.map((post) => {
      if (!post.slug || !post.slug.current) {
        throw new Error("Slug is not defined.");
      }

      return `/blog/${post.slug.current}`;
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.info(chalk.red(error));

    if (process.env.NODE_ENV === "production") {
      process.exit(1);
    }

    throw new Error("[SSG][BLOG]: An error occured in getStaticPaths.");
  }
};

export const getStaticProps: GetStaticProps<BlogPostProps, { slug: string }> =
  async (ctx) => {
    try {
      if (!ctx.params?.slug) {
        throw new Error("Slug is not defined.");
      }

      const { allPost } = await fetchOrThrow<
        PostBySlugQuery,
        PostBySlugQueryVariables
      >(POST_BY_SLUG, {
        slug: ctx.params.slug,
      });

      if (!allPost || (Array.isArray(allPost) && !allPost.length)) {
        throw new Error("Post is not defined or was empty.");
      }

      const post = allPost[0];

      return {
        props: {
          ...post,
        },
      };
    } catch (error) {
      console.info(chalk.red(error));

      if (process.env.NODE_ENV === "production") {
        process.exit(1);
      }

      throw new Error("[SSG][BLOG]: An error occured in getStaticProps.");
    }
  };

export default BlogPost;
