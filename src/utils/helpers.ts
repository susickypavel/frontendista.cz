export function formatPostDate(_date: string) {
  const date = new Date(_date);

  return date.toLocaleDateString("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function createBlogPostPathname(slug: string) {
  return `/blog/post/${slug}`;
}
