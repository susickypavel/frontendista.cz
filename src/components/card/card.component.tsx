import React, { FunctionComponent } from "react";

import { CardProps } from "./card";

export const Card: FunctionComponent<CardProps> = ({ title, children }) => {
  return (
    <section className="bg-gray-900 text-blue-100 rounded max-w-[20rem] p-4">
      <h2 className="font-bold text-2xl mb-4">{title}</h2>
      {children}
    </section>
  );
};
