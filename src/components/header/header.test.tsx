import React from "react";
import { render } from "@testing-library/react";

import { Heading, headings } from "src/components/header/header.component";

import type { HeaderProps } from "src/components/header/header.d";
import { ContentHeadings } from "@sanity/block-content-to-react";

describe("Header Component", function () {
  it("should have slugified title as id", function () {
    const props: HeaderProps = {
      node: {
        style: "h1",
      },
      children: ["This is my testing title"],
    };

    const { getByText } = render(<Heading {...props} />);

    expect(getByText(props.children[0]).id).toBe("this-is-my-testing-title");
  });

  it("should have link pointing to header id", function () {
    const props: HeaderProps = {
      node: {
        style: "h1",
      },
      children: ["This is my testing title"],
    };

    const { container } = render(<Heading {...props} />);

    expect(container.querySelector("a")?.href).toBe("http://localhost/#this-is-my-testing-title");
  });

  it("should have correct styles applied using header level", function () {
    const props: HeaderProps = {
      node: {
        style: "h2",
      },
      children: ["This is my testing title"],
    };

    const { getByText } = render(<Heading {...props} />);

    const header = getByText(props.children[0]);

    expect(header.classList).toContain(headings[props.node.style as ContentHeadings].textStyles);
  });
});
