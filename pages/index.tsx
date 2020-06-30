import { NextPage, GetStaticProps } from "next";
import { css } from "@emotion/core";

import BlogPostList from "~/components/blog-post-list/blog-post-list.component";

import { POST_PREVIEWS, PostPreviewsQuery } from "~/queries/groq-queries";
import { fetchSanity } from "~/utils/sanity-client";

interface Props {
  postPreviews: PostPreviewsQuery[];
}

const IndexPage: NextPage<Props> = ({ postPreviews }) => {
  return (
    <div css={pageContentHolder}>
      <BlogPostList postPreviews={postPreviews} />
    </div>
  );
};

const pageContentHolder = css({
  margin: "0 auto",
  width: "calc(100% - 32px)",
  background: "#161616",
  height: "100%",
});

export const getStaticProps: GetStaticProps = async () => {
  const postPreviews = await fetchSanity<PostPreviewsQuery[]>(POST_PREVIEWS);

  return {
    props: {
      postPreviews,
    },
  };
};

export default IndexPage;
