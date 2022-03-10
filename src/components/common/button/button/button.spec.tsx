import { fireEvent, render } from "@testing-library/react";
import { useEffect, useRef } from "react";

import { Button } from "./button.component";

describe("Button", () => {
  it("should render", () => {
    const { getByText } = render(<Button>Button</Button>);
    expect(getByText("Button")).toBeInTheDocument();
  });

  it("should not toggle when disabled", () => {
    const { getByText } = render(<Button isDisabled>Button</Button>);

    const toggleButton = getByText("Button");

    const isPressedStart = toggleButton.getAttribute("aria-pressed");

    fireEvent.click(toggleButton);

    const isPressedEnd = toggleButton.getAttribute("aria-pressed");

    expect(isPressedEnd).toBe(isPressedStart);
  });

  it("should have focus on mount", () => {
    const { getByText } = render(<Button autoFocus>Button</Button>);

    const toggleButton = getByText("Button");

    expect(document.activeElement).toBe(toggleButton);
  });

  it("should NOT have focus on mount when disabled", () => {
    const { getByText } = render(
      <Button autoFocus isDisabled>
        Button
      </Button>,
    );

    const toggleButton = getByText("Button");

    expect(document.activeElement).not.toBe(toggleButton);
  });

  it("should receive various props", () => {
    const { getByText } = render(
      <Button type="submit" className="custom-class">
        Button
      </Button>,
    );

    const toggleButton = getByText("Button") as HTMLButtonElement;

    expect(toggleButton.type).toBe("submit");
    expect(toggleButton).toHaveClass("custom-class");
  });

  it("should call onPress handlers on click event", () => {
    const onPress = jest.fn();
    const onPressStart = jest.fn();
    const onPressEnd = jest.fn();
    const onPressChange = jest.fn();

    const { getByText } = render(
      <Button
        onPress={onPress}
        onPressStart={onPressStart}
        onPressEnd={onPressEnd}
        onPressChange={onPressChange}>
        Button
      </Button>,
    );

    const toggleButton = getByText("Button");

    fireEvent.click(toggleButton);

    expect(onPress).toHaveBeenCalledTimes(1);
    expect(onPressStart).toHaveBeenCalledTimes(1);
    expect(onPressEnd).toHaveBeenCalledTimes(1);
    expect(onPressChange).toHaveBeenCalledTimes(2);
  });

  it("should call onHover handelrs when mouse pass by the element", () => {
    const onHoverStart = jest.fn();
    const onHoverEnd = jest.fn();
    const onHoverChange = jest.fn();

    const { getByText } = render(
      <Button
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        onHoverChange={onHoverChange}>
        Button
      </Button>,
    );

    const toggleButton = getByText("Button");

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

      return <Button ref={ref}>Button</Button>;
    }

    const { getByText } = render(<Test />);

    const toggleButton = getByText("Button");

    expect(toggleButton).toHaveAttribute("my-attribute", "lol");
  });

  it("should pass callback ref to a button element", () => {
    function Test() {
      return (
        <Button
          ref={e => {
            e?.setAttribute("my-attribute", "lol");
          }}>
          Button
        </Button>
      );
    }

    const { getByText } = render(<Test />);

    const toggleButton = getByText("Button");

    expect(toggleButton).toHaveAttribute("my-attribute", "lol");
  });
});
