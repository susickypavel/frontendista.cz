// TODO: Research better solution then type union.
export type BlogFeed =
  | {
      _type: "gallery";
      _id: string;
      title: string;
      photos: BlogFeedPhoto[];
    }
  | {
      _type: "post";
      _id: string;
      title: string;
    };

export interface BlogFeedPhoto {
  _key: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
    /** This propery comes from pages/index.tsx - getStaticProps */
    url: string;
  };
}
