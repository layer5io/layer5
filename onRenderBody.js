import React from "react";
import { DarkThemeKey, ThemeSetting } from "./src/theme/app/ThemeManager";
import lighttheme, { darktheme } from "./src/theme/app/themeStyles";

const themes = {
  light: lighttheme,
  dark: darktheme,
};

const MagicScriptTag = ({ theme }) => {
  const themeJSON = JSON.stringify(theme);

  const codeToRunOnClient = `
(function() {
  try {
    var themeFromLocalStorage = localStorage.getItem('${DarkThemeKey}') || '${ThemeSetting.SYSTEM}';
    var systemLightModeSetting = function() {
      return window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
    };
    var isLightModeActive = function() {
      var mql = systemLightModeSetting();
      return mql ? mql.matches : false;
    };

    var colorMode;
    switch (themeFromLocalStorage) {
      case '${ThemeSetting.SYSTEM}':
        colorMode = isLightModeActive() ? '${ThemeSetting.LIGHT}' : '${ThemeSetting.DARK}';
        break;
      case '${ThemeSetting.DARK}':
      case '${ThemeSetting.LIGHT}':
        colorMode = themeFromLocalStorage;
        break;
      default:
        colorMode = '${ThemeSetting.DARK}';
    }

    var root = document.documentElement;
    var parsedTheme = ${themeJSON};
    var selectedTheme = parsedTheme[colorMode];

    var iterate = function(obj) {
      if (!obj) return;
      Object.keys(obj).forEach(function(key) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          iterate(obj[key]);
        } else {
          root.style.setProperty('--' + key, obj[key]);
        }
      });
    };

    iterate(selectedTheme);
    root.style.setProperty('--initial-color-mode', colorMode);
    root.setAttribute('data-theme', colorMode);

    window.__theme = colorMode;

  } catch (e) {}
})();
`;

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <MagicScriptTag key="theme-initializer" theme={themes} />,
  ]);
};
