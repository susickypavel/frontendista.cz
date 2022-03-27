// TODO: Fix HoverProps type

import type { AriaToggleButtonProps } from "@react-types/button";
// import type { HoverProps } from "@react-aria/interactions";
// import type { FocusRingProps } from "@react-aria/focus";

import type { IButtonCommonProps } from "../button-common";

export type IToggleButtonProps = AriaToggleButtonProps<"button"> &
  // HoverProps &
  // Omit<FocusRingProps, "isTextInput"> &
  IButtonCommonProps & {
    className?: IButtonCommonProps["className"] & {
      /**
       * ClassName used when the button is toggled on.
       */
      isSelected?: string;
    };
  };
