/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.svg" {
  const testing: React.FunctionComponent<React.SVGAttributes<SVGElement>>;

  export default testing;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };

  export default classes;
}
