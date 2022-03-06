import SanityClient from "@sanity/client";

export const SANITY_CLIENT = new SanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET_ID,
  token: process.env.SANITY_CLIENT_TOKEN,
  useCdn: false,
});
