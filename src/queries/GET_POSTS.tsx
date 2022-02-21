import { gql } from "graphql-request";

export const GET_POSTS = gql`
  query GET_POSTS {
    allPost {
      title
    }
  }
`;
