import React from "react";

import { BlogPostListHolder } from "./blog-post-list.styles";
import BlogPostPreview from "./blog-post-preview/blog-post-preview.component";

interface Props {
  postPreviews: PostPreview[];
}

export interface PostPreview {
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;
  thumbnailUrl: string;
}

const BlogPostListComponent: React.FC<Props> = ({ postPreviews }) => {
  return (
    <BlogPostListHolder>
      {postPreviews.map(({ slug: { current }, thumbnailUrl, ...rest }) => {
        return (
          <BlogPostPreview
            key={current}
            post={{ ...rest, slug: current, thumbnailUrl }}
          />
        );
      })}
    </BlogPostListHolder>
  );
};

export default BlogPostListComponent;
