import * as React from "react";
import Image from "next/image";

export interface IBlogImageProps {
  height: string | number;
  width: string | number;
  src: string;
  lqip: string;
  aspectRatio?: number;
  alt: string;
  caption?: string;
}

export const BlogImage: React.FunctionComponent<IBlogImageProps> = ({
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
