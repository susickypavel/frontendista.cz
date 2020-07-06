import { NextPage, GetStaticProps } from "next";
import { css } from "@emotion/core";

import BlogPostList from "~/components/blog-post-list/blog-post-list.component";
import AboutInfo from "~/components/about-info/about-info.component";
import GithubInfo from "~/components/github-info/github-info.component";

import { POST_PREVIEWS, PostPreviewsQuery } from "~/queries/groq-queries";
import { fetchSanity } from "~/utils/sanity-client";
import { fetchGithubData, GithubData } from "~/utils/github/api";

interface Props {
  postPreviews: PostPreviewsQuery[];
  githubData: GithubData;
}

const IndexPage: NextPage<Props> = ({ postPreviews, githubData }) => {
  return (
    <div css={pageContentHolder}>
      <BlogPostList postPreviews={postPreviews} />
      <AboutInfo />
      <GithubInfo githubData={githubData} />
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
  const { data: githubData } = await fetchGithubData<GithubData>();

  return {
    props: {
      postPreviews,
      githubData,
    },
  };
};

export default IndexPage;
