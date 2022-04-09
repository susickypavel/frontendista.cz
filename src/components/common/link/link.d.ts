// TODO: Add proper typing
type AriaLinkOptions = any;
type HoverProps = any;
type FocusRingProps = any;

export interface IAnchorLinkProps
  extends Omit<AriaLinkOptions, "elementType">,
    HoverProps,
    Omit<FocusRingProps, "isTextInput"> {
  href: string;
  children?: React.ReactNode;
  /**
   * @default {}
   */
  classNames?: {
    base?: string;
    isHovered?: string;
    isPressed?: string;
    isFocused?: string;
    isDisabled?: string;
    isFocusedOrHovered?: string;
  };
}

export interface ILinkProps extends Partial<IAnchorLinkProps> {
  onClick?: any;
  onMouseEnter?: any;
}
