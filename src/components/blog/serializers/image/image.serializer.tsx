import React, { useState } from "react";
import LazyLoad from "react-lazy-load";

import { motion } from "framer-motion";

import { urlFor } from "~/utils/sanity-url-builder";
import { ImageHolder, ImageElement } from "./image.styles";

interface Props {
  image: {
    id: string;
    dimensions: {
      height: number;
      width: number;
    };
  };
}

const UniversalImage: React.FC<Props> = ({
  image: {
    id,
    dimensions: { height, width },
  },
}) => {
  const [visible, setVisible] = useState(false);

  const placeholder = urlFor(id)
    .width(8)
    .quality(75)
    .auto("format")
    .url();

  const size1000 = urlFor(id)
    .auto("format")
    .url();

  const size768 = urlFor(id)
    .auto("format")
    .width(768)
    .url();

  const size425 = urlFor(id)
    .auto("format")
    .width(425)
    .url();

  return (
    <ImageHolder aspectRatio={height / width}>
      <ImageElement src={placeholder!} zIndex={1} />
      <LazyLoad>
        <ImageElement
          zIndex={2}
          src={size1000!}
          srcSet={`${size425} 425w, ${size768} 768w, ${size1000} 1000w`}
          style={{
            visibility: visible ? "visible" : "hidden",
          }}
          onLoad={() => {
            setVisible(true);
          }}
        />
      </LazyLoad>
    </ImageHolder>
  );
};

interface CIProps {
  node: {
    asset: any;
  };
}

export const contentImage: React.FC<CIProps> = ({ node: { asset } }) => {
  return <UniversalImage image={asset} />;
};

export default UniversalImage;
