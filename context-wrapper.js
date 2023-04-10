import React from "react";
import { StyledThemeProvider } from "./src/theme/app/StyledThemeProvider";
import { ThemeManagerProvider } from "./src/theme/app/ThemeManager";
import lighttheme, { darktheme } from "./src/theme/app/themeStyles";
import { GlobalStyle } from "./src/sections/app.style";

export const ContextWrapper = ({ children }) => {
  return (
    <ThemeManagerProvider>
      <StyledThemeProvider lightTheme={lighttheme} darkTheme={darktheme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeManagerProvider>
  );
};