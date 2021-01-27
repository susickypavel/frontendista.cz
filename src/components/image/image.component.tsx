import React, { useState } from "react";
import classNames from "classnames";
import NextImage from "next/image";

import type { ImageLoader } from "next/image";
import type { ImageProps } from "./image";

import styles from "./image.module.scss";
import { sanityImageURL } from "src/utils/data-fetching/sanity-client";

export const imageLoader: ImageLoader = ({ src, width }) => {
  let url = sanityImageURL(src).width(width).auto("format").url();

  if (!url) {
    url = "/placeholder.svg";
  }

  return url;
};

export const Image: React.FC<ImageProps> = ({
  node: {
    asset: { _id, lqip },
  },
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <img className="h-full w-full absolute top-0 left-0" src={lqip} alt="" />
      <NextImage
        src={_id}
        alt=""
        className={classNames({
          [styles.imageVisible]: visible,
          [styles.imageHidden]: !visible,
          "transition-opacity ease-in duration-1000": true,
        })}
        width={1920}
        height={1080}
        layout="responsive"
        loader={imageLoader}
        onLoad={() => setVisible(true)}
      />
    </div>
  );
};
