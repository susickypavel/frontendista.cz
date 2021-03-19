import React, { Fragment, FunctionComponent } from "react";

import type { PageLayoutProps } from "./page-layout";

export const PageLayout: FunctionComponent<PageLayoutProps> = ({
  children,
}) => {
  return <Fragment>{children}</Fragment>;
};
