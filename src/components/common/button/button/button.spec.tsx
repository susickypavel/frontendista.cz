import { fireEvent, render } from "@testing-library/react";
import { useEffect, useRef } from "react";

import { Button } from "./button.component";

describe("Button", () => {
  it("should render", () => {
    const { getByText } = render(<Button>Button</Button>);
    expect(getByText("Button")).toBeInTheDocument();
  });

  it("should have focus on mount", () => {
    const { getByText } = render(<Button autoFocus>Button</Button>);

    const button = getByText("Button");

    expect(document.activeElement).toBe(button);
  });

  it("should NOT have focus on mount when disabled", () => {
    const { getByText } = render(
      <Button autoFocus isDisabled>
        Button
      </Button>,
    );

    const button = getByText("Button");

    expect(document.activeElement).not.toBe(button);
  });

  it("should receive various props", () => {
    const { getByText } = render(
      <Button type="submit" className="custom-class">
        Button
      </Button>,
    );

    const button = getByText("Button") as HTMLButtonElement;

    expect(button.type).toBe("submit");
    expect(button).toHaveClass("custom-class");
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

    const button = getByText("Button");

    fireEvent.click(button);

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

    const button = getByText("Button");

    fireEvent.mouseEnter(button);

    expect(onHoverStart).toHaveBeenCalledTimes(1);

    fireEvent.mouseLeave(button);

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

    const button = getByText("Button");

    expect(button).toHaveAttribute("my-attribute", "lol");
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

    const button = getByText("Button");

    expect(button).toHaveAttribute("my-attribute", "lol");
  });
});
