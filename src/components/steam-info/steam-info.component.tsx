import React from "react";
import useSWR from "swr";
import { css } from "@emotion/core";

import IndexPageBox from "../common/index-page-box.component";

import { SteamPlayerSummary } from "pages/api/steam";

const fetcher = (url: string) => fetch(url).then(r => r.json());

const SteamInfo: React.FC = () => {
  const { data, error } = useSWR<SteamPlayerSummary>("/api/steam", fetcher);

  return (
    <IndexPageBox headerText="STEAM">
      {data && (
        <>
          <h3>{data.personaname}</h3>
          <img src={data.avatarfull} alt="Steam avatar" />
        </>
      )}
      {error && error}
    </IndexPageBox>
  );
};

export default SteamInfo;
