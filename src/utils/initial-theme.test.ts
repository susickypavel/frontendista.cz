import { getInitialColorTheme } from "src/utils/initial-theme";

const mediaQuery = jest.fn();

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: mediaQuery,
});

describe("Initial Theme", function () {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
  });

  it("should contain theme from localStorage", function () {
    localStorage.setItem("theme", "custom");

    getInitialColorTheme();

    expect(document.documentElement.classList).toContain("custom");
  });

  it("should contain theme if matches media query value", function () {
    mediaQuery.mockReturnValueOnce({ matches: true });

    getInitialColorTheme();

    expect(document.documentElement.classList).toContain("dark");
  });

  it("should contain oposite value when media query is not matched", function () {
    mediaQuery.mockReturnValueOnce({ matches: false });

    getInitialColorTheme();

    expect(document.documentElement.classList).toContain("light");
  });
});
