export function createCanonical(pathname: string): string {
  return `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_DOMAIN}${pathname}`;
}
