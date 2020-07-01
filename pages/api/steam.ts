import { NextApiRequest, NextApiResponse } from "next";

interface DataResponse {
  response: {
    players: SteamPlayerSummary[];
  };
}

export interface SteamPlayerSummary {
  steamid: string;
  communityvisibilitystate: number;
  profilestate: number;
  personaname: string;
  commentpermission: number;
  avatarfull: string;
  avatarhash: string;
  lastlogoff: number;
  realname: string;
  timecreated: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}&steamids=${process.env.STEAM_USER_ID}`
  );

  const data: DataResponse = await response.json();

  res.setHeader("Cache-Control", "max-age=0, s-maxage=86400");

  res.status(response.status).json(data.response.players[0]);
};
