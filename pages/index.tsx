import { NextPage, GetStaticProps } from "next";
import { css } from "@emotion/core";

import BlogPostList from "~/components/blog-post-list/blog-post-list.component";

import { POST_PREVIEWS, PostPreviewsQuery } from "~/queries/groq-queries";
import { fetchSanity } from "~/utils/sanity-client";
import SteamInfo from "~/components/steam-info/steam-info.component";
import AboutInfo from "~/components/about-info/about-info.component";

interface Props {
  postPreviews: PostPreviewsQuery[];
}

const IndexPage: NextPage<Props> = ({ postPreviews }) => {
  return (
    <div css={pageContentHolder}>
      <BlogPostList postPreviews={postPreviews} />
      <AboutInfo />
      <SteamInfo />
    </div>
  );
};

const pageContentHolder = css({
  margin: "0 auto",
  width: "calc(100% - 32px)",
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
