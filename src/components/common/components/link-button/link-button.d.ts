import type { IconProps, IconType } from "next-env";

export interface ButtonProps {
  href: string;
  className?: string;
  icon?: {
    component: IconType;
    props?: IconProps;
  };
}
