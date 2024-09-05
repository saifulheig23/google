// src/hooks/useTheme.js
import { setTheme } from "@/redux/features/themeSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";

export const useTheme = () => {
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const applyTheme = (themeToApply: string) => {
      if (themeToApply === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSystemThemeChange = (e:any) => {
      if (theme === "system") {
        applyTheme(e.matches ? "dark" : "light");
      }
    };

    // Apply the current theme
    if (theme === "system") {
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      applyTheme(systemPreference);
    } else {
      applyTheme(theme);
    }

    // Add media query listener for system preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme, dispatch]);

  return {
    theme,
    setTheme: (newTheme: string) => dispatch(setTheme(newTheme)),
  };
};
