import SanityClient from "@sanity/client";

export const sanityClient = SanityClient({
  projectId: "6rrtshi3",
  dataset: "production",
  useCdn: false,
});
