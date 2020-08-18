import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export interface NavigationLinkItem {
  name: string;
  href: string;
}

export interface NavigationItemProps {
  link: NavigationLinkItem;
  isVisible: boolean;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  link: { name, href },
  isVisible,
}) => {
  const { asPath } = useRouter();

  const isCurrentPage = href === asPath;

  return (
    <li>
      <Link href={href}>
        <a aria-current={isCurrentPage ? "page" : void 0} tabIndex={isVisible ? void 0 : -1}>
          {name}
        </a>
      </Link>
    </li>
  );
};
