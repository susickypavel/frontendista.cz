import React from "react";

import type { NextPage } from "next";

interface IndexProps {}

const Index: NextPage<IndexProps> = () => {
  return (
    <div>
      Hello, World
      <label htmlFor="test">Test</label>
      <input id="test" />
      <button>Hello</button>
    </div>
  );
};

export default Index;
