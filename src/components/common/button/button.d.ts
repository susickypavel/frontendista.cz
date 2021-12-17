import type { PropsWithChildren } from "react";
import type { StarIcon } from "@heroicons/react/solid";

export type Icon = typeof StarIcon;

export type ButtonVariant = "primary";
export type ButtonSize = "small" | "base";

export interface DefaultButtonProps {
  /**
   * @default false
   */
  isDisabled?: boolean;
  /**
   * @default "primary"
   */
  variant?: ButtonVariant;
  /**
   * @default "base"
   */
  size?: ButtonSize;
  /**
   * @default {}
   */
  icons?: {
    left?: Icon;
    right?: Icon;
  };
}

export interface BaseButtonProps extends DefaultButtonProps {
  icon?: Icon;
}

export type ButtonProps = PropsWithChildren<BaseButtonProps>;
