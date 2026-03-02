import React from "react";
import { DarkThemeKey, ThemeSetting } from "./src/theme/app/ThemeManager.js";
import lighttheme, { darktheme } from "./src/theme/app/themeStyles";

// FIX 1: Using ThemeSetting values as keys instead of hardcoded "light"/"dark"
const themes = {
  [ThemeSetting.LIGHT]: lighttheme,
  [ThemeSetting.DARK]: darktheme,
};

const MagicScriptTag = (props) => {
  const codeToRunOnClient = `
    (function() {
      // Get theme from localStorage, fallback to SYSTEM preference
      const themeFromLocalStorage = localStorage.getItem('${DarkThemeKey}') || '${ThemeSetting.SYSTEM}';

      // Check if system is in light mode
      const isLightModeActive = () => {
        return window.matchMedia
          ? window.matchMedia('(prefers-color-scheme: light)').matches
          : false;
      };

      let colorMode;

      switch (themeFromLocalStorage) {
        case '${ThemeSetting.SYSTEM}':
          // If system is light -> light, otherwise default to dark
          colorMode = isLightModeActive()
            ? '${ThemeSetting.LIGHT}'
            : '${ThemeSetting.DARK}';
          break;

        case '${ThemeSetting.DARK}':
        case '${ThemeSetting.LIGHT}':
          // Use whatever is saved in localStorage
          colorMode = themeFromLocalStorage;
          break;

        default:
          // Fallback to dark mode on any error
          colorMode = '${ThemeSetting.DARK}';
      }

      const root = document.documentElement;

      // FIX 2: Hide the page until theme is fully applied to avoid white flash
      root.style.visibility = 'hidden';

      // Recursively apply all CSS variables from theme object
      const iterate = (obj) => {
        if (!obj) return;
        Object.keys(obj).forEach((key) => {
          if (typeof obj[key] === 'object') {
            iterate(obj[key]);
          } else {
            root.style.setProperty('--' + key, obj[key]);
          }
        });
      };

      // FIX 3: Directly embed JSON instead of wrapping in single quotes (prevents parse errors)
      const parsedTheme = ${JSON.stringify(props.theme)};
      const theme = parsedTheme[colorMode];
      iterate(theme);

      root.style.setProperty('--initial-color-mode', colorMode);

      // Show the page after theme is fully applied
      root.style.visibility = 'visible';
    })()
  `;

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents, setHtmlAttributes }) => {
  // FIX 4: Set dark background at HTML level during SSR — before any JS runs
  setHtmlAttributes({ style: { backgroundColor: "#000" } });
  setPreBodyComponents(<MagicScriptTag key="theme-injection" theme={themes} />);
};
