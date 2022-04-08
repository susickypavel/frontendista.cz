import * as React from "react";
import { CgSpinner } from "react-icons/cg";

import styles from "../button.module.scss";

import type { IconType } from "react-icons";

// TODO: Add accessibility label (or visually hidden text) for icon only buttons.
interface IContentProps {
  icon?: IconType;
  /**
   * @default {}
   */
  icons?: {
    left?: IconType;
    right?: IconType;
  };
  children: React.ReactNode;
  /**
   * @default false
   */
  isLoading?: boolean;
}

export function useContent({
  children,
  icon: Icon,
  icons: Icons = {},
  isLoading,
}: IContentProps) {
  let content: JSX.Element;
  let iconAttribute: string = "none";

  if (Icon) {
    content = <Icon />;
    iconAttribute = "solo";
  } else {
    if (!Icons.left !== !Icons.right) {
      iconAttribute = "one";
    } else {
      if (Icons.left) {
        iconAttribute = "two";
      }
    }

    content = (
      <React.Fragment>
        {isLoading ? (
          <CgSpinner aria-hidden="true" className={styles.isLoadingIcon} />
        ) : (
          Icons.left && <Icons.left aria-hidden="true" />
        )}
        {children}
        {Icons.right && <Icons.right aria-hidden="true" />}
      </React.Fragment>
    );
  }

  return {
    content,
    iconAttribute,
  };
}
