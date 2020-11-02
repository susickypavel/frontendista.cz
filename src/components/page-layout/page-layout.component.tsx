import React, { Fragment } from "react";

import { pageLayoutTest } from "src/components/page-layout/page-layout.styles";

interface PageLayoutProps {}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <h1 css={pageLayoutTest}>Hello, World!</h1>
      {children}
    </Fragment>
  );
};
