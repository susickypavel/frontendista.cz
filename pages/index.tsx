import React from "react";

import { NextPage, GetStaticProps } from "next";
import Link from "next/link";

import { fetchSanity } from "~/utils/sanity-client";
import { POST_PREVIEWS, PostPreviewsQuery } from "~/queries/groq-queries";

interface Props {
  postPreviews: PostPreviewsQuery[];
}

const IndexPage: NextPage<Props> = ({ postPreviews }) => {
  return (
    <div>
      This is gonna be a Index page {process.env.ROOT}
      <Link href="/about">ABOUT</Link>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postPreviews = await fetchSanity<PostPreviewsQuery[]>(POST_PREVIEWS);

  return {
    props: {
      postPreviews,
    },
  };
};

export default IndexPage;
