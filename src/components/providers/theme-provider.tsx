"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";

export const THEME_COOKIE_KEY = "saffron-theme";
const STORAGE_KEY = "saffron-table-theme-v2";
type Theme = "light" | "dark";

interface ThemeContextValue {
  resolvedTheme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  resolvedTheme: "light",
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({
  children,
  initialTheme = "light",
}: {
  children: ReactNode;
  initialTheme?: Theme;
}) {
  const [theme, setThemeState] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem(STORAGE_KEY);

      if (storedTheme === "light" || storedTheme === "dark") {
        setThemeState(storedTheme);
        document.documentElement.classList.toggle(
          "dark",
          storedTheme === "dark",
        );
      }
    } catch {}
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
      document.cookie = `${THEME_COOKIE_KEY}=${newTheme}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {}
  }, []);

  return (
    <ThemeContext.Provider value={{ resolvedTheme: theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
