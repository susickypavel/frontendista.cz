import { ApolloClient, InMemoryCache } from "@apollo/client";

import type { DocumentNode } from "graphql";

function getApolloClient() {
  const client = new ApolloClient({
    uri: process.env.SANITY_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${process.env.SANITY_CLIENT_TOKEN}`,
    },
  });

  return client;
}

export async function fetchOrThrow<Q, V = {}>(
  query: DocumentNode,
  variables?: V,
  client = getApolloClient()
) {
  const { data, error, errors } = await client.query<Q, V>({
    query,
    variables,
    fetchPolicy: "network-only",
  });

  if (error || errors) {
    throw error || errors;
  }

  return data;
}
