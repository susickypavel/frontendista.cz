import React, { Fragment } from "react";
import { NextSeo } from "next-seo";

interface Props {
  title?: string;
}

const PageLayout: React.FC<Props> = ({ children, title = "Pavel Susicky" }) => {
  return (
    <Fragment>
      <NextSeo
        title={title}
        description="Pavel Susicky is a Frontend Developer from Czech republic"
      />
      {children}
    </Fragment>
  );
};

export default PageLayout;
