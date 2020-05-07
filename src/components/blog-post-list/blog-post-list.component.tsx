import React from "react";

import { PostPreviewsQuery } from "~/queries/groq-queries";
import BlogPostPreview from "../blog-post-preview/blog-post-preview.component";

interface Props {
  postPreviews: PostPreviewsQuery[];
}

const BlogPostList: React.FC<Props> = ({ postPreviews }) => {
  return (
    <section>
      {postPreviews.map(preview => {
        return <BlogPostPreview key={preview.slug} preview={preview} />;
      })}
    </section>
  );
};

export default BlogPostList;
