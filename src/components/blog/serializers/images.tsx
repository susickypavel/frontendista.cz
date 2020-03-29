import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { motion } from "framer-motion";

import { urlFor } from "~/utils/sanity-url-builder";

interface Props {
  image: {
    id: string;
    dimensions: {
      height: number;
      width: number;
    };
    placeholder: string;
  };
}

const UniversalImage: React.FC<Props> = ({
  image: {
    id,
    placeholder,
    dimensions: { height, width },
  },
}) => {
  const [visible, setVisible] = useState(false);

  const defaultFormat = urlFor(id)
    .format("jpg")
    .url();

  const defaultFormat768 = urlFor(id)
    .format("jpg")
    .width(768)
    .url();

  const defaultFormat425 = urlFor(id)
    .format("jpg")
    .width(425)
    .url();

  return (
    <motion.div
      style={{
        position: "relative",
        paddingTop: `calc(${height / width} * 100%)`,
        height: 0,
      }}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={{
        hidden: {
          translateX: "250px",
        },
        visible: {
          translateX: "0px",
          transition: {
            duration: 2,
          },
        },
      }}
    >
      {visible ? null : (
        <img
          src={placeholder}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        />
      )}
      <LazyLoadImage
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          visibility: visible ? "visible" : "hidden",
          width: "100%",
          height: "auto",
        }}
        srcSet={`${defaultFormat425} 425w, ${defaultFormat768} 768w, ${defaultFormat} 1000w`}
        src={defaultFormat!}
        afterLoad={() => {
          setVisible(true);
        }}
      />
    </motion.div>
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
