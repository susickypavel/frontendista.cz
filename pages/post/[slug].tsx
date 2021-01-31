import React from "react";
import BlockContent from "@sanity/block-content-to-react";

import { sanityClient } from "src/utils/data-fetching/sanity-client";
import { createDocumentPath, dateFormat, serializers } from "src/utils/post-utils";
import { Image } from "src/components/image/image.component";
import styles from "src/assets/stylesheets/[slug].module.scss";

import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import type { Post } from "src/components/blogfeed-preview/blogfeed-preview";
import { PageLayout } from "src/components/page-layout/page-layout.component";

interface PostProps extends InferGetStaticPropsType<typeof getStaticProps> {}

const PostPage: NextPage<PostProps> = ({ post }) => {
  const { title, description, publishedAt, categories, body, mainImage } = post;

  return (
    <PageLayout
      title={title}
      description={description}
      image={{
        url: mainImage.url,
        alt: mainImage.alt,
      }}
    >
      <main className="max-w-main mx-auto">
        <article>
          <header className="mb-8">
            <Image
              node={{
                alt: mainImage.alt,
                asset: mainImage.asset,
              }}
            />
            <div className="xl:px-4">
              <h1 className="text-2xl font-bold">{title}</h1>
              <time dateTime={publishedAt}>Published on {dateFormat(publishedAt)}</time>
              <ul>
                {categories.map(category => {
                  return (
                    <li className={styles.tag} key={category}>
                      <span>#</span>
                      {category}
                    </li>
                  );
                })}
              </ul>
            </div>
          </header>
          <BlockContent
            className={styles.container}
            blocks={body}
            serializers={serializers}
            renderContainerOnSingleChild={true}
          />
        </article>
      </main>
    </PageLayout>
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
    description,
    "mainImage": {
      "asset": mainImage.asset-> {
        _id,
        "lqip": metadata.lqip,
      },
      "alt": mainImage.alt,
      "url": mainImage.asset->url
    },
    body[] {
      ...,
      asset-> {
        _id,
        "lqip": metadata.lqip
      }
    }
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
