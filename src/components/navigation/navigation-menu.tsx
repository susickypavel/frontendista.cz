import * as React from "react";
import { FocusScope, mergeProps, useMenu, useOverlay } from "react-aria";
import { useTreeState } from "react-stately";

import styles from "./navigation.module.scss";

import { MenuSection } from "./menu-section";

export const NavigationMenu: React.FC<{
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
      <div className={styles.navigationMenu} ref={overlayRef} {...overlayProps}>
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
