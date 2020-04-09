export function srcsetGenerator(
  filename: string,
  extension: string,
  set: string[] = ["200", "421", "580", "800"]
) {
  return set.map(w => `/${filename}/w${w}.${extension} ${w}w`).join(",");
}
