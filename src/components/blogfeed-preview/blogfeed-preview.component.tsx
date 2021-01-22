import React from "react";
import Link from "next/link";
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
        <article className={classNames("text-2xl font-bold mb-1", styles.contentHolder)}>
          <Link href={`/post/${preview.slug}`}>
            <a className="flex hover:underline">
              <h2 className="ml-4 order-3">{preview.title}</h2>
              <time className="order-1" dateTime={preview.publishedAt}>
                {dateFormat(preview.publishedAt)}
              </time>
              <span className="ml-4 font-medium text-gray-400 order-2">[{preview.categories.join(", ")}]</span>
              <div className={classNames("flex items-center order-4", styles.badgeHolder)}>
                <Badge type="blog" />
              </div>
            </a>
          </Link>
        </article>
      );
    case "gallery":
      return (
        <article className={classNames("text-2xl font-bold mb-1", styles.contentHolder)}>
          <Link href={`/gallery/${preview.slug}`}>
            <a className="flex hover:underline">
              <h2 className="ml-4 order-2">{preview.title}</h2>
              <time className="order-1" dateTime={preview.publishedAt}>
                {dateFormat(preview.publishedAt)}
              </time>
              <div className={classNames("flex items-center order-3", styles.badgeHolder)}>
                <Badge type="gallery" />
              </div>
            </a>
          </Link>
        </article>
      );
    default:
      return <div>Unknown type</div>;
  }
};
