import * as React from "react";

import { AnchorLink } from "@components/common/anchor-link/anchor-link.component";

export const Navigation: React.FunctionComponent = () => {
  return (
    <nav className="flex items-center justify-center grow bg-black p-4 rounded-lg text-white font-bold text-lg">
      <ul className="flex gap-8">
        <li>
          <AnchorLink
            nextLinkProps={{
              href: "/",
            }}>
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            nextLinkProps={{
              href: "/about",
            }}>
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            nextLinkProps={{
              href: "/blog",
            }}>
            Blog
          </AnchorLink>
        </li>
      </ul>
    </nav>
  );
};
