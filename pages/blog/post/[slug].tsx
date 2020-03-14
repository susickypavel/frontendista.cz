import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import sanityClient from "@sanity/client";
import BlockContent from "@sanity/block-content-to-react";

interface Props {
  post: any;
}

const BlogPostPage: React.FC<Props> = ({ post: { content } }) => {
  return (
    <div>
      <BlockContent blocks={content} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = sanityClient({
    projectId: "6rrtshi3",
    dataset: "production",
    useCdn: false,
  });

  const query = "*[_type == 'post' && slug.current == $slug][0]";

  const post = await client.fetch(query, { slug: params!.slug });

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = sanityClient({
    projectId: "6rrtshi3",
    dataset: "production",
    useCdn: false,
  });

  const query = "*[_type == 'post'].slug.current";

  const postsSlug: string[] = await client.fetch(query);

  const paths = postsSlug.map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogPostPage;
