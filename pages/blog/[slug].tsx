import * as React from "react";
import BlockContent from "@sanity/block-content-to-react";

import { imageSerializer } from "../../src/utils/blog-post-utils";
import { fetchOrThrow } from "../../src/utils/sanity-client-utils";
import { Layout } from "../../src/components/layout.component";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

type BlogPostProps = any;

const BlogPost: NextPage<BlogPostProps> = (props) => {
  return (
    <Layout title={`${props.title} - Pavel Susicky`}>
      <h1>{props.title}</h1>
      <p>{props.publishedAt}</p>
      <BlockContent
        blocks={props.body}
        serializers={{
          types: {
            image: imageSerializer,
          },
        }}
      />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const postsQuery = `*[_type == "post"] {
      "slug": slug.current
    }`;

    const result = await fetchOrThrow<{ slug: string }[]>(postsQuery);
    const paths = result.map((post) => `/blog/${post.slug}`);

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.info(error);

    if (process.env.NODE_ENV === "production") {
      process.exit(1);
    }

    throw new Error("[SSG][BLOG]: An error occured in getStaticPaths.");
  }
};

export const getStaticProps: GetStaticProps<any, { slug: string }> = async (
  ctx
) => {
  try {
    const postQuery = `*[_type == "post" && slug.current == $slug] {
      title,
      publishedAt,
      body[] {
        ...,
        asset->{
          ...,
          "_key": _id
        }
      }
    }[0]`;

    const result = await fetchOrThrow(postQuery, {
      slug: ctx.params?.slug,
    });

    return {
      props: result,
    };
  } catch (error) {
    console.info(error);

    if (process.env.NODE_ENV === "production") {
      process.exit(1);
    }

    throw new Error("[SSG][BLOG]: An error occured in getStaticProps.");
  }
};

export default BlogPost;
