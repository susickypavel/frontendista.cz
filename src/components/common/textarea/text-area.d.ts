import type { ILabelProps } from "../label";

export interface ITextAreaProps extends Omit<ILabelProps, "required" | "children"> {
  /**
   * Placeholder value for the textarea
   */
  placeholder?: string;
  /**
   * @default {}
   */
  domProps?: React.InputHTMLAttributes<HTMLTextAreaElement>;
}
