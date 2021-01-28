import React, { createElement } from "react";
import classNames from "classnames";

import { slugify } from "src/utils/post-utils";

import type { ContentHeadings } from "@sanity/block-content-to-react";
import type { HeaderProps } from "./header.d";

export const headings: Record<ContentHeadings, { textStyles: string; iconStyles: string }> = {
  h1: {
    textStyles: "text-6xl",
    iconStyles: "w-12 h-12",
  },
  h2: {
    textStyles: "text-5xl",
    iconStyles: "w-10 h-10",
  },
  h3: {
    textStyles: "text-4xl",
    iconStyles: "w-8 h-8",
  },
  h4: {
    textStyles: "text-3xl",
    iconStyles: "w-6 h-6",
  },
};

export const Heading: React.FC<HeaderProps> = ({ node: { style }, children }) => {
  const id = slugify(children[0]);
  const { textStyles, iconStyles } = headings[style as ContentHeadings];

  return (
    <a href={`#${id}`} className="block mb-8">
      <svg
        className={classNames("inline-block align-middle mr-4", iconStyles)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="#000"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
        />
      </svg>
      {createElement(style, { className: classNames(textStyles, "font-bold inline-block align-middle"), id }, children)}
    </a>
  );
};
