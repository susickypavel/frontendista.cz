import * as React from "react";

export const TopBar: React.FunctionComponent = ({ children }) => {
  return <div className="flex gap-4 h-16">{children}</div>;
};
