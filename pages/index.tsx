import { NextPage, GetStaticProps } from "next";
import { css } from "@emotion/core";

import BlogPostList from "~/components/blog-post-list/blog-post-list.component";
import SteamInfo from "~/components/steam-info/steam-info.component";
import AboutInfo from "~/components/about-info/about-info.component";
import GithubInfo from "~/components/github-info/github-info.component";

import { GithubData } from "./api/github";

import { POST_PREVIEWS, PostPreviewsQuery } from "~/queries/groq-queries";
import { fetchSanity } from "~/utils/sanity-client";
import { fetcher } from "~/utils/helpers";

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
  const githubData = await fetcher<GithubData>(`${process.env.VERCEL_URL}/api/github`);

  return {
    props: {
      postPreviews,
      githubData,
    },
  };
};

export default IndexPage;
