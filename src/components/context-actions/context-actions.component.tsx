import * as React from "react";

export const ContextActions: React.FunctionComponent = ({ children }) => {
  return <div className="flex gap-4 bg-black p-4 rounded-lg">{children}</div>;
};
