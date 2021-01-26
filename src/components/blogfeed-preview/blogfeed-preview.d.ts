export type BlogFeed = GalleryPreview | PostPreview;

export interface Post {
  _type: "post";
  _id: string;
  slug: string;
  title: string;
  publishedAt: string;
  categories: string[];
  // ... Other props
}

export type PostPreview = Pick<Post, "_type" | "_id" | "slug" | "title" | "publishedAt" | "categories">;

export interface Gallery {
  _type: "gallery";
  _id: string;
  slug: string;
  title: string;
  publishedAt: string;
  photos: BlogFeedPhoto[];
  // ... Other props
}

export type GalleryPreview = Pick<Gallery, "_type" | "_id" | "slug" | "title" | "publishedAt" | "photos">;

export type DocumentTypes = "post" | "gallery";

export interface BlogFeedPhoto {
  asset: {
    /** ID of the image used for Sanity ImageBuilder */
    _id: string;
    metadata: {
      lqip: string;
      dimensions: {
        aspectRatio: number;
        width: number;
        height: number;
      };
    };
    /** This propery comes from pages/index.tsx - getStaticProps */
    url: string;
  };
}
