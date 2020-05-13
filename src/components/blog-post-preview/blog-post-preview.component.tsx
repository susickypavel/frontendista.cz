import React from "react";
import Link from "next/link";

import { PostPreviewsQuery } from "~/queries/groq-queries";

import { formatPostDate, createBlogPostHref } from "~/utils/helpers";
import { getSanityImageSrcset } from "~/utils/sanity-srcset-builder";
import { urlFor } from "~/utils/sanity-url-builder";

interface Props {
  preview: PostPreviewsQuery;
}

const BlogPostPreview: React.FC<Props> = ({
  preview: { subtitle, title, thumbnail, slug, _createdAt },
}) => {
  const { id } = thumbnail;

  const publishedDate = formatPostDate(_createdAt);
  const link = createBlogPostHref(slug);

  const thumbnailURL = urlFor(thumbnail.id).url() as string;

  return (
    <article>
      <h3>
        <Link {...link}>
          <a>
            {subtitle} {title}
          </a>
        </Link>
      </h3>
      <time dateTime={_createdAt}>{publishedDate}</time>
    </article>
  );
};

export default BlogPostPreview;
