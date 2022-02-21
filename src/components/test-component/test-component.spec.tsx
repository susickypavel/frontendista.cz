import * as React from "react";
import { render } from "@testing-library/react";

import { TestComponent } from "./test-component";

describe("Test Component", () => {
  it("should render", () => {
    const { getByText } = render(<TestComponent />);
    expect(getByText("TestComponent")).toBeInTheDocument();
  });
});
