import React, { useState, createElement } from "react";

import styled from "styled-components";

import { FaTimes, FaBars } from "react-icons/fa";

import { NavigationItem } from "./navigation-item.component";
import type { NavigationLinkItem } from "./navigation-item.component";

const Navigation = styled.nav<{ isVisible: boolean }>(props => {
  return {
    background: `rgba(0, 0, 0, ${props.isVisible ? "0.5" : "0"})`,
    height: "100vh",
    width: "100%",
    position: "fixed",
    right: 0,
  };
});

const Sidebar = styled.div<{ isVisible: boolean }>`
  padding-top: 96px;
  background: black;
  width: 50%;
  height: 100vh;
  margin-left: auto;
  transform: translateX(${props => (props.isVisible ? "0" : "100%")});
  transition: transform 0.25s ease-in-out;

  & ul {
    padding-right: 32px;
  }
`;

const NavigationToggle = styled.button`
  background: black;
  padding: 0;
  margin: 0;
  outline: none;

  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px dashed #dddddd;

  position: fixed;
  z-index: 100;
  right: 32px;
  top: 32px;
`;

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
