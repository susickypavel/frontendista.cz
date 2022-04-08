import { useFocusRing, useHover, useButton } from "react-aria";

import type { PropsWithChildren, ButtonHTMLAttributes } from "react";

export type ButtonSize = "sm" | "md" | "lg";

export type IButtonProps = PropsWithChildren<{
  icon?: IconType;
  /**
   * @default {}
   */
  icons?: {
    left?: IconType;
    right?: IconType;
  };
  /**
   * @default false
   */
  isDisabled?: boolean;
  /**
   * @default {}
   */
  ariaFocusProps?: Parameters<typeof useFocusRing>[0];
  /**
   * @default {}
   */
  ariaHoverProps?: Parameters<typeof useHover>[0];
  /**
   * @default {}
   */
  ariaButtonProps?: Parameters<typeof useButton>[0];
  /**
   * @default "md"
   */
  size?: ButtonSize;
  /**
   * @default {}
   */
  classNames?: {
    isDisabled?: string;
    isHovered?: string;
    isFocused?: string;
    isPressed?: string;
    override?: string;
  };
  /**
   * @default false
   */
  isLoading?: boolean;
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;
