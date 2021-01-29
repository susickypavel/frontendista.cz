import React from "react";
import classNames from "classnames";
import NextLink from "next/link";

import type { LinkProps } from "./link";

export const Link: React.FC<LinkProps> = ({ children, mark }) => {
  const isExternalLink = mark.href.startsWith("http");

  const props = {
    href: mark.href,
    className: classNames("underline", {
      "text-blue-500 hover:text-blue-600": isExternalLink,
      "text-yellow-500 hover:text-yellow-600": !isExternalLink,
    }),
  };

  if (isExternalLink) {
    return (
      <a {...props}>
        {children}
        <svg
          className="inline-block align-bottom ml-0.5 w-7 h-7 sm:w-6 sm:h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
        </svg>
      </a>
    );
  }

  return (
    <NextLink href={props.href}>
      <a className={props.className}>{children}</a>
    </NextLink>
  );
};
