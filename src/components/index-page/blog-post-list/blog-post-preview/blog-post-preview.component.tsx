import React from "react";
import Link from "next/link";

import QRCode from "qrcode.react";

import {
  BlogPostPreviewHolder,
  StyledCardSVG,
  BlogPostPreviewContent,
  BlogPostPreviewHeader,
} from "./blog-post-preview.styles";

interface Props {
  post: {
    title: string;
    slug: string;
    thumbnailUrl: string;
  };
}

const BlogPostPreview: React.FC<Props> = ({ post: { slug, title, thumbnailUrl } }) => {
  console.log(thumbnailUrl);

  return (
    <Link href={`/blog/post/${slug}`}>
      <BlogPostPreviewHolder>
        <StyledCardSVG />
        <BlogPostPreviewContent>
          <QRCode
            value={`${process.env.domain}/blog/post/${slug}`}
            renderAs="svg"
            bgColor="rgba(0, 0, 0, 0)"
            fgColor="white"
            level="L"
            size={250}
          />
          <BlogPostPreviewHeader>{title}</BlogPostPreviewHeader>
        </BlogPostPreviewContent>
      </BlogPostPreviewHolder>
    </Link>
  );
};

export default BlogPostPreview;
