import * as React from "react";
import { format } from "date-fns";

import styles from "@stylesheets/pages/blog/index.module.scss";

import { GET_ALL_POST } from "@queries/post";
import { GRAPHQL_CLIENT } from "@utils/graphql-client";
import { BlogImage } from "@components/blog-image/blog-image.component";
import { AnchorLink } from "@components/common/link";

import type { GetAllPost } from "@queries/__generated__";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

interface BlogIndexPageProps extends InferGetStaticPropsType<typeof getStaticProps> {}

const BlogIndex: NextPage<BlogIndexPageProps> = ({ allPost }) => {
  return (
    <main className={styles.main}>
      {allPost.map(({ title, slug, publishedAt, thumbnail }) => {
        const { url, metadata } = (thumbnail as any).asset;

        return (
          <article key={slug!.current}>
            <header>
              <BlogImage
                src={url!}
                lqip={metadata.lqip}
                width={metadata.dimensions.width}
                height={metadata.dimensions.height}
              />
              <h1>{title}</h1>
              <time dateTime={publishedAt}>
                {format(new Date(publishedAt), "MMMM do, yyyy")}
              </time>
            </header>
            <footer>
              <AnchorLink href={`/blog/${slug!.current}`}>Read</AnchorLink>
            </footer>
          </article>
        );
      })}
    </main>
  );
};

export const getStaticProps: GetStaticProps<GetAllPost> = async () => {
  const { allPost } = await GRAPHQL_CLIENT.request<GetAllPost>(GET_ALL_POST);

  if (!allPost || allPost.length === 0) {
    throw new Error("No posts found.");
  }

  return {
    props: {
      allPost,
    },
  };
};

export default BlogIndex;
