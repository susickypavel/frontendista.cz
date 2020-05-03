import React from "react";
import { css } from "@emotion/core";

import { PostPreviewsQuery } from "~/queries/groq-queries";
import BlogPostPreview from "./blog-post-preview.component";
import IntersectionNode from "./intersection-node.component";
import LineLabel from "./line-label.component";

interface Props {
  previews: PostPreviewsQuery[];
}

const BlogPostList: React.FC<Props> = ({ previews }) => {
  return (
    <section css={listHolder}>
      <IntersectionNode top={true} left={true} />
      <IntersectionNode top={true} left={false} />
      <IntersectionNode top={false} left={true} />
      <IntersectionNode top={false} left={false} />
      <LineLabel position="top" text="BLOG POSTS" />
      {previews.map(preview => (
        <BlogPostPreview preview={preview} key={preview.slug} />
      ))}
    </section>
  );
};

const listHolder = css({
  border: "1px solid #aaaaaa",
  borderBottom: "none",
  padding: "32px",
  position: "relative",
  "@media (max-width: 768px)": {
    padding: "32px 16px",
  },
});

export default BlogPostList;
