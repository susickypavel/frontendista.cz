import * as React from "react";
import Link from "next/link";

import styles from "./navigation.module.scss";

import { Button } from "@components/common/button";

export const Navigation: React.FunctionComponent = () => {
  return (
    <div className={styles.navigation}>
      <nav className="bg-stone-100 rounded-lg flex-auto">
        <ul className="flex flex-row space-x-8 font-bold text-xl justify-center items-center h-full">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <aside className={styles.buttonCollection}>
        <ul>
          <li>
            <Button>Ahoj</Button>
          </li>
        </ul>
      </aside>
    </div>
  );
};
