import React from "react";
import { DarkThemeKey, ThemeSetting } from "./src/theme/app/ThemeManager";
import lighttheme, { darktheme } from "./src/theme/app/themeStyles";

const themesJSON = JSON.stringify({
  light: lighttheme,
  dark: darktheme,
});

export const onRenderBody = ({ setPreBodyComponents }) => {
  const codeToRunOnClient = `
    (function() {
      try {
        var themePreference = localStorage.getItem('${DarkThemeKey}');
        var colorMode = '${ThemeSetting.LIGHT}'; // Default

        if (themePreference === '${ThemeSetting.DARK}') {
          colorMode = '${ThemeSetting.DARK}';
        } else if (themePreference === '${ThemeSetting.LIGHT}') {
          colorMode = '${ThemeSetting.LIGHT}';
        } else {
          var mql = window.matchMedia('(prefers-color-scheme: dark)');
          if (mql.matches) {
            colorMode = '${ThemeSetting.DARK}';
          }
        }

        var root = document.documentElement;
        
        var parsedThemes = ${themesJSON};
        var activeTheme = parsedThemes[colorMode];

        function iterate(obj, prefix) {
          prefix = prefix || '';
          for (var key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
              iterate(obj[key], prefix + key + '-');
            } else {
              root.style.setProperty('--' + prefix + key, obj[key]);
            }
          }
        }

        iterate(activeTheme);

        root.setAttribute('data-theme', colorMode);
        root.style.setProperty('--initial-color-mode', colorMode);

      } catch (e) {
        console.error('Magic Theme Script Failed', e);
      }
    })();
  `;

  setPreBodyComponents([
    <script
      key="theme-injection-script"
      dangerouslySetInnerHTML={{ __html: codeToRunOnClient }}
    />,
  ]);
};
