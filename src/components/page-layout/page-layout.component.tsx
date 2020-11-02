import React, { Fragment } from "react";

interface PageLayoutProps {}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};
