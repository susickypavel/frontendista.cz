import React from "react";

import { BlogPostListHolder } from "./blog-post-list.styles";
import BlogPostPreview from "./blog-post-preview/blog-post-preview.component";
import { PostPreviewsQuery } from "~/queries/groq-queries";

interface Props {
  postPreviews: PostPreviewsQuery[];
}

const BlogPostListComponent: React.FC<Props> = ({ postPreviews }) => {
  return (
    <BlogPostListHolder>
      {postPreviews.map(post => {
        return <BlogPostPreview key={post.title} post={post} />;
      })}
    </BlogPostListHolder>
  );
};

export default BlogPostListComponent;
