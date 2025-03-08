//majority of code from https://www.joshwcomeau.com/react/dark-mode/ and https://github.com/gperl27/gatsby-styled-components-dark-mode

//context provider for app to make accessible theme setting, toggle function, etc.

import React, { createContext, useState, useEffect } from "react";

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

const systemDarkModeSetting = () =>
  window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
const isDarkModeActive = () => {
  // Assume that dark mode is not active if there's no system dark mode setting available
  return !!systemDarkModeSetting()?.matches;
};


export const ThemeManagerProvider = (props) => {
  const [themeSetting, setThemeSetting] = useState(ThemeSetting.SYSTEM);
  const [didLoad, setDidLoad] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    setIsDark(initialColorValue === ThemeSetting.DARK);
    setDidLoad(true);
  }, []);

  const toggleDark = (value) => {
    const newIsDark = value ?? !isDark;
    const theme = newIsDark ? ThemeSetting.DARK : ThemeSetting.LIGHT;
    setIsDark(newIsDark);
    setThemeSetting(theme);
    localStorage.setItem(DarkThemeKey, theme);
  };

  const changeThemeSetting = (setting) => {
    switch (setting) {
      case ThemeSetting.SYSTEM: {
        setIsDark(isDarkModeActive());
        break;
      }
      case ThemeSetting.LIGHT:
      case ThemeSetting.DARK:
        setIsDark(setting === ThemeSetting.DARK);
        break;
    }
    setThemeSetting(setting);
    localStorage.setItem(DarkThemeKey, setting);
  };

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
