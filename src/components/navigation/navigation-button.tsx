import * as React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useMenuTriggerState } from "react-stately";
import { mergeProps, useButton } from "react-aria";
import { Button } from "@components/common/button";

import styles from "./navigation.module.scss";

const NavigationMenu = dynamic<any>(
  () => import("./navigation-menu").then(mod => mod.NavigationMenu),
  {
    loading: () => <div />,
  },
);

export const NavigationButton: React.FC<{
  domProps?: any;
  title: string;
  menuLabel: string;
  children: any;
}> = ({ children, domProps, title, menuLabel }) => {
  const { events } = useRouter();

  let state = useMenuTriggerState({
    closeOnSelect: false,
  });

  React.useEffect(() => {
    events.on("routeChangeStart", state.close);
    events.on("hashChangeStart", state.close);

    return () => {
      events.off("routeChangeStart", state.close);
      events.off("hashChangeStart", state.close);
    };
  }, []);

  let onKeyDown = (e: any) => {
    // if (isDisabled) {
    //   return;
    // }

    if (ref && ref.current) {
      switch (e.key) {
        case "Enter":
        case " ":
        case "ArrowDown":
          if (!("continuePropagation" in e)) {
            e.stopPropagation();
          }
          e.preventDefault();
          state.toggle("first");
          break;
        case "ArrowUp":
          if (!("continuePropagation" in e)) {
            e.stopPropagation();
          }
          e.preventDefault();
          state.toggle("last");
          break;
      }
    }
  };

  let ref = React.useRef<HTMLButtonElement>(null);
  let { buttonProps } = useButton(
    {
      onKeyDown,
      onPressStart: e => {
        if (
          e.pointerType !== "touch" &&
          e.pointerType !== "keyboard" /* && !isDisabled*/
        ) {
          state.toggle(e.pointerType === "virtual" ? "first" : null);
        }
      },
      onPress: e => {
        if (e.pointerType === "touch" /*&& !isDisabled*/) {
          state.toggle();
        }
      },
    },
    ref,
  );

  return (
    <li role="none" onMouseLeave={state.close}>
      <Button
        classNames={{
          base: styles.navigationItem,
          isFocusedOrHovered: styles.navigationItemIsFocusedOrHovered,
        }}
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
          // domProps={menuProps}
          autoFocus={state.focusStrategy}
          onClose={state.close}>
          {children}
        </NavigationMenu>
      )}
    </li>
  );
};
