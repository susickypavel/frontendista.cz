import React, { useEffect, useState } from "react";

interface ThemeToggleProps {}

const THEMES = ["light", "dark"];

function getNextIndex(value: number): number {
  const nextIndex = value + 1;

  if (nextIndex >= THEMES.length) {
    return 0;
  }

  return nextIndex;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  const [selected, setSelected] = useState<number>(-1);

  const handleClick = () => {
    setSelected(currentIndex => {
      const nextIndex = getNextIndex(currentIndex);

      document.documentElement.classList.replace(THEMES[currentIndex], THEMES[nextIndex]);
      localStorage.setItem("theme", THEMES[nextIndex]);

      return nextIndex;
    });
  };

  useEffect(() => {
    const currentThemeIndex = THEMES.indexOf(document.documentElement.classList[0]);

    if (currentThemeIndex === -1) {
      localStorage.removeItem("theme");
      setSelected(0);
    } else {
      setSelected(currentThemeIndex);
    }
  }, []);

  return <button onClick={handleClick}>{THEMES[selected]}</button>;
};
