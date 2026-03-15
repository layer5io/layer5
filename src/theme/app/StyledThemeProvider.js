import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeManagerContext } from "./ThemeManager";

const isBrowser = typeof window !== "undefined";

export const StyledThemeProvider = (props) => {
  const { children, darkTheme, lightTheme } = props;
  const { isDark, didLoad } = useContext(ThemeManagerContext);

  const currentTheme = isDark ? darkTheme : lightTheme;
  const theme = {
    ...(didLoad ? currentTheme : transformTheme(currentTheme)),
  };

  return (
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  );
};

const transformTheme = (theme) => {
  const newTheme = {};
  Object.keys(theme).forEach((key) => {
    const value = theme[key];
    if (typeof value === "object" && !!value) {
      newTheme[key] = transformTheme(value);
    } else {
      newTheme[key] = `var(--${key})`;
    }
  });

  return newTheme;
};
