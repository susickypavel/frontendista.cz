import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styled from "styled-components";

const ListItem = styled.li`
  text-align: right;
  height: 32px;
  margin-bottom: 16px;

  &:first-of-type {
    margin-top: 16px;
  }

  & a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    height: 100%;
    width: 100%;
    display: inline-block;
  }
`;

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
