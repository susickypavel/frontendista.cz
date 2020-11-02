import React from "react";
import { render } from "@testing-library/react";
import { PageLayout } from "./page-layout.component";

describe("PageLayout", function () {
  function renderComponent() {
    return render(<PageLayout />);
  }

  it("should be a very fancy function", function () {
    const { getByText } = renderComponent();

    expect(getByText("Hello, World")).not.toBeNull();
  });
});
