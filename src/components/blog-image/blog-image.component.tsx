import * as React from "react";
import Image from "next/image";

import type { IBlogImageProps } from "./blog-image.d";

export const BlogImage: React.FC<IBlogImageProps> = ({
  lqip,
  // eslint-disable-next-line no-unused-vars
  aspectRatio,
  caption,
  alt,
  ...props
}) => {
  let Wrapper = caption ? "figure" : React.Fragment;

  return (
    <Wrapper>
      <Image
        placeholder="blur"
        layout="responsive"
        blurDataURL={lqip}
        alt={alt}
        {...props}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </Wrapper>
  );
};
