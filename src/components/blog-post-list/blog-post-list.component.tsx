import React from "react";
import { css } from "@emotion/core";

import { PostPreviewsQuery } from "~/queries/groq-queries";
import BlogPostPreview from "../blog-post-preview/blog-post-preview.component";

interface Props {
  postPreviews: PostPreviewsQuery[];
}

const BlogPostList: React.FC<Props> = ({ postPreviews }) => {
  return (
    <section css={sectionStyles}>
      <h2 css={headerStyles}>BLOG</h2>
      {postPreviews.map(preview => {
        return <BlogPostPreview key={preview.slug} preview={preview} />;
      })}
    </section>
  );
};

const headerStyles = css({
  fontSize: "32px",
  marginBottom: "16px",
});

const sectionStyles = css({
  border: "1px dotted white",
  padding: "16px",
});

export default BlogPostList;
