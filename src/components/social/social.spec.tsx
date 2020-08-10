import React from "react";
import { render } from "@testing-library/react";
import { FaTwitter } from "react-icons/fa";

import { Social } from "./social.component";
import type { SocialProps } from "./social.component";

function renderSocial(props: Partial<SocialProps> = {}) {
  const component = <Social {...props} />;

  return render(component);
}

describe("Social", () => {
  it("should render", () => {
    const { queryByTitle } = renderSocial({
      links: [
        {
          name: "Twitter",
          href: "https://twitter.com",
          color: "blue",
          icon: FaTwitter,
        },
      ],
    });

    expect(queryByTitle("Twitter")).not.toBeNull();
  });
});
