import React from "react";
import { DarkThemeKey, ThemeSetting } from "./src/theme/app/ThemeManager.js";
import lighttheme, { darktheme } from "./src/theme/app/themeStyles";

const themes = {
  [ThemeSetting.LIGHT]: lighttheme,
  [ThemeSetting.DARK]: darktheme,
};

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  const scriptContent = `
    (function() {
      try {
        var mode = localStorage.getItem('${DarkThemeKey}') || '${ThemeSetting.SYSTEM}';
        var isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        var colorMode = mode === '${ThemeSetting.SYSTEM}'
          ? (isSystemDark ? '${ThemeSetting.DARK}' : '${ThemeSetting.LIGHT}')
          : mode;

        if (colorMode === '${ThemeSetting.DARK}') {
          document.documentElement.style.backgroundColor = '#121212';
          document.documentElement.classList.add('dark-theme-init');
        } else {
          document.documentElement.style.backgroundColor = '#FFFFFF';
        }

        var themes = ${JSON.stringify(themes)};
        var theme = themes[colorMode];
        if (theme) {
          for (var key in theme) {
            if (typeof theme[key] === 'object') {
              for (var subKey in theme[key]) {
                document.documentElement.style.setProperty('--' + subKey, theme[key][subKey]);
              }
            } else {
              document.documentElement.style.setProperty('--' + key, theme[key]);
            }
          }
        }

        document.documentElement.style.setProperty('--initial-color-mode', colorMode);
        document.documentElement.style.visibility = 'visible';

      } catch (e) {
        document.documentElement.style.visibility = 'visible';
      }
    })();
  `;

  setHeadComponents([
    <style
      key="critical-theme-css"
      dangerouslySetInnerHTML={{
        __html: `
          html { 
            visibility: hidden; 
            background-color: #121212; 
          }
          html.dark-theme-init, 
          html.dark-theme-init body { 
            background-color: #121212 !important; 
          }
        `,
      }}
    />,
  ]);

  setPreBodyComponents([
    <script
      key="critical-theme-script"
      dangerouslySetInnerHTML={{ __html: scriptContent }}
    />,
  ]);
};
