import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import classNames from "classnames";

import { Image } from "src/components/image/image.component";

import type { Serializer, BlockProps, ContentHeadings } from "@sanity/block-content-to-react";
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
  return input.toLowerCase().replace(/\s+/g, "-");
}

const headings: Record<ContentHeadings, { text: string; icon: string }> = {
  h1: {
    text: "text-6xl",
    icon: "w-12 h-12",
  },
  h2: {
    text: "text-5xl",
    icon: "w-10 h-10",
  },
  h3: {
    text: "text-4xl",
    icon: "w-8 h-8",
  },
  h4: {
    text: "text-3xl",
    icon: "w-6 h-6",
  },
};

export const serializers: Serializer = {
  types: {
    image: (props: ImageProps) => {
      return <Image {...props} />;
    },
    block: (props: BlockProps) => {
      const { style = "normal" } = props.node;

      if (/^h\d$/.test(style)) {
        const { text, icon } = headings[style as ContentHeadings];
        const id = slugify(props.children[0]);

        return (
          <a href={`#${id}`} className="block mb-8">
            <svg
              className={classNames("inline-block align-middle mr-4", icon)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clipRule="evenodd"
              />
            </svg>
            {React.createElement(
              style,
              { className: classNames(text, "font-bold inline-block align-middle"), id },
              props.children,
            )}
          </a>
        );
      }

      if (style === "normal") {
        return <p className="mb-8 text-xl">{props.children}</p>;
      }

      return BlockContent.defaultSerializers.types.block(props);
    },
  },
};
