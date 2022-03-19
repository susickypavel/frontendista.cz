import * as React from "react";
import Image from "next/image";

export interface BlogImageProps {
  height: string | number;
  width: string | number;
  src: string;
  lqip: string;
  aspectRatio?: number;
}

export const BlogImage: React.FunctionComponent<BlogImageProps> = ({
  lqip,
  // eslint-disable-next-line no-unused-vars
  aspectRatio,
  ...props
}) => {
  return (
    <Image
      placeholder="blur"
      layout="responsive"
      blurDataURL={lqip}
      alt="TODO"
      {...props}
    />
  );
};
