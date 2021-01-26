import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = SanityClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  token: process.env.SANITY_TOKEN,
  dataset: "blog",
  useCdn: false,
});

const unauthorizedSanityClient = SanityClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  dataset: "blog",
  useCdn: false,
});

const SanityURLBuilder = imageUrlBuilder(unauthorizedSanityClient);

export function sanityImageURL(reference: string) {
  return SanityURLBuilder.image(reference);
}
