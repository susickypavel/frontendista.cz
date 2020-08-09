import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { NextRouter } from "next/router";

import { SiteNavigation } from "src/components/navigation/navigation.component";
import { NavigationItem } from "src/components/navigation/navigation-item.component";
import type { NavigationLinkItem } from "src/components/navigation/navigation-item.component";

import { withSpecRouter } from "test/utils/withSpecRouter";

function renderNavigation() {
  const component = withSpecRouter(<SiteNavigation />);

  return render(component);
}

function renderNavigationLink(link: NavigationLinkItem, router?: Partial<NextRouter>) {
  const component = withSpecRouter(<NavigationItem link={link} />, router);

  return render(component);
}

describe("Navigation", () => {
  it("should render", () => {
    const { getByLabelText } = renderNavigation();

    expect(getByLabelText("Site navigation")).toBeDefined();
  });

  it("should be hidden when window is smaller than 768px", () => {
    global.innerWidth = 700;

    const { getByLabelText } = renderNavigation();

    const navigationToggle = getByLabelText("Site Navigation Toggle");
    const navigation = getByLabelText("Site navigation");

    expect(navigationToggle).toHaveAttribute("aria-expanded", "false");
    expect(navigation).toHaveAttribute("aria-hidden", "true");
  });

  it("should be visible when window is larger than 768px", () => {
    global.innerWidth = 1024;

    const { getByLabelText } = renderNavigation();

    const navigationToggle = getByLabelText("Site Navigation Toggle");
    const navigation = getByLabelText("Site navigation");

    expect(navigationToggle).toHaveAttribute("aria-expanded", "true");
    expect(navigation).toHaveAttribute("aria-hidden", "false");
  });

  it("should toggle the navigation when toggle is available", () => {
    global.innerWidth = 700;

    const { getByLabelText } = renderNavigation();

    const navigationToggle = getByLabelText("Site Navigation Toggle");
    const navigation = getByLabelText("Site navigation");

    fireEvent.click(navigationToggle);

    expect(navigationToggle).toHaveAttribute("aria-expanded", "true");
    expect(navigation).toHaveAttribute("aria-hidden", "false");
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
