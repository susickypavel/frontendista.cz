import React from "react";
import { css } from "@emotion/core";

import { PostPreviewsQuery } from "~/queries/groq-queries";
import BlogPostPreview from "../blog-post-preview/blog-post-preview.component";
import IndexPageBox from "../common/index-page-box.component";

interface Props {
  postPreviews: PostPreviewsQuery[];
}

const BlogPostList: React.FC<Props> = ({ postPreviews }) => {
  return (
    <IndexPageBox headerText="BLOG">
      {postPreviews.map(preview => {
        return <BlogPostPreview key={preview.slug} preview={preview} />;
      })}
    </IndexPageBox>
  );
};

const sectionStyles = css({
  border: "1px dotted white",
  padding: "16px",
});

export default BlogPostList;
