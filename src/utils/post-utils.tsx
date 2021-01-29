import React from "react";
import BlockContent from "@sanity/block-content-to-react";

import { Image } from "src/components/image/image.component";
import { Heading } from "src/components/header/header.component";
import { Link } from "src/components/link/link.component";

import type { Serializer, BlockProps, ContentLinkProps } from "@sanity/block-content-to-react";
import type { DocumentTypes } from "src/components/blogfeed-preview/blogfeed-preview";
import type { ImageProps } from "src/components/image/image";

export function dateFormat(date: string): string {
  return new Date(date).toLocaleDateString("cs", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function createDocumentPath(documentType: DocumentTypes, slug: string): string {
  return `/${documentType}/${slug}`;
}

export function slugify(input: string): string {
  return input.toLowerCase().trim().replace(/\s+/g, "-");
}

export const serializers: Serializer = {
  types: {
    image: (props: ImageProps) => {
      return <Image {...props} />;
    },
    block: (props: BlockProps) => {
      const { style = "normal" } = props.node;

      if (/^h\d$/.test(style)) {
        return <Heading {...props} />;
      }

      if (style === "normal") {
        return <p className="mb-8 text-xl sm:text-base">{props.children}</p>;
      }

      if (style == "blockquote") {
        return <blockquote className="text-xl mb-8 p-4 bg-blue-500 text-white">{props.children}</blockquote>;
      }

      return BlockContent.defaultSerializers.types.block(props);
    },
  },
  marks: {
    link: (props: ContentLinkProps) => {
      return <Link {...props} />;
    },
  },
};
