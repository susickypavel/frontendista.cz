export interface INavigationItemProps {
  href: string;
}

export interface INavigationSectionItem {
  href: string;
  label: string;
}

export interface INavigationSection {
  sectionTitle: string;
  items: INavigationSectionItem[];
}

export interface INavigationData {
  title: string;
  /**
   * Statically imported image from filesystem.
   * This is used by Next.js Image component.
   */
  memoji: StaticImageData;
  /**
   * CTA link shown in the dropdown.
   */
  ctaLink: {
    href: string;
    label: string;
  };
  section: INavigationSection[];
}
