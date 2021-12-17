import * as React from "react";

import type { NextPage } from "next";

import { Button } from "@components/common/button";

import {
  CogIcon,
  SunIcon,
  PaperAirplaneIcon,
  ThumbUpIcon,
  BanIcon,
} from "@heroicons/react/solid";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-200 p-4 space-x-4 inline-block rounded-lg">
      <Button size="base" icon={SunIcon} />
      <Button size="base" icon={CogIcon} />
      <Button size="base" icon={PaperAirplaneIcon} />
      <Button size="base" icon={BanIcon} isDisabled />
      <Button size="base" icon={ThumbUpIcon} />
    </div>
  );
};

export default Home;
