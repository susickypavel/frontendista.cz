import React from "react";

import { TextDescription, DescriptionHolder } from "./description.styles";

const Description: React.FC = () => {
  return (
    <DescriptionHolder>
      <TextDescription>
        <span>FRONTEND DEVELOPER</span>
        <span>FROM CZECH REPUBLIC</span>
      </TextDescription>
    </DescriptionHolder>
  );
};

export default Description;
