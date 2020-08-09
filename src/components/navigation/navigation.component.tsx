import React, { useState, createElement, useEffect } from "react";

import styled from "@emotion/styled";

import { FaTimes, FaBars } from "react-icons/fa";

import throttle from "lodash.throttle";

import { NavigationItem } from "./navigation-item.component";
import type { NavigationLinkItem } from "./navigation-item.component";

import {
  MOBILE_NAVIGATION_TOGGLE_SIZE,
  MOBILE_BODY_PADDING,
  MOBILE_BODY_PADDING_TOP,
} from "src/styles/GLOBALS";

const Navigation = styled.nav<{ isVisible: boolean }>`
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);

  position: fixed;
  z-index: ${props => (props.isVisible ? "5" : "-5")};
  top: 0;
  left: 0;
`;

const Sidebar = styled.ul<{ isVisible: boolean }>`
  background: black;
  width: 50%;
  height: 100%;
  margin-left: auto;
  padding-top: ${MOBILE_BODY_PADDING_TOP}px;
  padding-right: ${MOBILE_BODY_PADDING}px;

  transform: translateX(${props => (props.isVisible ? "0" : "100%")});
  transition: transform 0.25s ease-in-out;

  & li {
    height: 32px;
    margin-bottom: 16px;

    & a {
      cursor: default; /* set it for desktop */

      display: inline-block;
      height: 100%;
      width: 100%;

      text-align: right;
      text-decoration: none;
      color: white;

      font-size: 16px;
      font-weight: bold;
    }
  }
`;

const NavigationToggle = styled.button`
  appearance: none;
  background: black;

  border: 1px dashed #dddddd;
  outline: none;
  padding: 0;

  position: fixed;
  z-index: 10;
  right: ${MOBILE_BODY_PADDING}px;
  top: ${MOBILE_BODY_PADDING}px;

  width: ${MOBILE_NAVIGATION_TOGGLE_SIZE}px;
  height: ${MOBILE_NAVIGATION_TOGGLE_SIZE}px;
`;

const Logo = styled.img`
  height: ${MOBILE_NAVIGATION_TOGGLE_SIZE}px;
  width: ${MOBILE_NAVIGATION_TOGGLE_SIZE}px;

  position: fixed;
  top: ${MOBILE_BODY_PADDING}px;
  left: ${MOBILE_BODY_PADDING}px;

  border: 1px dashed #dddddd;
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

  const handleResize = () => {
    setVisibility(window.innerWidth > 768);
  };

  useEffect(() => {
    handleResize();

    const throttledHandleResize = throttle(handleResize, 1000);

    window.addEventListener("resize", throttledHandleResize);

    return () => {
      window.removeEventListener("resize", throttledHandleResize);
    };
  }, []);

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
        <Logo src="/logo.jpg" alt="" />
        <Sidebar isVisible={isVisible}>
          {links.map(link => (
            <NavigationItem link={link} key={link.name} />
          ))}
        </Sidebar>
      </Navigation>
    </>
  );
};
