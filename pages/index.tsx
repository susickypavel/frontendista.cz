import React from "react";
import Link from "next/link";

import type { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <div>
      <h1>Index Page</h1>
      <Link href="/about">
        <a>Go to /about</a>
      </Link>
    </div>
  );
};

export default IndexPage;
