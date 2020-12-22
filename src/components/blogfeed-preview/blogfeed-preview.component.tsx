import React from "react";

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
                <img src={photo.asset.url} key={photo.asset._id} width={250} alt="temp" />
              );
            })}
          </div>
        </div>
      );
    default:
      return <div>Unknown type</div>;
  }
};
