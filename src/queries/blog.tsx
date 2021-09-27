import gql from "graphql-tag";

/**
 * GraphQL queries
 */

export const POST_BY_SLUG = gql`
  query PostBySlug($slug: String!) {
    allPost(where: { slug: { current: { eq: $slug } } }) {
      title
      publishedAt
    }
  }
`;

export const ALL_POSTS = gql`
  query PostsSlugs {
    allPost {
      slug {
        current
      }
    }
  }
`;

export const ALL_POSTS_PREVIEW = gql`
  query PostsPreview {
    allPost {
      title
      publishedAt
      slug {
        current
      }
    }
  }
`;

/**
 * GROQ QUERIES
 */

export const POST_BODY = `*[_type == "post" && slug.current == $slug] {
  body[] {
    ...,
    asset-> {
      url,
      metadata {
        lqip,
        dimensions {
          width,
          height,
          aspectRatio
        }
      }
    }
  }
}[0]`;
