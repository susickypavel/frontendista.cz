import { useHover, useLink, useFocusRing } from "react-aria";

import type { LinkProps } from "next/link";
import type { IButtonCommonProps } from "../button/button-common";

// NOTE: This is really awkard. However it doesn't seems like the react aria have a single package that exports all types.
// TODO: Find a better way to do this.
type HoverProps = Parameters<typeof useHover>[0];
type AriaLinkOptions = NonNullable<Parameters<typeof useLink>[0]>;
type FocusRingProps = NonNullable<Parameters<typeof useFocusRing>[0]>;

export interface IAnchorLinkProps
  extends FocusRingProps,
    HoverProps,
    AriaLinkOptions,
    Pick<IButtonCommonProps, "icon" | "icons"> {
  /**
   * @default {}
   */
  className?: {
    /**
     * ClassName used for default styling
     */
    root?: string;
    /**
     * ClassName used when the link is focused via keyboard or hovered.
     */
    isHoveredOrFocused?: string;
    /**
     * ClassName used when the link is being pressed.
     */
    isPressed?: string;
    /**
     * ClassNames used for overriding the default styles.
     */
    override?: string;
    /**
     * ClassName used when link is disabled
     */
    isDisabled?: string;
  };
  nextLinkProps: Omit<LinkProps, "passHref">;
}
