import type { IconType } from "react-icons";

export type ButtonSize = "small" | "normal" | "large";

export interface IButtonCommonProps {
  /**
   * @default "normal"
   */
  size?: ButtonSize;
  /**
   * Class to be applied to a button element.
   */
  className?: string;
  /**
   * Icon to be rendered instead of a children.
   */
  icon?: IconType;
  /**
   * Icons to be rendered alongside the children.
   * Either from left or right side.
   */
  icons?: {
    left?: IconType;
    right?: IconType;
  };
}
