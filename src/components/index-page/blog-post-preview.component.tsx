import React from "react";
import Link from "next/link";
import { css } from "@emotion/core";

import { PostPreviewsQuery } from "~/queries/groq-queries";
import { urlFor } from "~/utils/sanity-url-builder";
import { formatPostDate } from "~/utils/helpers";

// TODO:
// create link to the blog post
// animate on hover ?
// mobile responsiveness

interface Props {
  preview: PostPreviewsQuery;
}

const BlogPostPreview: React.FC<Props> = ({
  preview: {
    title,
    subtitle,
    slug,
    _createdAt,
    thumbnail: { id, aspectRatio },
  },
}) => {
  const thumbnail = urlFor(id)
    .auto("format")
    .url();

  const formattedPostDate = formatPostDate(_createdAt);

  return (
    <div css={postHolder}>
      <img src={thumbnail!} alt={`Thumbnail for ${title}`} css={postThumbnail} />
      <div css={postContent}>
        <h2 css={postHeader}>
          <span>{subtitle}</span>
          {title}
        </h2>
        <time dateTime={_createdAt} css={postPublishedDate}>
          {formattedPostDate}
        </time>
        {/* <Link href={`/blog/post/${slug}`}>
          <a>READ THE ARTICLE</a>
        </Link> */}
      </div>
    </div>
  );
};

const postHolder = css({
  position: "relative",
  border: "0.5px solid rgba(67, 67, 67, 0.5)",
  marginBottom: "32px",
  "&:last-of-type": {
    margin: "0",
  },
});

const postContent = css({
  background: "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  position: "absolute",
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  color: "white",
  display: "flex",
  flexFlow: "column wrap",
});

const postHeader = css({
  fontSize: "36px",
  textShadow: "4px 4px 0px #000000",
  padding: "32px",
  flexGrow: 1,
  "& span": {
    display: "block",
  },
});

const postPublishedDate = css({
  fontSize: "30px",
  padding: "32px",
  fontWeight: "bold",
  textShadow: "4px 4px 0px #000000",
});

const postThumbnail = css({
  width: "100%",
  height: "auto",
  padding: 8,
});

export default BlogPostPreview;
