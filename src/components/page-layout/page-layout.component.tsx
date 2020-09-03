import React, { Fragment, ReactElement } from "react";
import { NextSeo } from "next-seo";

import styled from "@emotion/styled";
interface Props {
  title?: string;
  aside?: () => ReactElement;
}

const PageDivider = styled.svg`
  width: 100%;
  height: auto;
  position: absolute;
  z-index: -1;
`;

const PageLayout: React.FC<Props> = ({ children, title = "Pavel Susicky" }) => {
  return (
    <Fragment>
      <PageDivider
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="560.268"
        viewBox="0 0 508 148.238"
        fill="#404040"
      >
        <path d="M136.055 125.493c24.553-4.568 48.328-12.755 72.813-17.72 34.878-7.078 71.2-7.506 106.023-.165 33.843 7.116 68.932 24.473 102.372 33.29 29.654 7.823 62.03 11.045 90.736 1.27V101.6H0v11.578a254.09 254.09 0 0 0 136.055 12.315z" />
        <path d="M0 0h508v102.072H0z" />
      </PageDivider>
      <NextSeo
        title={title}
        description="Pavel Susicky is a Frontend Developer from Czech republic"
      />
      {children}
    </Fragment>
  );
};

export default PageLayout;
