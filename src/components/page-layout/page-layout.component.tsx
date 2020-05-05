import React from "react";
import { Global } from "@emotion/core";

import { fontFaces } from "./page-layout.styles";

const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <Global styles={[fontFaces]} />
      {children}
    </>
  );
};

export default PageLayout;
