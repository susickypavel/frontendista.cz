import { gql } from "graphql-request";

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String) {
    allPost(where: { slug: { current: { eq: $slug } } }) {
      title
      bodyRaw
    }
  }
`;

export const GET_ALL_POST_SLUG = gql`
  query GetAllPostSlug {
    allPost {
      slug {
        current
      }
    }
  }
`;

export const GET_ALL_POST = gql`
  query GetAllPost {
    allPost {
      title
    }
  }
`;

export const GET_IMAGES_BY_ID = gql`
  query GetImagesById($ids: [ID!]) {
    allSanityImageAsset(where: { _id: { in: $ids } }) {
      _id
      url
      metadata {
        lqip
        dimensions {
          height
          width
          aspectRatio
        }
      }
    }
  }
`;
