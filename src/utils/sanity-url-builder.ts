import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export function urlFor(source: SanityImageSource) {
  const builder = imageUrlBuilder()
    .dataset("production")
    .projectId("6rrtshi3")
    .image(source);

  return builder.image(source);
}
