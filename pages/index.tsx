import * as React from "react";

import type { NextPage } from "next";

import { Blob } from "../src/components/blob.component";

const Home: NextPage = () => {
  return (
    <div>
      <header>
        <Blob />
      </header>
      <style jsx>{`
        header {
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Home;
