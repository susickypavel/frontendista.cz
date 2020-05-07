import { urlFor } from "./sanity-url-builder";

export function getSanityImageSrcset(id: string, sizes: number[] = [768, 425]) {
  const defaultSize = urlFor(id)
    .auto("format")
    .url();

  const urls = [
    `${defaultSize} 1024w, `,
    ...sizes.map(size => {
      const imageURL = urlFor(id)
        .auto("format")
        .width(size)
        .url();

      return `${imageURL} ${size}w`;
    }),
  ];

  return {
    src: defaultSize,
    srcset: urls.join(", "),
  };
}
