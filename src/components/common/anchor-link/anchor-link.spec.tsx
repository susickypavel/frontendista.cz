import { render, screen } from "@testing-library/react";

import { AnchorLink } from "./anchor-link.component";

describe("AnchorLink", () => {
  it("should render", () => {
    render(<AnchorLink nextLinkProps={{ href: "/" }}>AnchorLink</AnchorLink>);

    const anchorLink = screen.getByText("AnchorLink");

    expect(anchorLink).toBeInTheDocument();
  });
});
