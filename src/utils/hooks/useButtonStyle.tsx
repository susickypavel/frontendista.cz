import clsx from "clsx";

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
    "inline-flex justify-center items-center w-8 text-black bg-white rounded-lg outline-none transition-shadow duration-200 appearance-none",
    buttonSizes[size],
    {
      "opacity-50 cursor-not-allowed": isDisabled,
      "bg-red-500": isSelected && !isPressed,
      "bg-slate-500": isPressed,
      "ring-2 ring-white ring-offset-2 ring-offset-current":
        (isFocused && isFocusVisible) || isHovered,
    },
    className,
  );
}
