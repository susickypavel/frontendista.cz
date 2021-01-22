import React from "react";
import { render } from "@testing-library/react";

import { PageLayout, SEO_DEFAULTS } from "./page-layout.component";
import type { PageLayoutProps } from "./page-layout.component";

jest.mock("next/head", () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return (
        <>
          {React.Children.map(children, child => {
            return React.cloneElement(child, {
              "data-testid": child.key,
            });
          })}
        </>
      );
    },
  };
});

describe("PageLayout", function () {
  function renderComponent(props?: PageLayoutProps) {
    return render(<PageLayout {...props} />, {
      container: document.head,
    });
  }

  describe("SEO", function () {
    it("should have default page title", function () {
      renderComponent();

      expect(document.title).toBe(SEO_DEFAULTS.title);
    });

    it("should have page title value from props", function () {
      const TITLE_VALUE = "Custom Title";

      renderComponent({
        title: TITLE_VALUE,
      });

      expect(document.title).toBe(TITLE_VALUE);
    });

    it("should have default meta description", function () {
      const { getByTestId } = renderComponent();

      expect(getByTestId("description")).toHaveAttribute("content", SEO_DEFAULTS.description);

      expect(getByTestId("og:description")).toHaveAttribute("content", SEO_DEFAULTS.description);
    });

    it("should have meta description from props", function () {
      const DESCRIPTION_TITLE = "Custom Description";

      const { getByTestId } = renderComponent({
        description: DESCRIPTION_TITLE,
      });

      expect(getByTestId("description")).toHaveAttribute("content", DESCRIPTION_TITLE);

      expect(getByTestId("og:description")).toHaveAttribute("content", DESCRIPTION_TITLE);
    });
  });
});
