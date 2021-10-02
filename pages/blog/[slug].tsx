import * as React from "react";
import BlockContent from "@sanity/block-content-to-react";
import chalk from "chalk";

import { Layout } from "@components/layout.component";
import { ImageSerializer, linkSerializer } from "@utils/blog-post-utils";
import { fetchOrThrow as apolloFetch } from "@utils/apollo-client-utils";
import { fetchOrThrow as sanityFetch } from "@utils/sanity-client-utils";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type {
  PostBySlugQuery,
  PostBySlugQueryVariables,
  PostsSlugsQuery,
} from "@generated/graphql";

import { ALL_POSTS, POST_BODY, POST_BY_SLUG } from "@query/blog";

type BlogPostProps = Omit<PostBySlugQuery["allPost"][0], "__typename"> & {
  body: any;
};

const BlogPost: NextPage<BlogPostProps> = ({ title, body, publishedAt }) => {
  return (
    <Layout title={`${title} - Pavel Susicky`}>
      <h1>{title}</h1>
      <p>{publishedAt}</p>
      <BlockContent
        blocks={body}
        serializers={{
          marks: {
            link: linkSerializer,
          },
          types: {
            image: ImageSerializer,
          },
        }}
      />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { allPost } = await apolloFetch<PostsSlugsQuery>(ALL_POSTS);

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

      const { allPost } = await apolloFetch<
        PostBySlugQuery,
        PostBySlugQueryVariables
      >(POST_BY_SLUG, {
        slug: ctx.params.slug,
      });

      if (!allPost || (Array.isArray(allPost) && !allPost.length)) {
        throw new Error("Post is not defined or was empty.");
      }

      const post = allPost[0];

      const result = await sanityFetch<{ body: any }, { slug: string }>(
        POST_BODY,
        {
          slug: ctx.params.slug,
        }
      );

      return {
        props: {
          title: post.title,
          publishedAt: post.publishedAt,
          body: result.body,
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
