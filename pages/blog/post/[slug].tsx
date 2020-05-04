import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { fetchSanity } from "~/utils/sanity-client";

import {
  GET_POST_USING_SLUG,
  GetPostUsingSlugQuery,
  GetPostUsingSlugVariables,
  POST_SLUGS,
} from "~/queries/groq-queries";

interface Props {
  post: GetPostUsingSlugQuery;
}

const BlogPostPage: React.FC<Props> = ({ post: { content, thumbnail, ...rest } }) => {
  return <div>This is gonna be a Blog Post Page</div>;
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
