import * as React from "react";
import { Button } from "@adobe/react-spectrum";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main>
      <Button variant="cta">Hello, World!</Button>
    </main>
  );
};

export default Home;
