import * as React from "react";
import { NextSeo } from "next-seo";

interface LayoutProps {
  title?: string;
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  title = "Pavel Susicky",
}) => {
  return (
    <React.Fragment>
      <NextSeo
        title={title}
        openGraph={{
          title,
        }}
      />
      {children}
    </React.Fragment>
  );
};
