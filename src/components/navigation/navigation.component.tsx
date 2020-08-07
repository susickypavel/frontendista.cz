import React from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  height: 75px;
  max-width: 1536px;

  padding: 64px;
  margin-left: auto;
`;

const Logo = styled.img`
  border: 1px dashed #dddddd;
`;

const Links = styled.div`
  background: black;
  margin-left: auto;

  & ul {
    display: flex;
    height: 100%;
    border: 1px dashed #dddddd;
  }

  & li {
    width: 150px;
    height: 100%;

    & a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: white;
      text-decoration: none;
      font-weight: bold;
      font-size: 24px;
    }
  }
`;

interface NavigationLinkItem {
  name: string;
  href: string;
}

interface LinkProps {
  link: NavigationLinkItem;
}

const NavigationLink: React.FC<LinkProps> = ({ link: { name, href } }) => {
  const { asPath } = useRouter();

  const isCurrentPage = href === asPath;

  return (
    <li>
      <Link href={href}>
        <a aria-current={isCurrentPage ? "page" : void 0}>{name}</a>
      </Link>
    </li>
  );
};

const links: NavigationLinkItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

// TODO: focus states
// TODO: Hamburger menu
export const SiteNavigation: React.FC = () => {
  return (
    <Navigation aria-label="Site navigation">
      <Link href="/">
        <a>
          <Logo src="/logo.jpg" />
        </a>
      </Link>
      <Links>
        <ul>
          {links.map(link => (
            <NavigationLink link={link} key={link.name} />
          ))}
        </ul>
      </Links>
    </Navigation>
  );
};
