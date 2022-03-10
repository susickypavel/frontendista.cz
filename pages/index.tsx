import * as React from "react";

import styles from "@stylesheets/pages/index.module.scss";

import type { NextPage } from "next";

import { ToggleButton } from "@components/common/button/toggle-button/toggle-button.component";
import { Button } from "@components/common/button/button/button.component";

const IndexPage: NextPage = () => {
  return (
    <div className={"bg-red-500"}>
      <Button>Button</Button>
      <ToggleButton>ToggleButton</ToggleButton>
    </div>
  );
};

export default IndexPage;
