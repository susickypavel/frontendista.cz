import SanityClient from "@sanity/client";

export const sanityClient = SanityClient({
  projectId: "6rrtshi3",
  dataset: "production",
  useCdn: false,
});

export async function fetchSanity<T = any, R = { [key: string]: string }>(
  query: string,
  variables?: R
) {
  const data = await sanityClient.fetch<T>(query, variables ?? {});

  return data;
}
