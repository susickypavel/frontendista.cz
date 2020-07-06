export function formatDate(_date: string) {
  const date = new Date(_date);

  return date.toLocaleDateString("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function createBlogPostHref(slug: string) {
  const href = "/blog/post/[slug]";
  const as = `/blog/post/${slug}`;

  return {
    href,
    as,
  };
}

export async function fetcher(url: string) {
  const response = await fetch(url);

  if (response.ok) {
    return response.json();
  }

  throw new Error(`Last request to '${url}' has failed.
${response.status} - ${response.statusText}`);
}
