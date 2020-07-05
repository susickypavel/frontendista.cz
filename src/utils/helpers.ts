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

export function fetcher<T = any>(url: string) {
  return fetch(url).then(response => response.json() as Promise<T>);
}
