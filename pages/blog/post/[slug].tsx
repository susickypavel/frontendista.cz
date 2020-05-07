import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";

import { fetchSanity } from "~/utils/sanity-client";

import {
  GET_POST_USING_SLUG,
  GetPostUsingSlugQuery,
  GetPostUsingSlugVariables,
  POST_SLUGS,
} from "~/queries/groq-queries";
import { urlFor } from "~/utils/sanity-url-builder";

interface Props {
  post: GetPostUsingSlugQuery;
}

const BlogPostPage: React.FC<Props> = ({ post }) => {
  const { title, description, thumbnail, _createdAt, _updatedAt } = post;
  const {
    dimensions: { width, height },
    id,
  } = thumbnail;

  const thumbnailURL = urlFor(id)
    .format("jpg")
    .url();

  return (
    <div>
      <NextSeo
        title={`${title} | Pavel Susicky`}
        description={description}
        openGraph={{
          title,
          description,
          type: "article",
          article: {
            publishedTime: _createdAt,
            modifiedTime: _updatedAt,
          },
          images: [
            {
              url: thumbnailURL!,
              width,
              height,
              alt: "Thumbnail ",
            },
          ],
        }}
      />
      This is gonna be a Blog Post Page
    </div>
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
