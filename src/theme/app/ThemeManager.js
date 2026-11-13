//majority of code from https://www.joshwcomeau.com/react/dark-mode/ and https://github.com/gperl27/gatsby-styled-components-dark-mode

//context provider for app to make accessible theme setting, toggle function, etc.

import React, { createContext, useState, useEffect, useCallback } from "react";

export const ThemeSetting = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
};

export const DarkThemeKey = "theme";

const defaultState = {
  isDark: false,
  didLoad: false,
  themeSetting: ThemeSetting.SYSTEM,
  toggleDark: () => undefined,
  changeThemeSetting: () => undefined,
};

export const ThemeManagerContext = createContext(defaultState);

// Safe check for browser environment
const isBrowser = typeof window !== "undefined";

const systemDarkModeSetting = () =>
  isBrowser && window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;

const isDarkModeActive = () => {
  return !!systemDarkModeSetting()?.matches;
};

const applyThemeToDOM = (theme) => {
  if (!isBrowser) return;
  const root = window.document.documentElement;
  root.style.setProperty("--initial-color-mode", theme);
  root.setAttribute("data-theme", theme);
  window.__theme = theme;
};

export const ThemeManagerProvider = (props) => {
  const [themeSetting, setThemeSetting] = useState(ThemeSetting.SYSTEM);
  const [didLoad, setDidLoad] = useState(false);

  const [isDark, setIsDark] = useState(() => {
    if (isBrowser) {
      if (window.__theme === ThemeSetting.DARK) return true;
      if (window.__theme === ThemeSetting.LIGHT) return false;
    }
    return false;
  });

  const applyThemePreference = useCallback((preference) => {
    const isSystem =
      preference === null ||
      preference === ThemeSetting.SYSTEM ||
      (preference !== ThemeSetting.LIGHT && preference !== ThemeSetting.DARK);

    const resolvedTheme = isSystem
      ? isDarkModeActive()
        ? ThemeSetting.DARK
        : ThemeSetting.LIGHT
      : preference;

    setThemeSetting(isSystem ? ThemeSetting.SYSTEM : preference);
    setIsDark(resolvedTheme === ThemeSetting.DARK);
    applyThemeToDOM(resolvedTheme);
  }, []);

  useEffect(() => {
    if (!isBrowser) return;

    const storedTheme = localStorage.getItem(DarkThemeKey);

    // When following the system preference, trust the pre-paint value
    // from onRenderBody.js so the first React render matches what was painted.
    if (
      (storedTheme === null || storedTheme === ThemeSetting.SYSTEM) &&
      window.__theme
    ) {
      setThemeSetting(ThemeSetting.SYSTEM);
      setIsDark(window.__theme === ThemeSetting.DARK);
      applyThemeToDOM(window.__theme);
    } else {
      applyThemePreference(storedTheme);
    }

    setDidLoad(true);
  }, [applyThemePreference]);

  // Listen to system color scheme changes only when on SYSTEM mode
  useEffect(() => {
    if (!isBrowser || themeSetting !== ThemeSetting.SYSTEM) return;

    const darkModeMediaQuery = systemDarkModeSetting();
    if (!darkModeMediaQuery) return;

    const handleChange = () => {
      const storedTheme = localStorage.getItem(DarkThemeKey);

      // Only follow OS changes when no explicit preference exists.
      if (
        storedTheme !== ThemeSetting.LIGHT &&
        storedTheme !== ThemeSetting.DARK
      ) {
        applyThemePreference(storedTheme);
      }
    };

    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, [themeSetting, applyThemePreference]);

  useEffect(() => {
    if (!isBrowser) return;

    const handleStorageChange = (event) => {
      // Ignore changes from sessionStorage or unrelated localStorage keys.
      if (event.storageArea !== window.localStorage) return;
      if (event.key !== DarkThemeKey && event.key !== null) return;

      // event.newValue is null when the theme key is removed.
      // event.key is null when localStorage.clear() is called.
      const newPreference = event.key === null ? null : event.newValue;

      applyThemePreference(newPreference);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [applyThemePreference]);

  const toggleDark = useCallback(() => {
    if (!isBrowser) return;

    const newIsDark = !isDark;
    const newTheme = newIsDark ? ThemeSetting.DARK : ThemeSetting.LIGHT;

    // Update state
    setIsDark(newIsDark);
    setThemeSetting(newTheme);

    // Apply to DOM immediately
    applyThemeToDOM(newTheme);

    // Persist to localStorage
    localStorage.setItem(DarkThemeKey, newTheme);
  }, [isDark]);

  const changeThemeSetting = useCallback(
    (setting) => {
      if (!isBrowser) return;

      let newIsDark = isDark;
      let themeToApply = setting;

      switch (setting) {
        case ThemeSetting.SYSTEM: {
          newIsDark = isDarkModeActive();
          themeToApply = newIsDark ? ThemeSetting.DARK : ThemeSetting.LIGHT;
          break;
        }
        case ThemeSetting.LIGHT:
          newIsDark = false;
          themeToApply = ThemeSetting.LIGHT;
          break;
        case ThemeSetting.DARK:
          newIsDark = true;
          themeToApply = ThemeSetting.DARK;
          break;
        default:
          return;
      }

      // Update state
      setIsDark(newIsDark);
      setThemeSetting(setting);

      // Apply to DOM immediately
      applyThemeToDOM(themeToApply);

      // Persist to localStorage
      localStorage.setItem(DarkThemeKey, setting);
    },
    [isDark],
  );

  return (
    <ThemeManagerContext.Provider
      value={{
        isDark,
        toggleDark,
        themeSetting,
        changeThemeSetting,
        didLoad,
      }}
    >
      {props.children}
    </ThemeManagerContext.Provider>
  );
};
