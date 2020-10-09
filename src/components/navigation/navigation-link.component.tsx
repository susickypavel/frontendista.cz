import React from "react";
import Link from "next/link";

export interface NavigationLinkItem {
  href: string;
  text: string;
}

interface NavigationLinkProps {
  link: NavigationLinkItem;
  /** Whether current path in URL corresponds with link href */
  active: boolean;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({ link, active }) => {
  const { href, text } = link;

  return (
    <li key={href}>
      <Link href={href}>
        <a aria-current={active ? "page" : undefined}>{text}</a>
      </Link>
    </li>
  );
};
