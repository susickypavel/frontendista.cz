import type { IconType } from "react-icons";

export type ButtonSize = "small" | "normal" | "large";

export interface IButtonCommonProps {
  /**
   * @default "normal"
   */
  size?: ButtonSize;
  /**
   * ClassNames to be applied to a button element.
   *
   * @default {}
   */
  className?: {
    /**
     * ClassName used for default styling
     */
    root?: string;
    /**
     * ClassName used when the button is focused via keyboard or hovered.
     */
    isHoveredOrFocused?: string;
    /**
     * ClassName used when the button is being pressed.
     */
    isPressed?: string;
    /**
     * ClassNames used for overriding the default styles.
     */
    override?: string;
    /**
     * ClassName used when button is disabled
     */
    isDisabled?: string;
  };
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
