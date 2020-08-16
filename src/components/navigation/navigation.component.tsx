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
} from "src/styles/constants-css";
import { ItemFocus, DashedBorder } from "src/styles/global-css";

const Navigation = styled.nav<{ isVisible: boolean }>`
  height: 100vh;
  width: 100%;

  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;

  transform: translateX(${props => (props.isVisible ? "0" : "100%")});
  transition: transform 0.25s ease-in-out;

  @media (min-width: 48em) {
    height: 6.4rem;
    position: static;

    max-width: 89.6rem;

    display: flex;
    margin-bottom: 6.4rem;

    transform: none;
  }

  @media (max-width: 88em) {
    max-width: 100%;
  }

  @media (min-width: 104em) {
    max-width: 100%;
  }
`;

const Sidebar = styled.ul<{ isVisible: boolean }>`
  background: black;
  width: 50%;
  max-width: 51.2rem;
  height: 100%;
  margin-left: auto;
  padding-top: ${MOBILE_BODY_PADDING_TOP / 10}rem;
  padding-right: ${MOBILE_BODY_PADDING / 10}rem;

  & li {
    height: 3.2rem;
    margin-bottom: 1.6rem;

    & a {
      cursor: default;

      display: inline-block;
      height: 100%;
      width: 100%;

      text-align: right;
      text-decoration: none;
      color: white;

      font-size: 1.6rem;
      font-weight: bold;
    }
  }

  @media (min-width: 48em) {
    padding: 0;

    height: auto;
    width: auto;

    display: flex;

    ${DashedBorder};

    transform: none;

    & li {
      width: 12.8rem;
      height: 100%;

      & a {
        cursor: pointer;
        font-size: 2rem;

        display: flex;
        justify-content: center;
        align-items: center;

        ${ItemFocus};
      }
    }
  }

  @media (min-width: 104em) {
    margin-right: 6.4rem;
  }
`;

const NavigationToggle = styled.button`
  appearance: none;
  background: black;

  ${DashedBorder};
  outline: none;
  padding: 0;

  position: fixed;
  z-index: 10;
  right: ${MOBILE_BODY_PADDING}px;
  top: ${MOBILE_BODY_PADDING}px;

  width: ${MOBILE_NAVIGATION_TOGGLE_SIZE}px;
  height: ${MOBILE_NAVIGATION_TOGGLE_SIZE}px;

  @media (min-width: 48em) {
    display: none;
  }
`;

const Logo = styled.img`
  height: ${MOBILE_NAVIGATION_TOGGLE_SIZE / 10}rem;
  width: ${MOBILE_NAVIGATION_TOGGLE_SIZE / 10}rem;

  position: fixed;
  top: ${MOBILE_BODY_PADDING / 10}rem;
  left: ${MOBILE_BODY_PADDING / 10}rem;

  ${DashedBorder};

  display: none;

  @media (min-width: 48em) {
    display: block;

    position: static;
    width: 6.4rem;
    height: auto;
  }
`;

const NavigationBackground = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => (props.isVisible ? "block" : "none")};

  @media (min-width: 48em) {
    display: none;
  }
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
      <NavigationBackground isVisible={isVisible} />
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
