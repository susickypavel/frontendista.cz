import * as React from "react";
import Image from "next/image";

export interface BlogImageProps {
  height: string;
  width: string;
  src: string;
  lqip: string;
}

export const BlogImage: React.FunctionComponent<BlogImageProps> = ({
  lqip,
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
