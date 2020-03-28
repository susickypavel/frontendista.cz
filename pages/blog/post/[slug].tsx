import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import BlockContent from "@sanity/block-content-to-react";

import {
  BlogPostPageHolder,
  PostContentHolder,
  PostTitle,
} from "~/components/blog/blog-page.styles";
import container from "~/components/blog/serializers/container";

import { sanityClient } from "~/utils/sanity-client";
import { urlFor } from "~/utils/sanity-url-builder";
import paragraph from "~/components/blog/serializers/paragraph";

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
  const query = "*[_type == 'post' && slug.current == $slug][0]";

  const post = await sanityClient.fetch(query, { slug: params!.slug });

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = "*[_type == 'post'].slug.current";

  const postsSlug: string[] = await sanityClient.fetch(query);

  const paths = postsSlug.map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogPostPage;
