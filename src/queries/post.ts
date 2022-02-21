import { gql } from "graphql-request";

export const GET_ALL_POSTS_QUERY = gql`
  query GET_ALL_POSTS {
    allPost {
      title
    }
  }
`;
