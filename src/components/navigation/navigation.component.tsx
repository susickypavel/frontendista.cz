import * as React from "react";
import { Item, Section, useMenuTriggerState, useTreeState } from "react-stately";
import {
  FocusScope,
  mergeProps,
  useButton,
  useMenu,
  useMenuItem,
  useMenuSection,
  useMenuTrigger,
  useOverlay,
  useSeparator,
} from "react-aria";
import { useRouter } from "next/router";

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

const MySpecialButton: React.FC<{
  domProps?: any;
  title: string;
  menuLabel: string;
  children: any;
}> = ({ children, domProps, title, menuLabel }) => {
  const router = useRouter();

  let state = useMenuTriggerState({
    closeOnSelect: false,
  });

  React.useEffect(() => {
    router.events.on("routeChangeStart", state.close);
    router.events.on("hashChangeStart", state.close);

    return () => {
      router.events.off("routeChangeStart", state.close);
      router.events.off("hashChangeStart", state.close);
    };
  }, []);

  let ref = React.useRef<HTMLButtonElement>(null);
  let { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref);
  let { buttonProps } = useButton(menuTriggerProps, ref);

  return (
    <li role="none" onMouseLeave={state.close}>
      <Button
        ref={ref}
        _hoverProps={{
          onHoverStart: state.open,
        }}
        {...mergeProps(domProps, buttonProps)}>
        {title}
      </Button>
      {state.isOpen && (
        <NavigationMenu
          aria-label={menuLabel}
          domProps={menuProps}
          autoFocus={state.focusStrategy}
          onClose={state.close}>
          {children}
        </NavigationMenu>
      )}
    </li>
  );
};

const NavigationMenu: React.FC<{
  domProps?: any;
  autoFocus: any;
  onClose: () => void;
  children: any;
}> = ({ domProps, ...props }) => {
  const state = useTreeState({
    ...props,
    selectionMode: "none",
  });

  const menuRef = React.useRef<HTMLUListElement>(null);
  const overlayRef = React.useRef<HTMLDivElement>(null);

  const { menuProps } = useMenu(props, state, menuRef);

  let { overlayProps } = useOverlay(
    {
      onClose: props.onClose,
      shouldCloseOnBlur: true,
      isOpen: true,
      isDismissable: true,
    },
    overlayRef,
  );

  return (
    <FocusScope restoreFocus>
      <div ref={overlayRef} {...overlayProps}>
        <ul ref={menuRef} {...mergeProps(menuProps, domProps)}>
          {/* @ts-ignore */}
          {[...state.collection].map(item => (
            <MenuSection key={item.key} section={item} state={state} />
          ))}
        </ul>
      </div>
    </FocusScope>
  );
};

const MenuItem: React.FC<{
  item: any;
  state: any;
}> = ({ item, state }) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  let { menuItemProps } = useMenuItem(
    {
      key: item.key,
      isDisabled: item.isDisabled,
    },
    state,
    ref,
  );

  return (
    <li role="none">
      <AnchorLink ref={ref} href={item.props.href} domProps={menuItemProps}>
        {item.rendered}
      </AnchorLink>
    </li>
  );
};

function MenuSection({ section, state }: any) {
  let { itemProps, headingProps, groupProps } = useMenuSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  let { separatorProps } = useSeparator({
    elementType: "li",
  });

  return (
    <React.Fragment>
      {section.key !== state.collection.getFirstKey() && <li {...separatorProps} />}
      <li {...itemProps}>
        {section.rendered && <span {...headingProps}>{section.rendered}</span>}
        <ul {...groupProps}>
          {[...section.childNodes].map(node => (
            <MenuItem key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </React.Fragment>
  );
}

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
          <MySpecialButton title={item.title} menuLabel={item.label} key={item.label}>
            {item.section.map(({ title, items }) => (
              <Section title={title} items={items} key={title}>
                {({ label, href }) => (
                  <Item<any> key={label} href={href}>
                    {label}
                  </Item>
                )}
              </Section>
            ))}
          </MySpecialButton>
        ))}
      </ul>
    </nav>
  );
};

Navigation.displayName = "Navigation";
