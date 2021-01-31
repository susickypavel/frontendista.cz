export function getInitialColorTheme(): void {
  let theme;

  const persistedColorTheme = window.localStorage.getItem("theme");

  if (typeof persistedColorTheme === "string") {
    theme = persistedColorTheme;
  } else {
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)");
    theme = systemPreference.matches ? "dark" : "light";
  }

  document.documentElement.classList.add(theme);
}
