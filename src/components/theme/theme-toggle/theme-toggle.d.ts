export type Theme = "dark" | "light";
export type ExtendedWindowObject = Window & typeof globalThis & { __THEME__: Theme };
