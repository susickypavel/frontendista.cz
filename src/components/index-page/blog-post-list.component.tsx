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

  const height = useSpring(_height, {
    damping: 1500,
  });

  return (
    <motion.div css={grid} style={{ height }}>
      {previews.map(preview => (
        <BlogPostPreview preview={preview} key={preview.slug} />
      ))}
    </motion.div>
  );
};

const grid = css({
  minHeight: "100vh",
  "@media (min-width: 768px)": {
    width: "60%",
    minWidth: "700px",
    margin: "0 auto",
    borderLeft: "1px solid #424242",
    borderRight: "1px solid #424242",
    boxSizing: "border-box",
  },
});

export default BlogPostList;
