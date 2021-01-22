import type { DocumentTypes } from "src/components/blogfeed-preview/blogfeed-preview";

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
