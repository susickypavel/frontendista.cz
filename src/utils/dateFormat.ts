export function dateFormat(date: string) {
  return new Date(date).toLocaleDateString("cs");
}
