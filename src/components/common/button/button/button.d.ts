import type { AriaButtonProps } from "@react-types/button";
import type { HoverProps } from "@react-aria/interactions";
import type { FocusRingProps } from "@react-aria/focus";

import type { IButtonCommonProps } from "../button-common";

export type IButtonProps = AriaButtonProps<"button"> &
  HoverProps &
  Omit<FocusRingProps, "isTextInput"> &
  IButtonCommonProps;
