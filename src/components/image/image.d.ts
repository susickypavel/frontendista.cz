export interface ImageProps {
  node: {
    asset: {
      /**
       * Reference ID of the image
       * Used for fetching full URL adress of image location on Sanity CDN
       */
      _id: string;
      /**
       * Low Quality Image Placeholder
       * Base64 encoded small resolution image, should be served as a loading placeholder
       */
      lqip: string;
    };
  };
}
