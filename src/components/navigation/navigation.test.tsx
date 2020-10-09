import React from "react";
import { render } from "@testing-library/react";
import { Navigation } from "./navigation.component";
import { withSpecRouter } from "test/utils/withSpecRouter";
import { NavigationLink } from "./navigation-link.component";

describe("Navigation", () => {
  const renderComponent = () => {
    return render(withSpecRouter(<Navigation />));
  };

  it("should render", () => {
    const { getByRole } = renderComponent();

    expect(getByRole("navigation")).toBeDefined();
  });

  describe("Navigation Link", () => {
    it("should have a href attribute with correct value", () => {
      const { getByText } = render(
        <NavigationLink
          active={false}
          link={{
            href: "/test",
            text: "Test",
          }}
        />
      );

      const link = getByText("Test");

      expect(link).toHaveAttribute("href", "/test");
    });

    it("should NOT be active link", () => {
      const { getByText } = render(
        <NavigationLink
          active={false}
          link={{
            href: "/test",
            text: "Test",
          }}
        />
      );

      const link = getByText("Test");

      expect(link).not.toHaveAttribute("aria-current", "page");
    });

    it("should be active link", () => {
      const { getByText } = render(
        <NavigationLink
          active={true}
          link={{
            href: "/test",
            text: "Test",
          }}
        />
      );

      const link = getByText("Test");

      expect(link).toHaveAttribute("aria-current", "page");
    });
  });
});
