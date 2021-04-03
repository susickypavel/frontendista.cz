import React, { Fragment, FunctionComponent } from "react";
import { NextSeo } from "next-seo";

import type { PageLayoutProps } from "./page-layout";

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
