import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import BlockContent from "@sanity/block-content-to-react";

import {
  BlogPostPageHolder,
  PostContentHolder,
  PostTitle,
} from "~/components/blog/blog-page.styles";
import container from "~/components/blog/serializers/container";

import { urlFor } from "~/utils/sanity-url-builder";
import paragraph from "~/components/blog/serializers/paragraph";
import { fetchSanity } from "~/utils/sanity-client";

import {
  GET_POST_USING_SLUG,
  GetPostUsingSlugQuery,
  GetPostUsingSlugVariables,
  POST_SLUGS,
} from "~/queries/groq-queries";

interface Props {
  post: any;
}

const BlogPostPage: React.FC<Props> = ({ post: { content, ...rest } }) => {
  return (
    <BlogPostPageHolder>
      <PostContentHolder>
        {/* implement alt attribute */}
        <img src={urlFor(rest.thumbnail.asset._ref).url()!} alt="" />
        <PostTitle>{rest.title}</PostTitle>
        <BlockContent
          blocks={content}
          serializers={{ container, types: { block: paragraph } }}
        />
      </PostContentHolder>
    </BlogPostPageHolder>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await fetchSanity<GetPostUsingSlugQuery, GetPostUsingSlugVariables>(
    GET_POST_USING_SLUG,
    {
      slug: params!.slug as string,
    }
  );

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postSlugs = await fetchSanity<string[]>(POST_SLUGS);

  const paths = postSlugs.map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogPostPage;
