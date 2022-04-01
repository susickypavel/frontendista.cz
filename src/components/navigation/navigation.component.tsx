import * as React from "react";
import { Item, Section } from "react-stately";

import styles from "./navigation.module.scss";

import { NavigationButton } from "./navigation-button";
import { NavigationItem } from "./navigation-item";

const data = [
  {
    title: "About",
    label: "About me",
    section: [
      {
        title: "Free time",
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
        title: "Development",
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
        title: "Me",
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
    label: "My blog",
    section: [
      {
        title: "Hobby",
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
        title: "Development",
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
    label: "Contact me",
    section: [
      {
        title: "Hobby",
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
        title: "Development",
        items: [
          {
            href: "/contact#todo",
            label: "GitHub",
          },
        ],
      },
      {
        title: "Socials",
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
        {data.map(item => (
          <NavigationButton title={item.title} menuLabel={item.label} key={item.label}>
            {item.section.map(({ title, items }) => (
              <Section title={title} items={items} key={title}>
                {({ label, href }) => (
                  // @ts-ignore
                  <Item<any> key={label} href={href}>
                    {label}
                  </Item>
                )}
              </Section>
            ))}
          </NavigationButton>
        ))}
      </ul>
    </nav>
  );
};

Navigation.displayName = "Navigation";
