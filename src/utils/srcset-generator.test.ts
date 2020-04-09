import { srcsetGenerator } from "./srcset-generator";

describe("Srcset generator", () => {
  it("should return correct srcset", () => {
    expect(srcsetGenerator("logo", "jpg", ["400", "800"])).toBe(
      "/logo/w400.jpg 400w,/logo/w800.jpg 800w"
    );
  });
});
