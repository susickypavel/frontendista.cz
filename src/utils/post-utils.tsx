import React from "react";

import { sanityImageURL } from "./data-fetching/sanity-client";

import type { DocumentTypes } from "src/components/blogfeed-preview/blogfeed-preview";
import type { Serializer } from "@sanity/block-content-to-react";

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
    image: props => {
      const url =
        sanityImageURL(props.node.asset._ref).width(1920).auto("format").url() ??
        "TODO: Image loading failed placeholder";

      return <img src={url} alt="" />;
    },
  },
};
