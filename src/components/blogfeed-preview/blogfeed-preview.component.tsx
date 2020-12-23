import React from "react";

import Image from "next/image";

import type { BlogFeed } from "./blogfeed-preview";

interface BlogFeedPreviewProps {
  preview: BlogFeed;
}

export const BlogFeedPreview: React.FC<BlogFeedPreviewProps> = ({ preview }) => {
  switch (preview._type) {
    case "post":
      return (
        <div>
          <h2>{preview.title}</h2>
        </div>
      );
    case "gallery":
      return (
        <div>
          <h2>{preview.title}</h2>
          <div>
            {preview.photos.map(photo => {
              return (
                <Image
                  src={photo.asset.url}
                  key={photo.asset._id}
                  width={500}
                  height={500 / photo.asset.metadata.dimensions.aspectRatio}
                  alt="temp"
                  className="bg-blue-500"
                />
              );
            })}
          </div>
          dsadsadsa
        </div>
      );
    default:
      return <div>Unknown type</div>;
  }
};
