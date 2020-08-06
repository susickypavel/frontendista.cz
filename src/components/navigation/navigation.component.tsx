import React from "react";
import Link from "next/link";

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
  border: 1px dashed #dddddd;
  background: black;

  height: 100%;
  display: flex;
  margin-left: auto;

  & a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 24px;

    width: 150px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
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
  return (
    <Link href={href}>
      <a>{name}</a>
    </Link>
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

export const SiteNavigation: React.FC = () => {
  return (
    <Navigation>
      <Link href="/">
        <a>
          <Logo src="/logo.jpg" />
        </a>
      </Link>
      <Links>
        {links.map(link => (
          <NavigationLink link={link} key={link.name} />
        ))}
      </Links>
    </Navigation>
  );
};
