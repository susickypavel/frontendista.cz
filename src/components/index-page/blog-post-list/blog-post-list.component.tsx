import React from "react";

import Link from "next/link";

interface Props {
  postPreviews: PostPreview[];
}

export interface PostPreview {
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;
}

const BlogPostListComponent: React.FC<Props> = ({ postPreviews }) => {
  return (
    <div>
      {postPreviews.map(({ title, slug: { current } }) => {
        return (
          <div key={title}>
            <Link href={`/blog/post/${current}`}>
              <a>{title}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPostListComponent;
