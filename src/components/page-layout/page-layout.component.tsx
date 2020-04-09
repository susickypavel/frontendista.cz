import React from "react";

import { CSSReset, GlobalStyles } from "./page-layout.styles";

const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <CSSReset />
      {children}
    </>
  );
};

export default PageLayout;
