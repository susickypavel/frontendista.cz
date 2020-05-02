import React from "react";
import { css } from "@emotion/core";
import { motion } from "framer-motion";

import { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";

import { fetchSanity } from "~/utils/sanity-client";
import { POST_PREVIEWS, PostPreviewsQuery } from "~/queries/groq-queries";

import Seo from "~/components/page-layout/seo/seo.component";
import LogoV2 from "~/components/index-page/logov2/logov2.component";
import IntersectionNode from "~/components/index-page/intersection-node.component";
import LineLabel from "~/components/index-page/line-label.component";
import SocialCarousel from "~/components/index-page/social-carousel.component";
import BlogPostList from "~/components/index-page/blog-post-list.component";
import Footer from "~/components/index-page/footer.component";
import { pageAnimations } from "~/components/page-transition.component";

interface Props {
  postPreviews: PostPreviewsQuery[];
}

const IndexPage: NextPage<Props> = ({ postPreviews }) => {
  const { pathname } = useRouter();

  return (
    <motion.div
      initial={pageAnimations.initial}
      animate={pageAnimations.animate}
      exit={pageAnimations.exit}
    >
      <div css={grid}>
        <Seo pathname={pathname} />
        <div css={aside()} />
        <div css={middle}>
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
              <SocialCarousel />
            </div>
          </main>
          <BlogPostList previews={postPreviews} />
        </div>
        <div css={aside(false)} />
      </div>
      <Footer />
    </motion.div>
  );
};

const grid = css({
  display: "flex",
});

const middle = css({
  display: "flex",
  flexFlow: "column nowrap",
  flexGrow: 2,
  maxWidth: "920px",
});

const main = css({
  minHeight: "100vh",
  borderLeft: "1px solid #aaaaaa",
  borderRight: "1px solid #aaaaaa",
  display: "flex",
  flexFlow: "column nowrap",
});

const offset = (bottom: boolean = true) =>
  css({
    flexGrow: 1,
    minHeight: "100px",
    position: "relative",
    [bottom ? "borderBottom" : "borderTop"]: "1px solid #aaaaaa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

const GRADIENT_RIGHT = "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 50%)";
const GRADIENT_LEFT = "linear-gradient(90deg, rgba(0, 0, 0, 0) 50%, #000000 100%)";

const aside = (left: boolean = true) =>
  css({
    flexGrow: 1,
    background: `${left ? GRADIENT_LEFT : GRADIENT_RIGHT}, url(/noise.png)`,
    backgroundSize: "100% 500px",
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
