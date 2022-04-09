import type { ILabelProps } from "../label";

export interface IInputProps extends Omit<ILabelProps, "required" | "children"> {
  /**
   * Placeholder value for the input
   */
  placeholder?: string;
  /**
   * @default {}
   */
  domProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
