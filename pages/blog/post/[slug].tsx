import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import BlockContent from "@sanity/block-content-to-react";

import {
  BlogPostPageHolder,
  PostContentHolder,
  PostTitle,
  SubTitle,
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
import UniversalImage, {
  contentImage,
} from "~/components/blog/serializers/image/image.serializer";
import block from "~/components/blog/serializers/block";
import { BlockContentLink } from "~/components/blog/serializers/Paragraph";

interface Props {
  post: GetPostUsingSlugQuery;
}

const BlogPostPage: React.FC<Props> = ({ post: { content, thumbnail, ...rest } }) => {
  return (
    <BlogPostPageHolder>
      <PostContentHolder>
        <UniversalImage image={thumbnail} />
        <PostTitle>
          <SubTitle>{rest.subtitle}</SubTitle>
          <span>{rest.title}</span>
        </PostTitle>
        <BlockContent
          blocks={content}
          serializers={{
            container,
            types: {
              block: (props: any) =>
                React.createElement(block, { ...props, slug: rest.slug.current }),
              image: contentImage,
            },
            marks: {
              link: BlockContentLink,
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
