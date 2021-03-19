import React from "react";
import Link from "next/link";

import type { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">
        <a>Go to /</a>
      </Link>
    </div>
  );
};

export default AboutPage;
