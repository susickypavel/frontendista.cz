import { fireEvent, render } from "@testing-library/react";

import { ToggleButton } from "./toggle-button.component";

describe("ToggleButton", () => {
  it("should render", () => {
    const { getByText } = render(<ToggleButton>ToggleButton</ToggleButton>);
    expect(getByText("ToggleButton")).toBeInTheDocument();
  });

  it("should be pressed on click", () => {
    const { getByText } = render(<ToggleButton>ToggleButton</ToggleButton>);

    const toggleButton = getByText("ToggleButton");

    fireEvent.click(toggleButton);

    expect(toggleButton).toHaveAttribute("aria-pressed", "true");
  });

  it("should toggle", () => {
    const { getByText } = render(<ToggleButton>ToggleButton</ToggleButton>);

    const toggleButton = getByText("ToggleButton");

    fireEvent.click(toggleButton);
    fireEvent.click(toggleButton);

    expect(toggleButton).toHaveAttribute("aria-pressed", "false");
  });

  it("should not toggle when disabled", () => {
    const { getByText } = render(<ToggleButton isDisabled>ToggleButton</ToggleButton>);

    const toggleButton = getByText("ToggleButton");

    const isPressedStart = toggleButton.getAttribute("aria-pressed");

    fireEvent.click(toggleButton);

    const isPressedEnd = toggleButton.getAttribute("aria-pressed");

    expect(isPressedEnd).toBe(isPressedStart);
  });

  it("should have focus on mount", () => {
    const { getByText } = render(<ToggleButton autoFocus>ToggleButton</ToggleButton>);

    const toggleButton = getByText("ToggleButton");

    expect(document.activeElement).toBe(toggleButton);
  });

  it("should NOT have focus on mount when disabled", () => {
    const { getByText } = render(
      <ToggleButton autoFocus isDisabled>
        ToggleButton
      </ToggleButton>,
    );

    const toggleButton = getByText("ToggleButton");

    expect(document.activeElement).not.toBe(toggleButton);
  });

  it("should receive various props", () => {
    const { getByText } = render(
      <ToggleButton type="submit" className="custom-class">
        ToggleButton
      </ToggleButton>,
    );

    const toggleButton = getByText("ToggleButton") as HTMLButtonElement;

    expect(toggleButton.type).toBe("submit");
    expect(toggleButton).toHaveClass("custom-class");
  });

  it("should call onPress handlers on click event", () => {
    const onPress = jest.fn();
    const onPressStart = jest.fn();
    const onPressEnd = jest.fn();
    const onPressChange = jest.fn();

    const { getByText } = render(
      <ToggleButton
        onPress={onPress}
        onPressStart={onPressStart}
        onPressEnd={onPressEnd}
        onPressChange={onPressChange}>
        ToggleButton
      </ToggleButton>,
    );

    const toggleButton = getByText("ToggleButton");

    fireEvent.click(toggleButton);

    expect(onPress).toHaveBeenCalledTimes(1);
    expect(onPressStart).toHaveBeenCalledTimes(1);
    expect(onPressEnd).toHaveBeenCalledTimes(1);
    expect(onPressChange).toHaveBeenCalledTimes(2);
  });

  it("should be selected on mount when defaultSelected is passed", () => {
    const { getByText } = render(
      <ToggleButton defaultSelected>ToggleButton</ToggleButton>,
    );

    const toggleButton = getByText("ToggleButton");

    expect(toggleButton).toHaveAttribute("aria-pressed", "true");
  });

  it("should call onChange handler when button is toggled", () => {
    const onChange = jest.fn();

    const { getByText } = render(
      <ToggleButton onChange={onChange}>ToggleButton</ToggleButton>,
    );

    const toggleButton = getByText("ToggleButton");

    fireEvent.click(toggleButton);

    expect(onChange).toHaveBeenCalledWith(true);
  });
});
