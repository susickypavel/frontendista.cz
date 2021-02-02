import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { ThemeToggle } from "src/components/theme/theme-toggle/theme-toggle.component";

describe("Theme Toggle", function () {
  it("should switch theme on click", function () {
    (global as any).__THEME__ = "light";

    const { getByLabelText } = render(<ThemeToggle />);

    const button = getByLabelText("Switch to dark theme");

    fireEvent.click(button);

    expect(button.getAttribute("aria-label")).toBe("Switch to light theme");
  });
});
