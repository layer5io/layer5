import React from "react";
import { DarkThemeKey, ThemeSetting } from "./src/theme/app/ThemeManager.js";
import lighttheme, { darktheme } from "./src/theme/app/themeStyles";

const themes = {
  [ThemeSetting.LIGHT]: lighttheme,
  [ThemeSetting.DARK]: darktheme,
};

const MagicScriptTag = (props) => {
  const codeToRunOnClient = `
    (function() {
      try {
        // 1. Get theme from localStorage, fallback to SYSTEM preference
        const themeFromLocalStorage = localStorage.getItem('${DarkThemeKey}') || '${ThemeSetting.SYSTEM}';

        // 2. Check if system is in light mode
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

        // ✨ NEW FIX: Instantly Set the Correct Background Color (Without Using Visibility Hidden)
        // Instead of hardcoding it, apply the color based on the colorMode.
        const bgColor = colorMode === '${ThemeSetting.DARK}' ? '#121212' : '#ffffff';
        root.style.backgroundColor = bgColor;
        document.body.style.backgroundColor = bgColor;

        // 3. Recursively apply all CSS variables from theme object
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

        // 4. Directly embed JSON instead of wrapping in single quotes
        const parsedTheme = ${JSON.stringify(props.theme)};
        const theme = parsedTheme[colorMode];
        
        if (theme) {
          iterate(theme);
        }

        root.style.setProperty('--initial-color-mode', colorMode);
      } catch (e) {
        console.error("Theme script failed", e);
      }
    })()
  `;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  
  setPreBodyComponents([
    <MagicScriptTag key="theme-injection" theme={themes} />
  ]);
};
