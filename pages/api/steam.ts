import { NextApiRequest, NextApiResponse } from "next";

interface DataResponse {
  response: {
    players: Array<{
      steamid: string;
    }>;
  };
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}&steamids=${process.env.STEAM_USER_ID}`,
    {
      cache: "default",
    }
  );

  const data: DataResponse = await response.json();

  res.setHeader("Cache-Control", "max-age=0, s-maxage=86400");

  res.status(response.status).json(data.response.players[0]);
};
