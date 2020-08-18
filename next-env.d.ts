/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.svg" {
  const testing: React.FunctionComponent<React.SVGAttributes<SVGElement>>;

  export default testing;
}
