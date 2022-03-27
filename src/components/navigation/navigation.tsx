import * as React from "react";

import {
  FocusScope,
  mergeProps,
  useButton,
  useHover,
  useMenu,
  useMenuItem,
  useMenuSection,
  useMenuTrigger,
  useOverlay,
} from "react-aria";
import { Item, Section, useMenuTriggerState, useTreeState } from "react-stately";

import { DropdownAbout } from "./dropdown/about";
import { DropdownContact } from "./dropdown/contact";
import { DropdownBlog } from "./dropdown/blog";

import styles from "./navigation.module.scss";

import type { FocusStrategy } from "@react-types/shared";
import Link from "next/link";

const NavigationDropdown: React.FC<{
  domProps: React.HTMLAttributes<HTMLElement>;
  autoFocus: FocusStrategy;
  onClose: any;
}> = ({ domProps, ...props }) => {
  let dropdownRef = React.useRef<HTMLUListElement>(null);
  let state = useTreeState({ ...props, selectionMode: "none" });
  let { menuProps } = useMenu(props, state, dropdownRef);

  let overlayRef = React.useRef<HTMLDivElement>(null);
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
    <div
      className="flex absolute left-[50%] flex-col p-4 w-full max-w-[48rem] h-[18.75rem] text-white bg-red-500 rounded-2xl translate-x-[-50%]"
      ref={overlayRef}
      {...overlayProps}>
      <ul ref={dropdownRef} {...mergeProps(menuProps, domProps)}>
        {[...state.collection].map(item => (
          <DropdownSection key={item.key} section={item} state={state} />
        ))}
      </ul>
    </div>
  );
};

const DropdownItem: React.FC<{
  item: any;
  state: any;
}> = ({ item, state }) => {
  let ref = React.useRef<HTMLLIElement>(null);

  let isDisabled = state.disabledKeys.has(item.key);
  let isFocused = state.selectionManager.focusedKey === item.key;

  let { menuItemProps } = useMenuItem(
    {
      key: item.key,
      isDisabled,
    },
    state,
    ref,
  );

  return (
    <li {...menuItemProps} ref={ref}>
      <Link href="/about">About</Link>
    </li>
  );
};

const DropdownSection: React.FC<{
  section: any;
  state: any;
}> = ({ children, section, state }) => {
  let { itemProps, headingProps, groupProps } = useMenuSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  return (
    <li {...itemProps}>
      <ul {...groupProps}>
        {section.rendered && <span>{section.rendered}</span>}
        {[...section.childNodes].map(node => (
          <DropdownItem key={node.key} item={node} state={state} />
        ))}
      </ul>
    </li>
  );
};

const NavigationItem: React.FC<{
  label: string;
}> = props => {
  let buttonRef = React.useRef<HTMLButtonElement>(null);
  let state = useMenuTriggerState(props);
  let { menuProps, menuTriggerProps } = useMenuTrigger({}, state, buttonRef);
  let { buttonProps } = useButton(menuTriggerProps, buttonRef);

  const { hoverProps } = useHover({
    onHoverStart: () => state.open(),
    // onHoverEnd: () => state.close(),
  });

  return (
    <React.Fragment>
      <button ref={buttonRef} {...buttonProps} {...hoverProps}>
        {props.label}
      </button>
      {state.isOpen && (
        <NavigationDropdown
          domProps={menuProps}
          autoFocus={state.focusStrategy}
          onClose={() => state.close()}>
          {props.children}
        </NavigationDropdown>
      )}
    </React.Fragment>
  );
};

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavigationItem label="About">
            <Section aria-label="Label" title="Title">
              <Item key="A">Item 1</Item>
              <Item key="B">Item 2</Item>
              <Item key="C">Item 3</Item>
            </Section>
            <Section aria-label="Label" title="Title 2">
              <Item key="D">Item 1</Item>
              <Item key="F">Item 2</Item>
              <Item key="g  ">Item 3</Item>
            </Section>
          </NavigationItem>
        </li>
        <li>
          <NavigationItem label="Blog" />
        </li>
        <li>
          <NavigationItem label="Contact" />
        </li>
      </ul>
    </nav>
  );
};
