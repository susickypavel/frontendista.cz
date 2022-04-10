import * as React from "react";
import { PortableText } from "@portabletext/react";
import dynamic from "next/dynamic";

import styles from "@stylesheets/pages/blog/[slug].module.scss";

import { BlogImage } from "@components/blog-image/blog-image.component";

import {
  GET_ALL_POST_SLUG,
  GET_POST_BODY_BY_SLUG,
  GET_POST_BY_SLUG,
} from "@queries/post";
import { GRAPHQL_CLIENT } from "@utils/graphql-client";
import { SANITY_CLIENT } from "@utils/sanity-client";

import {
  GetAllPostSlug,
  GetPostBySlug,
  GetPostBySlugVariables,
  GetPostBySlug_allPost,
} from "@queries/__generated__";
import type { ParsedUrlQuery } from "querystring";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { AnchorLink } from "@components/common/link";

const YoutubeEmbed = dynamic(() => import("@components/youtube-embed"));

interface IBlogPostPageProps extends InferGetStaticPropsType<typeof getStaticProps> {}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const BlogPostPage: NextPage<IBlogPostPageProps> = ({ title, body }) => {
  return (
    <main className={styles.main}>
      <h1>{title}</h1>
      <PortableText
        value={body}
        components={{
          types: {
            youtube: ({ value }) => <YoutubeEmbed videoId={value.videoId} />,
            image: ({ value }) => <BlogImage {...value.asset} />,
          },
          marks: {
            link: ({ children, value }) => (
              <AnchorLink href={value!.href}>{children}</AnchorLink>
            ),
          },
        }}
      />
    </main>
  );
};

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
  const { allPost } = await GRAPHQL_CLIENT.request<GetAllPostSlug>(GET_ALL_POST_SLUG);

  // NOTE: This isn't really necessary as slug should never be null because it's required and validated in CMS.
  const slugs = allPost
    .map(post => post.slug?.current)
    .filter((slug): slug is string => !!slug)
    .map(slug => `/blog/${slug}`);

  if (slugs.length !== allPost.length) {
    throw new Error("Some posts don't have a slug.");
  }

  return {
    paths: slugs,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  GetPostBySlug_allPost & { body: any[] },
  IParams
> = async ({ params }) => {
  const { allPost } = await GRAPHQL_CLIENT.request<GetPostBySlug, GetPostBySlugVariables>(
    GET_POST_BY_SLUG,
    {
      slug: params!.slug,
    },
  );

  if (allPost.length < 1) {
    throw new Error(`No post with slug '${params!.slug}' found.`);
  } else if (allPost.length > 1) {
    throw new Error(`Multiple posts with the slug '${params!.slug}' found.`);
  }

  const post = allPost[0];

  const { body } = await SANITY_CLIENT.fetch<{ body: any[] }>(GET_POST_BODY_BY_SLUG, {
    slug: params!.slug,
  });

  return {
    props: {
      ...post,
      body,
    },
  };
};

export default BlogPostPage;
