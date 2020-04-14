import React from "react";
import Link from "next/link";
import { css } from "@emotion/core";
import { MotionValue, motion } from "framer-motion";

import { PostPreviewsQuery } from "~/queries/groq-queries";
import { urlFor } from "~/utils/sanity-url-builder";
import { formatPostDate } from "~/utils/helpers";

interface Props {
  preview: PostPreviewsQuery;
  opacity: MotionValue<any>;
}

const BlogPostPreview: React.FC<Props> = ({
  preview: { title, subtitle, slug, _createdAt, thumbnailRef },
  opacity,
}) => {
  const thumbnail = urlFor(thumbnailRef)
    .auto("format")
    .fit("crop")
    .crop("center")
    .width(1200)
    .height(500)
    .url();

  const formattedPostDate = formatPostDate(_createdAt);

  return (
    <motion.div
      css={previewHolder}
      style={{
        opacity,
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.15) 100%), url(${thumbnail}) center center`,
      }}
    >
      <h2 css={header}>{title}</h2>
      <time dateTime={_createdAt}>{formattedPostDate}</time>
      <Link href={`/blog/post/${slug}`}>
        <a css={readButton}>READ THE ARTICLE</a>
      </Link>
    </motion.div>
  );
};

const previewHolder = css({
  color: "white",
  marginBottom: "16px",
  height: "250px",
});

const header = css({
  fontSize: "24px",
  padding: "16px",
});

const readButton = css({
  fontSize: "20px",
  fontWeight: "bold",
  color: "white",
  background: "black",
  padding: "16px",
  border: "1px solid white",
});

export default BlogPostPreview;
