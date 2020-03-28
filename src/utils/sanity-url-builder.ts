import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { sanityClient } from "./sanity-client";

const builder = imageUrlBuilder(sanityClient as any);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
