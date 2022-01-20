import * as React from "react";

import type { NextPage } from "next";

import { Button } from "@components/common/button";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-200 p-4 space-x-4 inline-block rounded-lg">
      <Button>Ahoj</Button>
    </div>
  );
};

export default Home;
