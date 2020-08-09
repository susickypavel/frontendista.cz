import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styled from "@emotion/styled";

const ListItem = styled.li``;

export interface NavigationLinkItem {
  name: string;
  href: string;
}

interface Props {
  link: NavigationLinkItem;
}

export const NavigationItem: React.FC<Props> = ({ link: { name, href } }) => {
  const { asPath } = useRouter();

  const isCurrentPage = href === asPath;

  return (
    <ListItem>
      <Link href={href}>
        <a aria-current={isCurrentPage ? "page" : void 0}>{name}</a>
      </Link>
    </ListItem>
  );
};
