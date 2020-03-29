import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import BlockContent from "@sanity/block-content-to-react";

import {
  BlogPostPageHolder,
  PostContentHolder,
  PostTitle,
} from "~/components/blog/blog-page.styles";

import { fetchSanity } from "~/utils/sanity-client";

import {
  GET_POST_USING_SLUG,
  GetPostUsingSlugQuery,
  GetPostUsingSlugVariables,
  POST_SLUGS,
} from "~/queries/groq-queries";

/** Serializers */
import container from "~/components/blog/serializers/container";
import paragraph from "~/components/blog/serializers/paragraph";
import UniversalImage, { contentImage } from "~/components/blog/serializers/images";

interface Props {
  post: GetPostUsingSlugQuery;
}

const BlogPostPage: React.FC<Props> = ({ post: { content, thumbnail, ...rest } }) => {
  return (
    <BlogPostPageHolder>
      <PostContentHolder>
        <UniversalImage image={thumbnail} />
        <PostTitle>{rest.title}</PostTitle>
        <BlockContent
          blocks={content}
          serializers={{
            container,
            types: {
              block: paragraph,
              image: contentImage,
            },
          }}
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
