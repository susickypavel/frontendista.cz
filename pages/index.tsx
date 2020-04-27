import React from "react";
import { css } from "@emotion/core";

import { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";

import { fetchSanity } from "~/utils/sanity-client";
import { POST_PREVIEWS, PostPreviewsQuery } from "~/queries/groq-queries";

import Seo from "~/components/page-layout/seo/seo.component";
import LogoV2 from "~/components/index-page/logov2/logov2.component";
import IntersectionNode from "~/components/index-page/intersection-node.component";
import LineLabel from "~/components/index-page/line-label.component";

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
        <div css={offset}>
          <IntersectionNode top={false} left={true} />
          <IntersectionNode top={false} left={false} />
          <LineLabel position="bottom" text="PAVEL SUSICKY" />
        </div>
        <LogoV2 />
        <div css={offset(false)}>
          <IntersectionNode top={true} left={true} />
          <IntersectionNode top={true} left={false} />
          <LineLabel position="top" text="SOCIAL LINKS" />
        </div>
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
  flexGrow: 2,
  maxWidth: "920px",
  borderLeft: "1px solid #aaaaaa",
  borderRight: "1px solid #aaaaaa",
  display: "flex",
  flexFlow: "column wrap",
});

const offset = (bottom: boolean = true) =>
  css({
    flexGrow: 1,
    minHeight: "75px",
    position: "relative",
    [bottom ? "borderBottom" : "borderTop"]: "1px solid #aaaaaa",
  });

const GRADIENT_RIGHT = "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 50%)";
const GRADIENT_LEFT = "linear-gradient(90deg, rgba(0, 0, 0, 0) 50%, #000000 100%)";

const aside = (left: boolean = true) =>
  css({
    flexGrow: 1,
    background: `${left ? GRADIENT_LEFT : GRADIENT_RIGHT}, url(/noise.png)`,
    "@media (max-width: 768px)": {
      display: "none",
    },
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
