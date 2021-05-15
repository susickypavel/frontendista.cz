import React, { createElement, Fragment, FunctionComponent } from "react";
import { NextSeo } from "next-seo";

import type { PageLayoutProps } from "./page-layout";

export const PageLayout: FunctionComponent<PageLayoutProps> = ({
  children,
  title,
  wrapper,
}) => {
  const content = (
    <Fragment>
      <NextSeo title={title} />
      {children}
    </Fragment>
  );

  if (wrapper) {
    return createElement(wrapper, {
      children: content,
    });
  }

  return content;
};
