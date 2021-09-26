import gql from "graphql-tag";

export const POST_BY_SLUG = gql`
  query PostBySlug($slug: String!) {
    allPost(where: { slug: { current: { eq: $slug } } }) {
      title
      publishedAt
      bodyRaw
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
