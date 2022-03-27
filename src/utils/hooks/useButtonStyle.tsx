import clsx from "clsx";

import type { IButtonCommonProps } from "@components/common/button/button-common";

export interface StyleProps {
  isPressed: boolean;
  isHovered: boolean;
  isFocused: boolean;
  isFocusVisible: boolean;
  isDisabled?: boolean;
  className: NonNullable<IButtonCommonProps["className"]>;
}

export function useButtonStyle({
  isPressed,
  isHovered,
  isFocused,
  isFocusVisible,
  className,
  isDisabled,
}: StyleProps) {
  return clsx(
    className.root,
    {
      [className.isDisabled || ""]: isDisabled,
      [className.isPressed || ""]: isPressed,
      [className.isHoveredOrFocused || ""]: (isFocused && isFocusVisible) || isHovered,
    },
    className.override,
  );
}
