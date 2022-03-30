import * as React from "react";

import styles from "./navigation.module.scss";

import { AnchorLink } from "@components/experiments/link";
import {
  FocusScope,
  mergeProps,
  useButton,
  useMenu,
  useMenuItem,
  useMenuTrigger,
  useOverlay,
} from "react-aria";
import { Item, useMenuTriggerState, useTreeState } from "react-stately";

import { Button } from "@components/experiments/button";

import type { CollectionChildren, FocusStrategy } from "@react-types/shared";

interface NavigationItemProps {
  href: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ children, href }) => {
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

interface INavigationButton {
  title: string;
  children: CollectionChildren<object>;
}

const NavigationButton: React.FC<INavigationButton> = ({ children, title, ...props }) => {
  const ref = React.useRef<HTMLButtonElement>(null);

  const state = useMenuTriggerState({
    closeOnSelect: false,
  });

  const { menuProps, menuTriggerProps } = useMenuTrigger(props, state, ref);
  const { buttonProps, isPressed } = useButton(menuTriggerProps, ref);

  return (
    <li onMouseLeave={() => state.close()}>
      <Button
        {...buttonProps}
        ref={ref}
        isPressed={isPressed}
        onHoverStart={() => state.open()}
        classNames={{
          base: styles.navigationItem,
          isFocusedOrHovered: styles.navigationItemIsFocusedOrHovered,
        }}>
        {title}
      </Button>
      {state.isOpen && (
        <NavigationMenu
          {...menuProps}
          autoFocus={state.focusStrategy}
          onClose={() => state.close()}>
          {children}
        </NavigationMenu>
      )}
    </li>
  );
};

interface INavigationMenuProps {
  onClose: () => void;
  children: CollectionChildren<object>;
  autoFocus: FocusStrategy;
}

const NavigationMenu: React.FC<INavigationMenuProps> = ({
  children,
  onClose,
  ...props
}) => {
  const menuRef = React.useRef<HTMLUListElement>(null);
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const state = useTreeState({ children, ...props, selectionMode: "none" });
  const { menuProps } = useMenu(
    {
      children,
      ...props,
    },
    state,
    menuRef,
  );

  let { overlayProps } = useOverlay(
    {
      onClose,
      shouldCloseOnBlur: true,
      isOpen: true,
      isDismissable: true,
    },
    overlayRef,
  );

  return (
    <FocusScope restoreFocus contain>
      <div ref={overlayRef} {...overlayProps}>
        <ul {...mergeProps(props, menuProps)} ref={menuRef}>
          {/* @ts-ignore */}
          {[...state.collection].map(item => (
            <MenuItem key={item.key} item={item} state={state} />
          ))}
        </ul>
      </div>
    </FocusScope>
  );
};

const MenuItem: React.FC<any> = ({ item, state }) => {
  let ref = React.useRef<HTMLAnchorElement>(null);
  let { menuItemProps } = useMenuItem(
    {
      key: item.key,
      isDisabled: item.isDisabled,
      // onAction,
      // onClose,
    },
    state,
    ref,
  );

  return (
    <AnchorLink
      classNames={{
        isFocused: "text-blue-500",
      }}
      href="/about"
      ref={ref}
      domProps={menuItemProps}>
      {item.rendered}
    </AnchorLink>
  );
};

// const MenuSection: React.FC<any> = () => {
//   return <div />;
// };

NavigationItem.displayName = "NavigationItem";

export const Navigation: React.FunctionComponent = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li>
          <NavigationItem href="/">Home</NavigationItem>
        </li>

        <NavigationButton title="About">
          <Item key="A">A</Item>
          <Item key="B">B</Item>
        </NavigationButton>

        <NavigationButton title="Blog">
          <Item key="A">A</Item>
          <Item key="B">B</Item>
        </NavigationButton>

        <NavigationButton title="Contact">
          <Item key="A">A</Item>
          <Item key="B">B</Item>
        </NavigationButton>
      </ul>
    </nav>
  );
};

Navigation.displayName = "Navigation";
