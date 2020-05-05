import React from "react";
import { Global } from "@emotion/core";

import { fontFaces, globalStyles } from "./page-layout.styles";

const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <Global styles={[fontFaces, globalStyles]} />
      {children}
    </>
  );
};

export default PageLayout;
