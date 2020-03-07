import React from "react";
import { render } from "@testing-library/react";

import Navigation from "./navigation.component";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

function mockRouter(pathname: string) {
  useRouter.mockImplementationOnce(() => ({
    pathname,
  }));
}

describe("Navigation", () => {
  it("should render link ", () => {
    mockRouter("/");

    render(<Navigation />);
  });
});
