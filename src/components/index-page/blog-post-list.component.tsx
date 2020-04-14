import React from "react";
import { css } from "@emotion/core";
import { useViewportScroll, useTransform, motion, useSpring } from "framer-motion";

import { PostPreviewsQuery } from "~/queries/groq-queries";
import BlogPostPreview from "./blog-post-preview.component";

interface Props {
  previews: PostPreviewsQuery[];
}

const BlogPostList: React.FC<Props> = ({ previews }) => {
  const { scrollYProgress } = useViewportScroll();

  const _height = useTransform(scrollYProgress, [0, 1], ["-15%", "100%"]);
  const _opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const height = useSpring(_height, {
    damping: 1500,
  });

  const opacity = useSpring(_opacity, {
    damping: 1500,
  });

  return (
    <div css={grid}>
      <motion.div css={previewHolder} style={{ height }}>
        {previews.map(preview => (
          <BlogPostPreview preview={preview} key={preview.slug} opacity={opacity} />
        ))}
      </motion.div>
    </div>
  );
};

const grid = css({
  display: "grid",
  minHeight: "100vh",
  background: "black",
  gridTemplateColumns: "25% 50% 25%",
  gridTemplateRows: "100%",
  gridTemplateAreas: "'. content .'",
  "@media (max-width: 1440px)": {
    gridTemplateColumns: "1fr 75% 1fr",
  },
  "@media (max-width: 600px)": {
    gridTemplateColumns: "100%",
    gridTemplateAreas: "'content'",
  },
});

const previewHolder = css({
  gridArea: "content",
  border: "1px solid #AAAAAA",
  borderTop: "none",
  borderBottom: "none",
  padding: "16px",
  transformOrigin: "top",
  boxSizing: "border-box",
  "@media (max-width: 600px)": {
    border: "none",
  },
});

export default BlogPostList;
