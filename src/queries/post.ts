import { gql } from "graphql-request";

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String) {
    allPost(where: { slug: { current: { eq: $slug } } }) {
      title
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
      slug {
        current
      }
      publishedAt
      thumbnail {
        asset {
          url
          metadata {
            lqip
            dimensions {
              width
              height
            }
          }
        }
      }
    }
  }
`;

export const GET_POST_BODY_BY_SLUG = `*[_type == "post" && slug.current == $slug] {
  body[] {
    ...,
    asset-> {
      "src": url,
      "lqip": metadata.lqip,
      "height": metadata.dimensions.height,
      "width": metadata.dimensions.width,
      "aspectRatio": metadata.dimensions.aspectRatio 
    }
  }
}[0]`;
