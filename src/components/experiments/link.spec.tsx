import { fireEvent, render, screen } from "@testing-library/react";

import { AnchorLink } from "./link";

describe("AnchorLink", () => {
  it("should render", () => {
    render(<AnchorLink href="/">AnchorLink</AnchorLink>);

    const anchorLink = screen.getByText("AnchorLink");

    expect(anchorLink).toBeInTheDocument();
  });

  it("should be disabled", () => {
    const onPress = jest.fn();

    render(
      <AnchorLink isDisabled onPress={onPress} href="/">
        AnchorLink
      </AnchorLink>,
    );

    const anchorLink = screen.getByText("AnchorLink");

    fireEvent.click(anchorLink);

    expect(onPress).not.toHaveBeenCalled();
    expect(anchorLink).toHaveAttribute("aria-disabled", "true");
  });

  it("should have focus on mount", () => {
    render(
      <AnchorLink href="/" autoFocus>
        AnchorLink
      </AnchorLink>,
    );

    const anchorLink = screen.getByText("AnchorLink");

    expect(anchorLink).toHaveFocus();
  });

  it("should NOT have focus on mount when disabled", () => {
    render(
      <AnchorLink href="/" autoFocus isDisabled>
        AnchorLink
      </AnchorLink>,
    );

    const anchorLink = screen.getByText("AnchorLink");

    expect(anchorLink).not.toHaveFocus();
  });

  it("should call hover handlers", () => {
    const onHoverStart = jest.fn();
    const onHoverEnd = jest.fn();
    const onHoverChange = jest.fn();

    render(
      <AnchorLink
        href="/"
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        onHoverChange={onHoverChange}>
        AnchorLink
      </AnchorLink>,
    );

    const anchorLink = screen.getByText("AnchorLink");

    fireEvent.mouseEnter(anchorLink);
    fireEvent.mouseLeave(anchorLink);

    expect(onHoverStart).toHaveBeenCalledTimes(1);
    expect(onHoverEnd).toHaveBeenCalledTimes(1);
    expect(onHoverChange).toHaveBeenCalledTimes(2);
  });

  it("should NOT call hover handlers when disabled", () => {
    const onHoverStart = jest.fn();
    const onHoverEnd = jest.fn();
    const onHoverChange = jest.fn();

    render(
      <AnchorLink
        href="/"
        isDisabled
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        onHoverChange={onHoverChange}>
        AnchorLink
      </AnchorLink>,
    );

    const anchorLink = screen.getByText("AnchorLink");

    fireEvent.mouseEnter(anchorLink);
    fireEvent.mouseLeave(anchorLink);

    expect(onHoverStart).not.toBeCalled();
    expect(onHoverEnd).not.toBeCalled();
    expect(onHoverChange).not.toBeCalled();
  });

  it("should call focus handlers", () => {
    const onFocus = jest.fn();
    const onFocusChange = jest.fn();

    render(
      <AnchorLink href="/" onFocus={onFocus} onFocusChange={onFocusChange}>
        AnchorLink
      </AnchorLink>,
    );

    const anchorLink = screen.getByText("AnchorLink");

    fireEvent.focus(anchorLink);
    fireEvent.focusOut(anchorLink);

    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onFocusChange).toHaveBeenCalledTimes(2);
  });

  it("should NOT call focus handlers when disabled", () => {
    const onFocus = jest.fn();
    const onFocusChange = jest.fn();

    render(
      <AnchorLink href="/" isDisabled onFocus={onFocus} onFocusChange={onFocusChange}>
        AnchorLink
      </AnchorLink>,
    );

    const anchorLink = screen.getByText("AnchorLink");

    fireEvent.focus(anchorLink);
    fireEvent.focusOut(anchorLink);

    expect(onFocus).not.toBeCalled();
    expect(onFocusChange).not.toBeCalled();
  });
});
