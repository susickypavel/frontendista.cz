import React from "react";
import Link from "next/link";
import { css } from "@emotion/core";
import { MotionValue, motion } from "framer-motion";

import { PostPreviewsQuery } from "~/queries/groq-queries";
import { urlFor } from "~/utils/sanity-url-builder";
import { formatPostDate } from "~/utils/helpers";

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
    <div css={previewHolder}>
      <img src={thumbnail!} alt={`Thumbnail for ${title}`} css={postThumbnail} />
      <div css={content}>
        <h2 css={header}>{title}</h2>
        <time dateTime={_createdAt}>{formattedPostDate}</time>
        <Link href={`/blog/post/${slug}`}>
          <a css={readButton}>READ THE ARTICLE</a>
        </Link>
      </div>
    </div>
  );
};

const previewHolder = css({
  position: "relative",
  marginBottom: "16px",
  margin: "0 16px 16px 16px",
  "&:last-of-type": {
    marginBottom: 0,
  },
});

const postThumbnail = css({
  width: "100%",
  height: "auto",
});

const content = css({
  color: "white",
  height: "100%",
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  background: "linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.05) 100%)",
  display: "flex",
  flexFlow: "column wrap",
});

const header = css({
  fontSize: "24px",
  textShadow: "0px 0px 4px black",
});

const readButton = css({
  background: "#424242",
  padding: "16px",
  fontSize: "15px",
  fontWeight: "bold",
  border: "1px solid white",
  textAlign: "center",
  marginTop: "auto",
});

export default BlogPostPreview;
