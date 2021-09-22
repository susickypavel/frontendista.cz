import * as React from "react";
import Image, { ImageProps } from "next/image";

interface SanityImageProps {
  node: {
    asset: {
      _id: string;
      url: string;
      metadata: {
        lqip: string;
        dimensions: {
          width: number;
          height: number;
        };
      };
    };
  };
}

export function imageSerializer(props: SanityImageProps) {
  const {
    url,
    metadata: {
      dimensions: { width, height },
      lqip,
    },
  } = props.node.asset;
  const [loaded, setLoaded] = React.useState(false);
  return (
    <>
      <Image
        placeholder="blur"
        blurDataURL={lqip}
        loader={imageLoader}
        src={url}
        width={width}
        height={height}
        layout="responsive"
        className={`image ${loaded ? "visible" : "hidden"}`}
        onLoadingComplete={() => setLoaded(true)}
      />
      <style jsx global>{`
        .image {
          transition: opacity 0.5s linear;
        }

        .hidden {
          opacity: 0;
        }

        .visible {
          opacity: 1;
        }
      `}</style>
    </>
  );
}

export function imageLoader({ src, quality, width }: ImageProps) {
  return `${src}?format=auto&quality=${quality ?? 80}&w=${width}`;
}
