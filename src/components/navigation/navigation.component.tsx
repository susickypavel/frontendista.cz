import * as React from "react";

import { AnchorLink } from "@components/common/anchor-link/anchor-link.component";

export const Navigation: React.FunctionComponent = () => {
  return (
    <nav className="flex grow justify-center items-center p-4 text-lg font-bold text-white bg-black rounded-lg md:fixed md:bottom-0 md:w-full md:rounded-none">
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
