import React from "react";

import { sanityClient } from "src/utils/data-fetching/sanity-client";
import { createDocumentPath } from "src/utils/post-utils";

import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import type { Post } from "src/components/blogfeed-preview/blogfeed-preview";

interface PostProps extends InferGetStaticPropsType<typeof getStaticProps> {}

const PostPage: NextPage<PostProps> = props => {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <time>{props.post.publishedAt}</time>
      <ul>
        {props.post.categories.map(category => {
          return <li key={category}>{category}</li>;
        })}
      </ul>
    </div>
  );
};

type StaticProps = {
  slug: string;
};

export const getStaticProps: GetStaticProps<{ post: Post }, StaticProps> = async ({ params }) => {
  if (!params?.slug) {
    throw new Error("Slug is not present in params object");
  }

  const postQuery = `*[_type == "post" && slug.current == "hello-world-by-pavel-susicky"] {
    _id,
    _createdAt,
    _updatedAt,
    publishedAt,
    "slug": slug.current,
    "categories": categories[]->title,
    title,
    "mainImage": mainImage.asset-> {
      _id,
    },
    body,
  }[0]`;

  const post = await sanityClient.fetch<Post>(postQuery, { slug: params.slug });

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsQuery = `*[_type == "post"] {
    "slug": slug.current
  }`;

  const posts = await sanityClient.fetch<{ slug: string }[]>(postsQuery);
  const paths = posts.map(post => createDocumentPath("post", post.slug));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
