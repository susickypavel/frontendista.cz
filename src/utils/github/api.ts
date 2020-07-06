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

export const defaultQuery = `
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

export async function fetchGithubData<T>(
  query: string = defaultQuery
): Promise<{
  data: T;
}> {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${process.env.GITHUB_API_KEY}`,
    },
    body: JSON.stringify({ query }),
  });

  if (response.ok) {
    return response.json();
  }

  const { status, statusText } = response;

  throw new Error(`The request for Github Data has failed.
Status: ${status} - ${statusText}`);
}
