import { GraphQLClient } from "graphql-request";

export const GRAPHQL_CLIENT = new GraphQLClient(process.env.SANITY_GRAPHQL_ENDPOINT!, {
  headers: {
    authorization: `Bearer ${process.env.SANITY_CLIENT_TOKEN}`,
  },
});
