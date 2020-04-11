import React from "react";
import Link from "next/link";

import { BlogPostPreviewLink } from "./blog-post-preview.styles";
import { PostPreviewsQuery } from "~/queries/groq-queries";
import { formatPostDate } from "~/utils/helpers";

interface Props {
  post: PostPreviewsQuery;
}

const BlogPostPreview: React.FC<Props> = ({
  post: { slug, title, subtitle, _createdAt },
}) => {
  return (
    <Link href={`/blog/post/${slug}`}>
      <BlogPostPreviewLink>
        <h2>
          <span>[ {subtitle} ]</span>
          {title}
        </h2>
        <small>
          Published <time dateTime={_createdAt}>{formatPostDate(_createdAt)}</time>
        </small>
      </BlogPostPreviewLink>
    </Link>
  );
};

export default BlogPostPreview;
