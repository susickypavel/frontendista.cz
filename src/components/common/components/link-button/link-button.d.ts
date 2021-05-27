import type { IconBaseProps, IconType } from "react-icons/lib";

export interface ButtonProps {
  href: string;
  className?: string;
  icon?: {
    component: IconType;
    props?: IconBaseProps;
  };
}
