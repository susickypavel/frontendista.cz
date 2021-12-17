import React from "react";

import type { ButtonProps } from "..";

export function useContent({
  children,
  icon: Icon,
  icons: Icons = {},
}: Partial<ButtonProps>): React.ReactNode {
  let content: React.ReactNode = null;

  if (Icon) {
    content = <Icon width="1em" />;
  } else {
    content = (
      <React.Fragment>
        {Icons.left && <Icons.left width="1em" />}
        {children}
        {Icons.right && <Icons.right width="1em" />}
      </React.Fragment>
    );
  }

  return content;
}
