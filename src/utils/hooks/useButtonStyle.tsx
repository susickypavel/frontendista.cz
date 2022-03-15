import clsx from "clsx";

import styles from "@components/common/button/button-common.module.scss";

import type { ButtonSize } from "@components/common/button/button-common";

export interface StyleProps {
  size: ButtonSize;
  isPressed: boolean;
  isHovered: boolean;
  isFocused: boolean;
  isFocusVisible: boolean;
  isDisabled?: boolean;
  className?: string;
  isSelected?: boolean;
}

const buttonSizes: Record<ButtonSize, string> = {
  small: "",
  normal: "",
  large: "",
};

export function useButtonStyle({
  isPressed,
  isHovered,
  isFocused,
  isFocusVisible,
  className,
  isSelected,
  size,
  isDisabled,
}: StyleProps) {
  return clsx(
    styles.button,
    buttonSizes[size],
    {
      [styles.isDisabled]: isDisabled,
      [styles.isSelected]: isSelected && !isPressed,
      [styles.isPressed]: isPressed,
      [styles.isHoveredOrFocused]: (isFocused && isFocusVisible) || isHovered,
    },
    className,
  );
}
