import React from "react";
import { css } from "@emotion/core";
import { motion } from "framer-motion";

import { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";

import Seo from "~/components/page-layout/seo/seo.component";
import GridLabel from "~/components/index-page/grid-label.component";
import LogoV2 from "~/components/index-page/logov2/logov2.component";

import { fetchSanity } from "~/utils/sanity-client";
import { POST_PREVIEWS, PostPreviewsQuery } from "~/queries/groq-queries";
import BlogPostList from "~/components/index-page/blog-post-list.component";
import SocialIcons from "~/components/index-page/social-icons.component";

interface Props {
  postPreviews: PostPreviewsQuery[];
}

const IndexPage: NextPage<Props> = ({ postPreviews }) => {
  const { pathname } = useRouter();

  return (
    <>
      <Seo pathname={pathname} />
      <div css={grid}>
        <motion.div
          initial={{
            opacity: 0,
            width: 0,
          }}
          animate={{
            opacity: 1,
            width: "100%",
            transition: {
              duration: 2,
            },
          }}
          css={horizontalLines}
        />
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "100%",
            transition: {
              duration: 2,
            },
          }}
          css={verticalLines}
        />
        <div css={dotsHolder}>
          <div css={dot} style={{ top: -4.5, left: -4.5 }} />
          <div css={dot} style={{ top: -4.5, right: -4.5 }} />
          <div css={dot} style={{ bottom: -4.5, left: -4.5 }} />
          <div css={dot} style={{ bottom: -4.5, right: -4.5 }} />
        </div>
        <GridLabel text="Czech republic, Prague" position="bottom" gridArea="location" />
        <GridLabel text="Pavel Susicky" position="top" gridArea="name" />
        <GridLabel text="React, Typescript, Next.js" position="left" gridArea="side" />
        <LogoV2 />
        <SocialIcons />
      </div>
      {/* <BlogPostList previews={postPreviews} /> */}
    </>
  );
};

const grid = css({
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "100%",
  gridTemplateRows: "15% 70% 15%",
  gridTemplateAreas: "'location' 'logo' 'name'",

  "@media (min-width: 768px)": {
    gridTemplateColumns: "1fr minmax(700px, 60%) 1fr",
    gridTemplateAreas: "'. location .' '. logo side' '. name .'",
  },
});

const horizontalLines = css({
  boxSizing: "border-box",
  borderBottom: "1px solid #424242",
  borderTop: "1px solid #424242",
  gridArea: "logo",
  "@media (min-width: 768px)": {
    gridColumn: "1 / 4",
    gridRow: "2 / 3",
  },
});

const verticalLines = css({
  boxSizing: "border-box",
  display: "none",
  "@media (min-width: 768px)": {
    display: "block",
    gridArea: "logo",
    gridRow: "1 / 4",
    borderLeft: "1px solid #424242",
    borderRight: "1px solid #424242",
  },
});

const dotsHolder = css({
  display: "none",
  "@media (min-width: 768px)": {
    display: "block",
    gridArea: "logo",
    position: "relative",
  },
});

const dot = css({
  position: "absolute",
  width: "10px",
  height: "10px",
  borderRadius: "100%",
  background: "black",
  boxShadow: "0px 0px 0px 16px black",
  border: "2px solid white",
  boxSizing: "border-box",
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
