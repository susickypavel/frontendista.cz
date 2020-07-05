import React from "react";
import Link from "next/link";
import { css } from "@emotion/core";

import { PostPreviewsQuery } from "~/queries/groq-queries";

import { formatDate, createBlogPostHref } from "~/utils/helpers";
import { getSanityImageSrcset } from "~/utils/sanity-srcset-builder";
import { urlFor } from "~/utils/sanity-url-builder";

interface Props {
  preview: PostPreviewsQuery;
}

const BlogPostPreview: React.FC<Props> = ({
  preview: { subtitle, title, thumbnail, slug, _createdAt },
}) => {
  const { id } = thumbnail;

  const publishedDate = formatDate(_createdAt);
  const link = createBlogPostHref(slug);

  const thumbnailURL = urlFor(thumbnail.id).url() as string;

  return (
    <article css={previewHolder}>
      <h3 css={header}>
        <Link {...link}>
          <a>
            {subtitle} {title}
          </a>
        </Link>
      </h3>
      <time css={publishDate} dateTime={_createdAt}>
        {publishedDate}
      </time>
    </article>
  );
};

const header = css({
  fontSize: "24px",
  marginBottom: "8px",
  lineHeight: 1.3,
  "& a": {
    color: "white",
    "&:visited": {
      color: "#977ac4",
    },
    "&:hover, &:focus": {
      color: "#dddddd",
    },
  },
});

const publishDate = css({
  fontSize: "20px",
});

const previewHolder = css({
  marginBottom: "16px",
});

export default BlogPostPreview;
