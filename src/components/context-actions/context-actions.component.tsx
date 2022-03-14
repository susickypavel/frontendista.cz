import * as React from "react";

export const ContextActions: React.FunctionComponent = ({ children }) => {
  return (
    <div className="flex gap-4 p-4 bg-black rounded-lg md:w-full md:rounded-none">
      {children}
    </div>
  );
};
