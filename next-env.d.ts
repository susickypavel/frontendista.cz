/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "next-env" {
  import type { FunctionComponent, SVGAttributes } from "react";

  type IconProps = SVGAttributes<SVGElement>;
  type IconType = FunctionComponent<IconProps>;
}

declare module "*.svg" {
  import type { IconType } from "next-env";

  let Component: IconType;

  export default Component;
}
