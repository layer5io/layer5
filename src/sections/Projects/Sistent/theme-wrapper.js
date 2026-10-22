import React from "react";
import { SistentThemeProvider } from "@sistent/sistent";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";

const ThemeWrapper = ({ children }) => {
  const { isDark } = useStyledDarkMode();
  return (
    <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      {children}
    </SistentThemeProvider>
  );
};

export default ThemeWrapper;
