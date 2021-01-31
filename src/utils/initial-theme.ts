export function getInitialColorTheme(): void {
  let theme;
  const persistedColorTheme = window.localStorage.getItem("theme");

  if (typeof persistedColorTheme === "string") {
    theme = persistedColorTheme;
  }

  const systemPreference = window.matchMedia("(prefers-color-scheme: dark)");

  if (!theme) {
    if (systemPreference.matches) {
      theme = systemPreference.matches ? "dark" : "light";
    } else {
      theme = "light";
    }
  }

  document.documentElement.classList.add(theme);
}
