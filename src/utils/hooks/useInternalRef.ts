import * as React from "react";

export function useInternalRef<T extends HTMLElement>(
  forwardedRef: React.ForwardedRef<T>,
) {
  const internalRef = React.useRef<T>(null);

  React.useImperativeHandle(forwardedRef, () => internalRef.current!);

  return internalRef;
}
