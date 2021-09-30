import { imageLoader } from "@utils/blog-post-utils";

describe("Blog Post Utils", () => {
  describe("imageLoader", () => {
    it("should return a string", () => {
      expect(
        typeof imageLoader({
          src: "",
        })
      ).toBe("string");
    });
  });
});
