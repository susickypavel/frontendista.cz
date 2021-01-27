import React from "react";

import { Image } from "src/components/image/image.component";

import type { Serializer } from "@sanity/block-content-to-react";
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

export const serializers: Serializer = {
  types: {
    image: (props: ImageProps) => {
      return <Image {...props} />;
    },
  },
};
