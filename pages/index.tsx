import React from "react";

import PageLayout from "src/components/page-layout/page-layout.component";

const IndexPage: React.FC = () => {
  return (
    <PageLayout
      aside={() => {
        return <div>Hi</div>;
      }}
    >
      Index Page
    </PageLayout>
  );
};

export default IndexPage;
