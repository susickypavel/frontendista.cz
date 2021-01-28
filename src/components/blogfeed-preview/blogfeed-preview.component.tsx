import React from "react";
import Link from "next/link";
import classNames from "classnames";

import type { BlogFeed } from "./blogfeed-preview";

import styles from "./blogfeed-preview.module.scss";
import { Badge } from "src/components/badge/badge.component";
import { createDocumentPath, dateFormat } from "src/utils/post-utils";

interface BlogFeedPreviewProps {
  preview: BlogFeed;
}

export const BlogFeedPreview: React.FC<BlogFeedPreviewProps> = ({ preview }) => {
  switch (preview._type) {
    case "post":
      return (
        <PreviewBarebone preview={preview}>
          <span className="ml-4 font-medium text-gray-400 order-2 whitespace-nowrap">
            [{preview.categories.join(", ")}]
          </span>
        </PreviewBarebone>
      );
    case "gallery":
      return <PreviewBarebone preview={preview} />;
    default:
      return <div>Unknown type</div>;
  }
};

const PreviewBarebone: React.FC<BlogFeedPreviewProps> = ({ children, preview }) => {
  return (
    <article className={classNames("text-2xl font-bold mb-1", styles.contentHolder)}>
      <Link href={createDocumentPath(preview._type, preview.slug)}>
        <a className="flex hover:underline xl:flex-col xl:items-center">
          <h2 className="ml-4 order-3 xl:ml-0 xl:text-center">{preview.title}</h2>
          <time className="order-1 whitespace-nowrap" dateTime={preview.publishedAt}>
            {dateFormat(preview.publishedAt)}
          </time>
          <div className={classNames("flex items-center order-4", styles.badgeHolder)}>
            <Badge type={preview._type} />
          </div>
          {children}
        </a>
      </Link>
    </article>
  );
};
