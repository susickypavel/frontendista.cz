import React, { Fragment, FunctionComponent } from "react";

import type { PageLayoutProps } from "./page-layout";
import { NextSeo } from "next-seo";

export const PageLayout: FunctionComponent<PageLayoutProps> = ({
  children,
  title,
}) => {
  return (
    <Fragment>
      <NextSeo title={title} />
      {children}
    </Fragment>
  );
};
