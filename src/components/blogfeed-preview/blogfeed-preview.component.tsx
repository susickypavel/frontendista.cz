import React from "react";
import classNames from "classnames";

import type { BlogFeed } from "./blogfeed-preview";

import styles from "./blogfeed-preview.module.scss";
import { Badge } from "src/components/badge/badge.component";
import { dateFormat } from "src/utils/dateFormat";

interface BlogFeedPreviewProps {
  preview: BlogFeed;
}

export const BlogFeedPreview: React.FC<BlogFeedPreviewProps> = ({ preview }) => {
  switch (preview._type) {
    case "post":
      return (
        <article className="flex text-2xl font-bold mb-1">
          <time dateTime={preview.publishedAt}>{dateFormat(preview.publishedAt)}</time>
          <span className="ml-4 font-medium text-gray-400">[{preview.categories.join(", ")}]</span>
          <h2 className="ml-4">{preview.title}</h2>
          <div className={classNames("flex items-center", styles.badgeHolder)}>
            <Badge type="blog" />
          </div>
        </article>
      );
    case "gallery":
      return (
        <article className="flex text-2xl font-bold mb-1">
          <time>TODO</time>
          <h2 className="ml-4">{preview.title}</h2>
          <div className={classNames("flex items-center", styles.badgeHolder)}>
            <Badge type="gallery" />
          </div>
        </article>
      );
    default:
      return <div>Unknown type</div>;
  }
};
