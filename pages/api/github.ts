import { NextApiRequest, NextApiResponse } from "next";

export interface GithubData {
  viewer: {
    avatarUrl: string;
    createdAt: string;
    url: string;
    repository: {
      name: string;
      createdAt: string;
      updatedAt: string;
      isPrivate: boolean;
      diskUsage: number;
      primaryLanguage: {
        name: string;
        color: string;
      };
    };
  };
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const query = `query {
        viewer {
          avatarUrl
          createdAt
          url
          repository(name: "pavelsusicky.com") {
            name
            createdAt
            updatedAt
            isPrivate
            diskUsage
            primaryLanguage {
              name
              color
            }
          }
        }
      }
      `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${process.env.GITHUB_API_KEY}`,
      },
      body: JSON.stringify({ query }),
    });

    const { data } = await response.json();

    res.setHeader("Cache-Control", "s-maxage=84600, stale-while-revalidate");
    res.status(response.status).json(data);
  } catch (error) {
    res.json({
      error: "There was an unexpected error",
    });
  }
};
