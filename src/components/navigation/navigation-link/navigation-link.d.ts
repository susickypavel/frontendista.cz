export interface NavigationLinkProps extends Omit<NavigationLinkItem, "text"> {
  href: string;
}

export interface NavigationLinkItem {
  text: string;
  icon: JSX.Element;
  href: string;
}
