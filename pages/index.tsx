import React from "react";
import { css } from "@emotion/core";

import { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";

import Seo from "~/components/page-layout/seo/seo.component";

import { fetchSanity } from "~/utils/sanity-client";
import { POST_PREVIEWS, PostPreviewsQuery } from "~/queries/groq-queries";
import LogoV2 from "~/components/index-page/logov2/logov2.component";

interface Props {
  postPreviews: PostPreviewsQuery[];
}

const IndexPage: NextPage<Props> = ({ postPreviews }) => {
  const { pathname } = useRouter();

  return (
    <div css={grid}>
      <Seo pathname={pathname} />
      <div css={aside()} />
      <main css={main}>
        <div css={offset} />
        <LogoV2 />
        <div css={offset(false)} />
      </main>
      <div css={aside(false)} />
    </div>
  );
};

const grid = css({
  minHeight: "100vh",
  display: "flex",
});

const main = css({
  maxWidth: "47.5%",
  width: "100%",
  borderLeft: "1px solid #aaaaaa",
  borderRight: "1px solid #aaaaaa",
  display: "flex",
  flexFlow: "column wrap",
});

const offset = (bottom: boolean = true) =>
  css({
    flexGrow: 1,
    minHeight: "150px",
    [bottom ? "borderBottom" : "borderTop"]: "1px solid #aaaaaa",
  });

const GRADIENT_RIGHT = "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 50%)";
const GRADIENT_LEFT = "linear-gradient(90deg, rgba(0, 0, 0, 0) 50%, #000000 100%)";

const aside = (left: boolean = true) =>
  css({
    flexGrow: 1,
    background: `${left ? GRADIENT_LEFT : GRADIENT_RIGHT}, url(/noise.png) no-repeat`,
    backgroundSize: "cover",
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
