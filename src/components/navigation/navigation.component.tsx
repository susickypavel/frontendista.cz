import React, { useState, createElement } from "react";

import styled from "@emotion/styled";

import { FaTimes, FaBars } from "react-icons/fa";

import { NavigationItem } from "./navigation-item.component";
import type { NavigationLinkItem } from "./navigation-item.component";

const Navigation = styled.nav<{ isVisible: boolean }>``;

const Sidebar = styled.div<{ isVisible: boolean }>``;

const NavigationToggle = styled.button``;

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
  const [isVisible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(prev => !prev);
  };

  return (
    <>
      <NavigationToggle
        aria-label="Site Navigation Toggle"
        aria-expanded={isVisible}
        onClick={toggleVisibility}
      >
        {createElement(isVisible ? FaTimes : FaBars, {
          size: 16,
          color: "white",
        })}
      </NavigationToggle>
      <Navigation isVisible={isVisible} aria-hidden={!isVisible} aria-label="Site navigation">
        <Sidebar isVisible={isVisible}>
          <ul>
            {links.map(link => (
              <NavigationItem link={link} key={link.name} />
            ))}
          </ul>
        </Sidebar>
      </Navigation>
    </>
  );
};
