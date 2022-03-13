import { fireEvent, render, screen } from "@testing-library/react";

import { AnchorLink } from "./anchor-link.component";

describe("AnchorLink", () => {
  it("should render", () => {
    render(<AnchorLink nextLinkProps={{ href: "/" }}>AnchorLink</AnchorLink>);

    const anchorLink = screen.getByText("AnchorLink");

    expect(anchorLink).toBeInTheDocument();
  });

  it("should be disabled", () => {
    const onPress = jest.fn();

    render(
      <AnchorLink isDisabled onPress={onPress} nextLinkProps={{ href: "/" }}>
        AnchorLink
      </AnchorLink>,
    );

    const anchorLink = screen.getByText("AnchorLink");

    fireEvent.click(anchorLink);

    expect(onPress).not.toHaveBeenCalled();
    expect(anchorLink).toHaveAttribute("aria-disabled", "true");
  });
});
