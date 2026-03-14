import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeManagerContext } from "./ThemeManager";

export const StyledThemeProvider = (props) => {
  const { children, darkTheme, lightTheme } = props;
  const { isDark, didLoad } = useContext(ThemeManagerContext);

  if (!didLoad) return null;

  const currentTheme = isDark ? darkTheme : lightTheme;
  const theme = { ...currentTheme };

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
