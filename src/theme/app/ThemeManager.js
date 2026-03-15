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

const isBrowser = typeof window !== "undefined";

const systemDarkModeSetting = () =>
  isBrowser && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

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

  useEffect(() => {
    if (!isBrowser) return;

    const root = window.document.documentElement;
    const initialColorValue = (root.style.getPropertyValue("--initial-color-mode") || "").trim();
    const actualTheme = window.__theme || initialColorValue || ThemeSetting.LIGHT;

    const storedTheme = localStorage.getItem(DarkThemeKey);

    if (storedTheme && storedTheme !== ThemeSetting.SYSTEM) {
      const isDarkTheme = storedTheme === ThemeSetting.DARK;
      setIsDark(isDarkTheme);
      setThemeSetting(storedTheme);
      applyThemeToDOM(storedTheme);
    } else if (actualTheme) {
      setIsDark(actualTheme === ThemeSetting.DARK);
      setThemeSetting(ThemeSetting.SYSTEM);
    } else {
      const systemIsDark = isDarkModeActive();
      setIsDark(systemIsDark);
      const theme = systemIsDark ? ThemeSetting.DARK : ThemeSetting.LIGHT;
      applyThemeToDOM(theme);
    }

    setDidLoad(true);
  }, []);

  useEffect(() => {
    if (!isBrowser || themeSetting !== ThemeSetting.SYSTEM) return;

    const darkModeMediaQuery = systemDarkModeSetting();
    if (!darkModeMediaQuery) return;

    const handleChange = (e) => {
      setIsDark(e.matches);
      applyThemeToDOM(e.matches ? ThemeSetting.DARK : ThemeSetting.LIGHT);
    };

    darkModeMediaQuery.addEventListener("change", handleChange);
    return () => darkModeMediaQuery.removeEventListener("change", handleChange);
  }, [themeSetting]);

  const toggleDark = useCallback(() => {
    if (!isBrowser) return;

    const newIsDark = !isDark;
    const newTheme = newIsDark ? ThemeSetting.DARK : ThemeSetting.LIGHT;

    setIsDark(newIsDark);
    setThemeSetting(newTheme);

    applyThemeToDOM(newTheme);

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

      setIsDark(newIsDark);
      setThemeSetting(setting);

      applyThemeToDOM(themeToApply);
      localStorage.setItem(DarkThemeKey, setting);
    },
    [isDark]
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
