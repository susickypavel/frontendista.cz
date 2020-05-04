import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

import QRCode from "qrcode.react";

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
  const size1000 = urlFor(id)
    .auto("format")
    .url();

  const size768 = urlFor(id)
    .auto("format")
    .width(768)
    .url();

  const size425 = urlFor(id)
    .auto("format")
    .width(425)
    .url();

  const formattedPostDate = formatPostDate(_createdAt);

  return (
    <Link href={`/blog/post/${slug}`} passHref={true}>
      <motion.a
        whileTap={{
          scale: 0.98,
        }}
        whileHover={{
          scale: 1.02,
        }}
        css={postHolder}
      >
        <img
          src={size1000!}
          srcSet={`${size425} 425w, ${size768} 768w, ${size1000} 1000w`}
          alt={`Thumbnail for ${title}`}
          css={postThumbnail}
        />
        <PostContent>
          <h2 css={postHeader}>
            <span>{subtitle}</span>
            {title}
          </h2>
          <time dateTime={_createdAt} css={postPublishedDate}>
            {formattedPostDate}
          </time>
        </PostContent>
      </motion.a>
    </Link>
  );
};

const postHolder = css({
  display: "block",
  position: "relative",
  border: "1px solid rgba(67, 67, 67, 0.5)",
  marginBottom: "32px",
  "&:last-of-type": {
    margin: "0",
  },
  "&:focus": {
    border: "1px solid #aaaaaa",
  },
  outline: "none",
  cursor: "pointer",
});

const postHeader = css({
  fontSize: "36px",
  textShadow: "4px 4px 0px #000000",
  padding: "32px",
  flexGrow: 1,
  "& span": {
    display: "block",
    lineHeight: 1.2,
  },
  "@media (max-width: 768px)": {
    fontSize: "24px",
    padding: "20px",
  },
  "@media (max-width: 450px)": {
    fontSize: "20px",
    padding: "16px",
  },
});

const PostContent = styled.div({
  background: "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  position: "absolute",
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  color: "white",
  display: "flex",
  flexFlow: "column wrap",
  "&:hover": {
    background: "black",
  },
  transition: "background 0.25s ease-in",
});

const postPublishedDate = css({
  fontSize: "30px",
  padding: "32px",
  fontWeight: "bold",
  textShadow: "4px 4px 0px #000000",
  "@media (max-width: 768px)": {
    fontSize: "22px",
    padding: "24px",
  },
  "@media (max-width: 450px)": {
    fontSize: "18px",
    padding: "14px",
  },
});

const postThumbnail = css({
  width: "100%",
  height: "auto",
  padding: 8,
});

export default BlogPostPreview;
