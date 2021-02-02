export function getInitialColorTheme(): void {
  let theme;

  const persistedColorTheme = window.localStorage.getItem("theme");

  if (persistedColorTheme === "dark" || persistedColorTheme == "light") {
    theme = persistedColorTheme;
  } else {
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)");
    theme = systemPreference.matches ? "dark" : "light";
  }

  (window as any).__THEME__ = theme;
  document.documentElement.classList.add(theme);
}
