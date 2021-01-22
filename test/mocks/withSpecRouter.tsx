import React, { ReactElement } from "react";
import { NextRouter } from "next/router";
import { RouterContext } from "next/dist/next-server/lib/router-context";

export function withSpecRouter(tree: ReactElement, customRouter?: Partial<NextRouter>): JSX.Element {
  const _router: NextRouter = {
    asPath: "/",
    basePath: "/",
    pathname: "",
    route: "",
    back: () => {},
    beforePopState: () => {},
    reload: () => {},
    prefetch: async () => {},
    push: async () => true,
    replace: async () => true,
    events: {
      emit: () => {},
      off: () => {},
      on: () => {},
    },
    isFallback: false,
    query: {},
  };

  const router = Object.assign(_router, customRouter);

  return <RouterContext.Provider value={router}>{tree}</RouterContext.Provider>;
}
