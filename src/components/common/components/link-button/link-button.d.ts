import type { IconProps, IconType } from "next-env";

export interface ButtonProps {
  href: string;
  variant?: "cta" | "primary" | "secondary";
  className?: string;
  icon?: {
    component: IconType;
    props?: IconProps;
  };
}
