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
      return <PreviewBarebone preview={preview} />;
    case "gallery":
      return <PreviewBarebone preview={preview} />;
    default:
      return <div>Unknown type</div>;
  }
};

const PreviewBarebone: React.FC<BlogFeedPreviewProps> = ({
  children,
  preview: { _type, slug, title, publishedAt },
}) => {
  const href = createDocumentPath(_type, slug);
  const formattedDate = dateFormat(publishedAt);

  return (
    <article className={classNames("monospace", styles.preview)}>
      <Link href={href}>
        <a className={styles.preview__link}>
          <h2>{title}</h2>
          <time dateTime={publishedAt}>{formattedDate}</time>
          <div className={styles.preview__badgeholder}>
            <Badge type={_type} />
          </div>
          {children}
        </a>
      </Link>
    </article>
  );
};
