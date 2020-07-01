import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { css } from "@emotion/core";
import IndexPageBox from "../common/index-page-box.component";

const fetcher = (url: string) => fetch(url).then(r => r.json());

const SteamInfo: React.FC = () => {
  const { data, error } = useSWR("/api/steam", fetcher);

  return (
    <IndexPageBox headerText="STEAM">
      {data && data.realname}
      {error && error}
    </IndexPageBox>
  );
};

export default SteamInfo;
