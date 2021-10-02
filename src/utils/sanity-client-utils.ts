import SanityClient from "@sanity/client";

function getSanityClient() {
  const sanityClient = SanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET_ID ?? "development",
    token: process.env.SANITY_CLIENT_TOKEN,
    apiVersion: "2021-09-12",
    useCdn: false,
  });

  return sanityClient;
}

export async function fetchOrThrow<T = Array<any>, V = Record<string, string>>(
  query: string,
  variables?: V
): Promise<T> {
  const client = getSanityClient();

  const result = await client.fetch<T>(query, variables ?? {});

  if (!result || (Array.isArray(result) && result.length === 0)) {
    throw new Error(`[SANITY][NOCDN]: Result wasn't defined or empty.`);
  }

  return result;
}
