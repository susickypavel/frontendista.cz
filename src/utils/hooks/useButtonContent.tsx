import * as React from "react";

import type { IToggleButtonProps } from "@components/common/button/toggle-button/toggle-button";

/**
 * NOTE: There is optional React.useMemo for "optimization" for future reference, if there is a performance bottleneck.
 */
export function useButtonContent({
  icon: Icon,
  icons: Icons,
  children,
}: Pick<IToggleButtonProps, "icons" | "icon" | "children">) {
  // return React.useMemo(() => {
  if (Icon) {
    return <Icon />;
  }

  return (
    <React.Fragment>
      {Icons?.left && <Icons.left />}
      {children}
      {Icons?.right && <Icons.right />}
    </React.Fragment>
  );
  // }, [children, Icon, Icons]);
}
