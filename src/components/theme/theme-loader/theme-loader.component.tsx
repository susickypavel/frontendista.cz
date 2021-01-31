import React from "react";

import type { ThemeLoaderProps } from "./theme-loader";

export const ThemeLoader: React.FC<ThemeLoaderProps> = ({ code }) => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: code,
      }}
    />
  );
};
