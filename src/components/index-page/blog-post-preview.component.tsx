import React from "react";
import Link from "next/link";
import { css } from "@emotion/core";

import { PostPreviewsQuery } from "~/queries/groq-queries";
import { urlFor } from "~/utils/sanity-url-builder";

interface Props {
  preview: PostPreviewsQuery;
}

const BlogPostPreview: React.FC<Props> = ({
  preview: { title, subtitle, slug, _createdAt, thumbnailRef },
}) => {
  const thumbnail = urlFor(thumbnailRef)
    .auto("format")
    .fit("crop")
    .crop("center")
    .width(1200)
    .height(500)
    .url();

  return (
    <div
      css={previewHolder}
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.15) 100%), url(${thumbnail}) center center`,
      }}
    >
      <h2 css={header}>{title}</h2>
      <Link href={`/blog/post/${slug}`}>
        <a css={readButton}>READ THE ARTICLE</a>
      </Link>
    </div>
  );
};

const previewHolder = css({
  background: "#202020",
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
