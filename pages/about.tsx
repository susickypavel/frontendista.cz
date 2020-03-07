import React from "react";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/">
        <a>hello, World</a>
      </Link>
    </div>
  );
};

export default About;
