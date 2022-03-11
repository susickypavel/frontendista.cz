import clsx from "clsx";

import type { ButtonSize } from "@components/common/button/button-common";

export interface StyleProps {
  size: ButtonSize;
  isPressed: boolean;
  isHovered: boolean;
  isFocused: boolean;
  isFocusVisible: boolean;
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
}: StyleProps) {
  return clsx(
    "inline-flex justify-center items-center bg-white text-black rounded-lg w-8 appearance-none outline-none",
    buttonSizes[size],
    {
      "bg-red-500": isSelected && !isPressed,
      "bg-slate-500": isPressed,
      "ring-2 ring-white ring-offset-2 ring-offset-current transition-shadow duration-200":
        (isFocused && isFocusVisible) || isHovered,
    },
    className,
  );
}
