import { createDocumentPath, dateFormat } from "src/utils/post-utils";

describe("Post Utils", function () {
  it("should return correct path", function () {
    const path = createDocumentPath("gallery", "my-custom-slug-for-testing");

    expect(path).toBe("/gallery/my-custom-slug-for-testing");
  });

  it("should return correct date format", function () {
    const date = dateFormat("2020-01-01T14:00:00.000Z");

    expect(date).toBe("01/01/2020");
  });
});
