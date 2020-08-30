import React, { Fragment, ReactElement } from "react";
import { NextSeo } from "next-seo";

import styled from "@emotion/styled";
interface Props {
  title?: string;
  aside?: () => ReactElement;
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
