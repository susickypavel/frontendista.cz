import * as React from "react";
import Link from "next/link";

import styles from "./navigation.module.scss";

import { Button } from "@components/common/button";

import { CogIcon } from "@heroicons/react/solid";

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
      {/* TODO: Research accessibility of this group of buttons */}
      <aside className={styles.buttonCollection}>
        <Button icon={CogIcon} />
        <Button icon={CogIcon} />
        <Button icon={CogIcon} />
        <Button icon={CogIcon} />
        <Button icon={CogIcon} />
        <Button icon={CogIcon} />
        <Button icon={CogIcon} />
        <Button icon={CogIcon} />
      </aside>
    </div>
  );
};
