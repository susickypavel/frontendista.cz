import * as React from "react";

export const ContextActions: React.FunctionComponent = ({ children }) => {
  return <div className="flex gap-4 w-full max-w-lg bg-slate-100 p-4">{children}</div>;
};
