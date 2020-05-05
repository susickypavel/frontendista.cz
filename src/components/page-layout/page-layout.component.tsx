import React from "react";
import { Global } from "@emotion/core";

import { fontFaces, globalStyles, cssReset } from "./page-layout.styles";
import { PageTransitionWrapper } from "../page-transition.component";

const PageLayout: React.FC = ({ children }) => {
  return (
    <PageTransitionWrapper>
      <Global styles={[fontFaces, globalStyles, cssReset]} />
      {children}
    </PageTransitionWrapper>
  );
};

export default PageLayout;
