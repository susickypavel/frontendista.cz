import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { TimelineLite } from "gsap/dist/gsap";

import { NavigationWrapper, NavigationToggleWrapper } from "./navigation.styles";
import NavigationToggle from "./navigation-toggle/navigation-toggle.component";

interface NavigatonLink {
  name: string;
  href: string;
  ariaLabel: string;
}

const links: NavigatonLink[] = [
  {
    name: "home",
    href: "/",
    ariaLabel: "View homepage",
  },
  {
    name: "blog",
    href: "/blog",
    ariaLabel: "View blog page",
  },
  {
    name: "about",
    href: "/about",
    ariaLabel: "View about me page",
  },
  {
    name: "contact",
    href: "/contact",
    ariaLabel: "View contact me page",
  },
];

const Navigation: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const { pathname } = useRouter();

  const navigationTimeline = useRef<TimelineLite>();
  const navigationListRef = useRef<any>();

  useEffect(() => {
    navigationTimeline.current = new TimelineLite({
      paused: true,
    });

    navigationTimeline.current.to(navigationListRef.current, {
      height: "100vh",
      ease: "power4",
      duration: 0.75,
    });
  }, []);

  useEffect(() => {
    if (collapsed) {
      navigationTimeline.current?.reverse();
    } else {
      navigationTimeline.current?.play();
    }
  }, [collapsed]);

  return (
    <NavigationWrapper>
      <NavigationToggleWrapper>
        <NavigationToggle onClick={setCollapsed} />
      </NavigationToggleWrapper>
      <ul ref={navigationListRef}>
        {links.map(({ href, name, ariaLabel }) => (
          <li key={name}>
            <Link href={href}>
              <a
                aria-label={ariaLabel}
                aria-current={pathname === href ? "page" : undefined}
              >
                {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </NavigationWrapper>
  );
};

export default Navigation;
