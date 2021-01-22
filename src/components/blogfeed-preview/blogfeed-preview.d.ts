// TODO: Research better solution then type union.
export type BlogFeed =
  | {
      _type: "gallery";
      _id: string;
      slug: string;
      title: string;
      publishedAt: string;
      photos: BlogFeedPhoto[];
    }
  | {
      _type: "post";
      _id: string;
      slug: string;
      title: string;
      publishedAt: string;
      categories: string[];
    };

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
