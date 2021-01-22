import SanityClient from "@sanity/client";

export const sanityClient = SanityClient({
  projectId: process.env.PROJECT_ID as string,
  token: process.env.SANITY_TOKEN,
  dataset: "blog",
});
