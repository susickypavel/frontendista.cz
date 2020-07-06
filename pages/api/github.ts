import { NextApiRequest, NextApiResponse } from "next";

const defaultQuery = `
query {
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

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${process.env.GITHUB_API_KEY}`,
      },
      body: JSON.stringify({ query: defaultQuery }),
    });

    if (response.ok) {
      const { data } = await response.json();

      res.setHeader("Cache-Control", "s-maxage=84600, stale-while-revalidate");
      res.status(response.status).json(data);
    } else {
      res.status(response.status).json({
        error: `There was an unexpected error in the request.
${response.statusText}`,
      });
    }
  } catch (error) {
    res.json({
      error: `There was an unexpected error
${error}`,
    });
  }
};
