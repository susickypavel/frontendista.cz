import type { FieldError } from "react-hook-form";

export interface ILabelProps {
  /**
   * The label for the input.
   */
  label: string;
  /**
   * Form errors associated with the input
   */
  errors?: FieldError;
  /**
   * @default false
   */
  required?: boolean;
  /**
   * Children render prop
   */
  children: (props: { focusProps: React.HTMLAttributes<HTMLElement> }) => JSX.Element;
  /**
   * classNames to be applied to the label
   */
  classNames?: {
    override?: string;
  };
  headerWidget?: any;
}
