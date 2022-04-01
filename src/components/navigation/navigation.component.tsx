import * as React from "react";
import { Popover } from "@headlessui/react";

import styles from "./navigation.module.scss";

import { AnchorLink } from "@components/common/link";
import { Button } from "@components/common/button";

interface INavigationItemProps {
  href: string;
}

const NavigationItem: React.FC<INavigationItemProps> = ({ children, href }) => {
  return (
    <AnchorLink
      href={href}
      classNames={{
        base: styles.navigationItem,
        isPressed: styles.navigationItemIsPressed,
        isFocusedOrHovered: styles.navigationItemIsFocusedOrHovered,
      }}>
      {children}
    </AnchorLink>
  );
};

NavigationItem.displayName = "NavigationItem";

const data = [
  {
    title: "About",
    section: [
      {
        sectionTitle: "Free time",
        items: [
          {
            href: "/about#books",
            label: "Books",
          },
          {
            href: "/about#cats",
            label: "Cats",
          },
          {
            href: "/about#games",
            label: "Games",
          },
          {
            href: "/about#gym",
            label: "Gym",
          },
          {
            href: "/about#music",
            label: "Music",
          },
        ],
      },
      {
        sectionTitle: "Development",
        items: [
          {
            href: "/about#hardware",
            label: "Hardware",
          },
          {
            href: "/about#software",
            label: "Software",
          },
          {
            href: "/about#techstack",
            label: "Tech stack",
          },
          {
            href: "/about#workspace",
            label: "Workspace",
          },
        ],
      },
      {
        sectionTitle: "Me",
        items: [
          {
            href: "/about#introduction",
            label: "Introduction",
          },
        ],
      },
    ],
  },
  {
    title: "Blog",
    section: [
      {
        sectionTitle: "Hobby",
        items: [
          {
            href: "/blog#todo",
            label: "Search 1",
          },
          {
            href: "/blog#todo",
            label: "Latest article 2",
          },
        ],
      },
      {
        sectionTitle: "Development",
        items: [
          {
            href: "/blog#todo",
            label: "Search 3",
          },
          {
            href: "/blog#todo",
            label: "Latest article 4",
          },
        ],
      },
    ],
  },
  {
    title: "Contact",
    section: [
      {
        sectionTitle: "Hobby",
        items: [
          {
            href: "/contact#todo",
            label: "Steam",
          },
          {
            href: "/contact#todo",
            label: "Spotify",
          },
        ],
      },
      {
        sectionTitle: "Development",
        items: [
          {
            href: "/contact#todo",
            label: "GitHub",
          },
        ],
      },
      {
        sectionTitle: "Socials",
        items: [
          {
            href: "/contact#todo",
            label: "Twitter",
          },
          {
            href: "/contact#todo",
            label: "LinkedIn",
          },
        ],
      },
    ],
  },
];

export const Navigation: React.FunctionComponent = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li>
          <NavigationItem href="/">Home</NavigationItem>
        </li>
        <li>
          <Popover.Group as="ul" className={styles.navigationButtonsGroup}>
            {data.map(({ title, section }) => {
              return (
                <Popover as="li" key={title}>
                  <Popover.Button
                    isPressed={false}
                    _hoverProps={{}}
                    as={Button}
                    classNames={{
                      base: styles.navigationItem,
                      isPressed: styles.navigationItemIsPressed,
                      isFocusedOrHovered: styles.navigationItemIsFocusedOrHovered,
                    }}>
                    {title}
                  </Popover.Button>
                  <Popover.Panel className={styles.navigationDropdown}>
                    {({ close }) => (
                      <div className={styles.sectionContainer}>
                        {section.map(({ sectionTitle, items }) => {
                          return (
                            <section key={sectionTitle}>
                              <h3 className={styles.sectionHeader}>{sectionTitle}</h3>
                              <ul className={styles.sectionList}>
                                {items.map(({ href, label }) => {
                                  return (
                                    <li key={label}>
                                      <AnchorLink onPress={() => close()} href={href}>
                                        {label}
                                      </AnchorLink>
                                    </li>
                                  );
                                })}
                              </ul>
                            </section>
                          );
                        })}
                        <div className={styles.memojiContainer}>
                          <svg viewBox="0 0 236 236" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#000" d="M0 0h236v236H0z" />
                            <path
                              d="m25 66.1 20.7 12v23.8l-20.7 12-20.7-12V78.1ZM149 43l5.2 3v6l-5.2 3-5.2-3v-6ZM70 10l7.8 4.5v9L70 28l-7.8-4.5v-9ZM225 83l11.3 6.5v13L225 109l-11.3-6.5v-13ZM67 117l18.2 10.5v21L67 159l-18.2-10.5v-21ZM175 199l18.2 10.5v21L175 241l-18.2-10.5v-21ZM85 168l13.9 8v16L85 200l-13.9-8v-16ZM197 12l7.8 4.5v9L197 30l-7.8-4.5v-9ZM4 203l19.1 11v22L4 247l-19.1-11v-22ZM124 116l6.9 4v8l-6.9 4-6.9-4v-8ZM166 155l5.2 3v6l-5.2 3-5.2-3v-6ZM230 185l10.4 6v12l-10.4 6-10.4-6v-12ZM124-5l7.8 4.5v9L124 13l-7.8-4.5v-9ZM18 151l19.1 11v22L18 195l-19.1-11v-22ZM19-3l11.3 6.5v13L19 23 7.7 16.5v-13ZM213 134l10.4 6v12l-10.4 6-10.4-6v-12ZM168 84l17.3 10v20L168 124l-17.3-10V94ZM73 77l6.9 4v8L73 93l-6.9-4v-8ZM77 210l19.1 11v22L77 254l-19.1-11v-22Z"
                              fill="#2563EB"
                            />
                          </svg>
                          {/* <Image
                        src={memoji.src}
                        className="z-30"
                        alt={memoji.alt}
                        placeholder="blur"
                      /> */}
                        </div>
                      </div>
                    )}
                  </Popover.Panel>
                </Popover>
              );
            })}
          </Popover.Group>
        </li>
      </ul>
    </nav>
  );
};

Navigation.displayName = "Navigation";
