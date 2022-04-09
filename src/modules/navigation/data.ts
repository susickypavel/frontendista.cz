import memojiAbout from "@assets/memoji-about.png";
import memojiBlog from "@assets/memoji-blog.png";
import memojiContact from "@assets/memoji-contact.png";

import type { INavigationData } from "./navigation.d";

export const navigationData: INavigationData[] = [
  {
    title: "About",
    memoji: memojiAbout,
    ctaLink: {
      href: "/about",
      label: "My story",
    },
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
    memoji: memojiBlog,
    ctaLink: {
      href: "/blog",
      label: "See my writings",
    },
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
    memoji: memojiContact,
    ctaLink: {
      href: "/contact",
      label: "Contact me",
    },
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
