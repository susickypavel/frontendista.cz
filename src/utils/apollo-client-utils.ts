import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export function getApolloClient() {
  const client = new ApolloClient({
    uri: process.env.SANITY_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  return client;
}

export async function fetchOrThrow() {
  const client = getApolloClient();

  const { data } = await client.query({
    query: gql`
      query {
        allPost {
          slug {
            current
          }
        }
      }
    `,
  });
}
