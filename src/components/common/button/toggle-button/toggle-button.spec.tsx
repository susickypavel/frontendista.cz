import { fireEvent, render, screen } from "@testing-library/react";
import { useEffect, useRef } from "react";

import { ToggleButton } from "./toggle-button.component";

describe("ToggleButton", () => {
  it("should render", () => {
    render(<ToggleButton>ToggleButton</ToggleButton>);
    expect(screen.getByText("ToggleButton")).toBeInTheDocument();
  });

  it("should be pressed on click", () => {
    render(<ToggleButton>ToggleButton</ToggleButton>);

    const toggleButton = screen.getByText("ToggleButton");

    fireEvent.click(toggleButton);

    expect(toggleButton).toHaveAttribute("aria-pressed", "true");
  });

  it("should toggle", () => {
    render(<ToggleButton>ToggleButton</ToggleButton>);

    const toggleButton = screen.getByText("ToggleButton");

    fireEvent.click(toggleButton);
    fireEvent.click(toggleButton);

    expect(toggleButton).toHaveAttribute("aria-pressed", "false");
  });

  it("should not toggle when disabled", () => {
    render(<ToggleButton isDisabled>ToggleButton</ToggleButton>);

    const toggleButton = screen.getByText("ToggleButton");

    const isPressedStart = toggleButton.getAttribute("aria-pressed");

    fireEvent.click(toggleButton);

    const isPressedEnd = toggleButton.getAttribute("aria-pressed");

    expect(isPressedEnd).toBe(isPressedStart);
  });

  it("should have focus on mount", () => {
    render(<ToggleButton autoFocus>ToggleButton</ToggleButton>);

    const toggleButton = screen.getByText("ToggleButton");

    expect(toggleButton).toHaveFocus();
  });

  it("should NOT have focus on mount when disabled", () => {
    render(
      <ToggleButton autoFocus isDisabled>
        ToggleButton
      </ToggleButton>,
    );

    const toggleButton = screen.getByText("ToggleButton");

    expect(toggleButton).not.toHaveFocus();
  });

  it("should receive various props", () => {
    render(
      <ToggleButton type="submit" className="custom-class">
        ToggleButton
      </ToggleButton>,
    );

    const toggleButton = screen.getByText("ToggleButton") as HTMLButtonElement;

    expect(toggleButton.type).toBe("submit");
    expect(toggleButton).toHaveClass("custom-class");
  });

  it("should call onPress handlers on click event", () => {
    const onPress = jest.fn();
    const onPressStart = jest.fn();
    const onPressEnd = jest.fn();
    const onPressChange = jest.fn();

    render(
      <ToggleButton
        onPress={onPress}
        onPressStart={onPressStart}
        onPressEnd={onPressEnd}
        onPressChange={onPressChange}>
        ToggleButton
      </ToggleButton>,
    );

    const toggleButton = screen.getByText("ToggleButton");

    fireEvent.click(toggleButton);

    expect(onPress).toHaveBeenCalledTimes(1);
    expect(onPressStart).toHaveBeenCalledTimes(1);
    expect(onPressEnd).toHaveBeenCalledTimes(1);
    expect(onPressChange).toHaveBeenCalledTimes(2);
  });

  it("should be selected on mount when defaultSelected is passed", () => {
    render(<ToggleButton defaultSelected>ToggleButton</ToggleButton>);

    const toggleButton = screen.getByText("ToggleButton");

    expect(toggleButton).toHaveAttribute("aria-pressed", "true");
  });

  it("should call onChange handler when button is toggled", () => {
    const onChange = jest.fn();

    render(<ToggleButton onChange={onChange}>ToggleButton</ToggleButton>);

    const toggleButton = screen.getByText("ToggleButton");

    fireEvent.click(toggleButton);

    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("should call onHover handelrs when mouse pass by the element", () => {
    const onHoverStart = jest.fn();
    const onHoverEnd = jest.fn();
    const onHoverChange = jest.fn();

    render(
      <ToggleButton
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        onHoverChange={onHoverChange}>
        ToggleButton
      </ToggleButton>,
    );

    const toggleButton = screen.getByText("ToggleButton");

    fireEvent.mouseEnter(toggleButton);

    expect(onHoverStart).toHaveBeenCalledTimes(1);

    fireEvent.mouseLeave(toggleButton);

    expect(onHoverEnd).toHaveBeenCalledTimes(1);
    expect(onHoverChange).toHaveBeenCalledTimes(2);
  });

  it("should pass ref to a button element", () => {
    function Test() {
      const ref = useRef<HTMLButtonElement>(null);

      useEffect(() => {
        ref.current?.setAttribute("my-attribute", "lol");
      }, []);

      return <ToggleButton ref={ref}>ToggleButton</ToggleButton>;
    }

    render(<Test />);

    const toggleButton = screen.getByText("ToggleButton");

    expect(toggleButton).toHaveAttribute("my-attribute", "lol");
  });

  it("should pass callback ref to a button element", () => {
    function Test() {
      return (
        <ToggleButton
          ref={e => {
            e?.setAttribute("my-attribute", "lol");
          }}>
          ToggleButton
        </ToggleButton>
      );
    }

    render(<Test />);

    const toggleButton = screen.getByText("ToggleButton");

    expect(toggleButton).toHaveAttribute("my-attribute", "lol");
  });
});
