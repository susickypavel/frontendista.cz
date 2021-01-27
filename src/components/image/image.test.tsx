import { imageLoader } from "src/components/image/image.component";

describe("Image Component", function () {
  it("should return correct url", function () {
    const referenceId = "Tb9Ew8CXIwaY6R1kjMvI0uRR";
    const imageDimensions = "2000x3000";
    const extension = "jpg";

    const imageReference = `image-${referenceId}-${imageDimensions}-${extension}`;
    const width = 640;

    const url = imageLoader({ src: imageReference, width });

    expect(url).toBe(
      `https://cdn.sanity.io/images/test-sanity-project-id/blog/${referenceId}-${imageDimensions}.${extension}?w=${width}&auto=format`,
    );
  });
});
