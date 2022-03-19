import * as React from "react";
import { format } from "date-fns";

import { GET_ALL_POST } from "@queries/post";
import { GRAPHQL_CLIENT } from "@utils/graphql-client";
import { AnchorLink } from "@components/common/anchor-link/anchor-link.component";

import type { GetAllPost } from "@queries/__generated__";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

interface BlogIndexPageProps extends InferGetStaticPropsType<typeof getStaticProps> {}

const BlogIndex: NextPage<BlogIndexPageProps> = ({ allPost }) => {
  return (
    <main>
      {allPost.map(({ title, slug, publishedAt }) => {
        return (
          <article key={slug!.current}>
            <header>
              <h1>{title}</h1>
              <time dateTime={publishedAt}>
                {format(new Date(publishedAt), "MMMM do, yyyy")}
              </time>
            </header>
            <footer>
              <AnchorLink
                nextLinkProps={{
                  href: `/blog/${slug!.current}`,
                }}>
                Read
              </AnchorLink>
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
