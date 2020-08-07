import React from "react";
import { render } from "@testing-library/react";

import { NextRouter } from "next/router";

import { SiteNavigation, NavigationLink } from "src/components/navigation/navigation.component";
import type { NavigationLinkItem } from "src/components/navigation/navigation.component";

import { withSpecRouter } from "test/utils/withSpecRouter";

function renderNavigation() {
  const component = withSpecRouter(<SiteNavigation />);

  return render(component);
}

function renderNavigationLink(link: NavigationLinkItem, router?: Partial<NextRouter>) {
  const component = withSpecRouter(<NavigationLink link={link} />, router);

  return render(component);
}

describe("Navigation", () => {
  it("should render", () => {
    const { getByLabelText } = renderNavigation();

    expect(getByLabelText("Site navigation")).toBeDefined();
  });

  describe("Navigation Link", () => {
    it("should render", () => {
      const props: NavigationLinkItem = {
        name: "Test Link",
        href: "/test/5",
      };

      const { getByText } = renderNavigationLink(props);

      expect(getByText(props.name)).toBeDefined();
    });

    it("should have an aria-current attribute when active it is active link", () => {
      const props: NavigationLinkItem = {
        name: "Test Link",
        href: "/testing",
      };

      const { getByText } = renderNavigationLink(props, {
        asPath: props.href,
      });

      expect(getByText(props.name)).toHaveAttribute("aria-current", "page");
    });

    it("should NOT have an aria-current attribute when it is not active link", () => {
      const props: NavigationLinkItem = {
        name: "Test Link",
        href: "/testing",
      };

      const { getByText } = renderNavigationLink(props, {
        asPath: "/random",
      });

      expect(getByText(props.name)).not.toHaveAttribute("aria-current", "page");
    });
  });
});
