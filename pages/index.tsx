import React from "react";

import PageLayout from "src/components/page-layout/page-layout.component";

const IndexPage: React.FC = () => {
  return (
    <PageLayout>
      <h1>This is heading</h1>
      <p>This is REGULAR paragraph</p>
      <p>This is BLACK paragraph</p>
      <p style={{ fontStyle: "ITALIC" }}>This is ITALIC paragraph</p>
    </PageLayout>
  );
};

export default IndexPage;
