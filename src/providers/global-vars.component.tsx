import React, { createContext, useState, useEffect } from "react";

export const GlobalVarsContext = createContext<{
  theme: {
    activeTheme: "dark" | "light";
    switchTheme?: () => void;
    checked: boolean;
  };
}>({
  theme: {
    activeTheme: "dark",
    checked: true,
  },
});

const GlobalVars: React.FC = ({ children }) => {
  const [activeTheme, setTheme] = useState<"dark" | "light">("dark");

  const handleThemeChange = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  const context = {
    theme: {
      activeTheme,
      switchTheme: handleThemeChange,
      checked: activeTheme === "dark",
    },
  };

  return (
    <GlobalVarsContext.Provider value={context}>{children}</GlobalVarsContext.Provider>
  );
};

export default GlobalVars;
