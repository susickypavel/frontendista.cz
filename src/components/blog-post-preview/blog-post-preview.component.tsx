import React from "react";

import { PostPreviewsQuery } from "~/queries/groq-queries";
import { getSanityImageSrcset } from "~/utils/sanity-srcset-builder";
import { formatPostDate, createBlogPostHref } from "~/utils/helpers";
import Link from "next/link";

interface Props {
  preview: PostPreviewsQuery;
}

const BlogPostPreview: React.FC<Props> = ({
  preview: { subtitle, title, thumbnail, slug, _createdAt },
}) => {
  const { id } = thumbnail;

  const publishedDate = formatPostDate(_createdAt);
  const link = createBlogPostHref(slug);

  return (
    <article>
      <h2>
        {subtitle} {title}
      </h2>
      <time dateTime={_createdAt}>{publishedDate}</time>
      <Link {...link}>
        <a>Read the article</a>
      </Link>
    </article>
  );
};

export default BlogPostPreview;
