export function formatPostDate(_date: string) {
  const date = new Date(_date);

  return date.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
